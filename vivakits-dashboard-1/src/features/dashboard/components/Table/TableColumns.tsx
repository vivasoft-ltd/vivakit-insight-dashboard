import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  VKChip,
} from '@vivakits/react-components';

export const dataTableColumns = ({
  setOpenDeleteModal,
}: {
  setOpenDeleteModal: (val: boolean) => void;
}) => [
  {
    title: 'Id',
    dataIndex: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    align: 'start',
    width: '20%',
    isSortable: true,
  },
  {
    title: 'User Name',
    dataIndex: 'username',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    render: (d: any) => {
      return (
        <div className="flex w-full items-center justify-center">
          <VKChip color={'secondary'} label={d} className="w-full" />
        </div>
      );
    },
  },
  {
    title: 'Action',
    dataIndex: 'action',
    align: 'center',
    render: () => {
      return (
        <div className="flex items-center justify-center">
          <Dropdown>
            <DropdownTrigger>
              <span className="hover:cursor-pointer">...</span>
            </DropdownTrigger>
            <DropdownMenu align="end">
              <DropdownItem value="Edit">Edit</DropdownItem>
              <DropdownItem
                value="Delete"
                onClick={() => {
                  setOpenDeleteModal(true);
                }}
              >
                Delete
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      );
    },
  },
];
