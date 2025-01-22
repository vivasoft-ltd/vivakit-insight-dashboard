import {
    VKCard,
    VKCardHeader,
    VKCardContent,
    VKCardFooter,
    VKButton,
    VKTypography,
    VKBreadCrumbs,
    VKAlert,
    VKFlex,
    VKProgress,
    VKTabs,
    VKTab,
  } from '@vivakits/react-components';
import { Table } from './components/Table';
import UserPosts from './components/UserPosts';
  
  const breadcrumbOptions = [
    {
      title: 'Home',
      href: '#',
    },
    {
      title: 'Dashboard',
      href: '#',
    },
  ];
  
  export default function Dashboard() {
    return (
      <VKFlex direction="column" align="center" className="w-full">
        <VKFlex justify="space-between" align="start" className="w-full my-4">
          <VKFlex direction="column">
            <VKBreadCrumbs separator={'/'} options={breadcrumbOptions} />
            <VKAlert severity="info">
              This is an info alert — check it out!
            </VKAlert>
            <VKAlert severity="success">
              This is an info alert — check it out!
            </VKAlert>
          </VKFlex>
          <VKFlex direction="column" className="w-1/4 ">
            <VKTabs
              orientation="horizontal"
              size="md"
              color="primary"
              defaultActiveId="tab-1"
              borderColor="danger"
              className="w-full h-[140px] rounded-sm"
            >
              <VKTab id="tab-1" title="Progress" className="w-1/2">
                <div className="w-full">
                  <VKProgress.Line
                    percent={60}
                    strokeColor="linear-gradient(to left, red, orange)"
                    info={<span>🔥</span>}
                    infoPos="start"
                  />
                </div>
                <div className="w-full">
                  <VKProgress.Line
                    percent={95}
                    status="success"
                    info={<span>🏆</span>}
                    infoPos="start"
                    containerClassName="bg-green-200"
                    fillClassName="bg-green-700"
                  />
                </div>
              </VKTab>
              <VKTab id="tab-2" title="Growth">
                <VKTypography className="text-slate-500 mt-4">
                  Will be available soon
                </VKTypography>
              </VKTab>
            </VKTabs>
          </VKFlex>
        </VKFlex>
        <VKFlex direction="row" gap={2} className="w-full">
          <VKCard className={'w-1/2'} bgColor="primary" variant="solid">
            <VKCardHeader title="Primary card" />
            <VKCardContent>
              <VKTypography variant="h5">More Info</VKTypography>
              <VKTypography>
                Provide a clear and concise explanation of the purpose of this
                card. Include key details about the topic or functionality
              </VKTypography>
            </VKCardContent>
            <VKCardFooter>
              <VKButton color="light" size="md" rounded="md">
                View more
              </VKButton>
            </VKCardFooter>
          </VKCard>
          <VKCard className={'w-1/2'} bgColor="secondary" variant="solid">
            <VKCardHeader title="Secondary card" />
            <VKCardContent>
              <VKTypography variant="h5">More Info</VKTypography>
              <VKTypography>
                Provide a clear and concise explanation of the purpose of this
                card. Include key details about the topic or functionality
              </VKTypography>
            </VKCardContent>
            <VKCardFooter>
              <VKButton color="light" size="md" rounded="md">
                View more
              </VKButton>
            </VKCardFooter>
          </VKCard>
        </VKFlex>
        <VKFlex className="flex-col lg:flex-row w-full">
          <Table />
          <UserPosts />
        </VKFlex>
      </VKFlex>
    );
  }
  