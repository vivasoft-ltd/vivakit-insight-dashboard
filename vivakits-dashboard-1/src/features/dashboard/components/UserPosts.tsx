import {
  Skeleton,
  VKAvatar,
  VKButton,
  VKFlex,
  VKList,
  VKTypography,
} from '@vivakits/react-components';
import { useEffect, useState } from 'react';

const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;
interface DataType {
  gender?: string;
  name: {
    title?: string;
    first?: string;
    last?: string;
  };
  email?: string;
  picture: {
    large?: string;
    medium?: string;
    thumbnail?: string;
  };
  nat?: string;
  loading: boolean;
}

const UserPosts = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<DataType[]>([]);
  const [list, setList] = useState<DataType[]>([]);

  useEffect(() => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        setInitLoading(false);
        setData(res.results);
        setList(res.results);
      });
  }, []);
  const onLoadMore = () => {
    setLoading(true);
    setList(
      data.concat(
        [...new Array(count)].map(() => ({
          loading: true,
          name: {},
          picture: {},
        }))
      )
    );
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        const newData = data.concat(res.results);
        setData(newData);
        setList(newData);
        setLoading(false);
        window.dispatchEvent(new Event('resize'));
      });
  };

  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <VKButton
          onClick={onLoadMore}
          className="bg-white text-black border px-5 py-2 rounded-md"
        >
          loading more
        </VKButton>
      </div>
    ) : null;
  return (
    <VKFlex direction="column" className="p-2 w-full lg:w-1/2 h-[560px]">
      <VKFlex
        justify="center"
        align="center"
        className="bg-primary w-full  mb-[-10] mt-[1px] rounded"
      >
        <VKTypography className="text-white p-[10px] font-bold text-lg">
          Let's catch up
        </VKTypography>
      </VKFlex>
      <VKList
        bordered
        loading={initLoading}
        dataSource={list}
        loadMore={loadMore}
        skeletonLoader={
          <div className="flex justify-between w-1/4">
            <Skeleton variant="circular" width={60} height={60} />
            <div className="flex flex-col justify-start gap-2">
              <Skeleton width={240} />
              <Skeleton width={150} />
            </div>
          </div>
        }
        className=" overflow-y-auto"
        renderItem={(item) => (
          <VKList.Item key={item.email}>
            <VKList.Item.Meta
              avatar={
                <VKAvatar
                  src={item.picture.large}
                  size={'sm'}
                  variant={'image'}
                />
              }
              title={
                <a href="https://vivakit.vivasoftltd.com/">{item.name?.last}</a>
              }
              description="Viva-Kit, a design language for background applications, is refined by Vivasoft Limited Frontend Team"
            />
          </VKList.Item>
        )}
      />
    </VKFlex>
  );
};

export default UserPosts;
