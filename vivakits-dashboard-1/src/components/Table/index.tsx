import { useEffect, useState } from 'react';
import {
  AsyncDatatable,
  VKButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  useVKNotifications,
} from '@vivakits/react-components';
import { TableHeader } from './TableHeader';
import { dataTableColumns } from './TableColumns';

interface DataType {
  id?: string;
  name?: string;
  username?: string;
  website: string;
  email?: string;
}
const fakeDataUrl = 'https://jsonplaceholder.typicode.com/users';

export const Table = () => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<DataType[]>([]);
  const { notify } = useVKNotifications();

  useEffect(() => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setList(res);
      });
  }, []);

  return (
    <div className="w-full lg:w-1/2">
      <TableHeader />
      <AsyncDatatable
        isLoading={loading}
        columnDefinitions={dataTableColumns({ setOpenDeleteModal }) as any}
        dataSource={list.slice(0, 5)}
        isSelectableMulti
        selectedRows={selectedRows}
        handleOnSelectChange={(selectedItems) =>
          setSelectedRows(selectedItems as [])
        }
        totalPages={7}
        currentPage={1}
        noOfEntries={5}
        horizontalBorder
        stripped
        stripeColor="#FCFCFD"
        headerWrapperClassName="!bg-gray-50"
        headItemClassName="text-xs border-t-0 px-6 py-3"
        rowItemClassName="text-sm px-6 py-5"
        tableWrapperClassName="w-full !px-0"
        tableBodyWrapperClassName="w-full"
        entriesHeaderClassName="text-gray-900"
        selectEntriesWrapperClassName="rounded-[0.25rem] !border-gray-200 min-w-[3.5rem] bg-white text-gray-900 cursor-pointer"
        handlePageChange={(page) => {
          console.debug(page);
        }}
        paginationNoOfEntriesWrapperClassName={
          'bg-red-200 text-xs text-gray-700'
        }
        paginationWrapperClassName="text-gray-700 mt-2"
        paginationButtonClassName="font-semibold text-gray-500 hover:bg-gray-50 hover:text-gray-800"
        paginationButtonSelectedClassName="!bg-gray-50 !text-gray-800"
        entriesWrapperClassName="mt-2"
        entriesHeader={'Items'}
        dynamicPreviousText={'Prev'}
        dynamicNextText={'Next'}
        handleNoOfEntriesChange={(pageSize) => {
          console.debug(pageSize);
        }}
      />
      <Modal open={openDeleteModal}>
        <ModalContent className="w-[500px]">
          <ModalBody className="p-4">
            <div className="p-4 md:p-5 text-center">
              <svg
                className="mx-auto mb-4 text-red-400 w-12 h-12"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p className="text-lg font-normal text-gray-950">
                Are you sure you want to delete this product?
              </p>
            </div>
          </ModalBody>
          <ModalFooter className="rounded-b-lg">
            <VKButton
              onClick={() => {
                notify({
                  title: 'Delete Success',
                  color: 'success',
                  description: 'This is an example of notification',
                  autoClose: true,
                  duration: 3000,
                  placement: 'topRight',
                });
                setOpenDeleteModal(false);
              }}
              className="px-4 py-2"
              rounded="md"
              color="danger"
            >
              Yes, Delete
            </VKButton>
            <VKButton
              rounded="md"
              color="light"
              onClick={() => {
                setOpenDeleteModal(false);
              }}
              className="px-4 py-2"
            >
              Cancel
            </VKButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
