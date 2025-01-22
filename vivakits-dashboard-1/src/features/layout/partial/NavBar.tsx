import { useState } from 'react';
import {
  VKActionIcon,
  VKGroup,
  VKBadge,
  VKAvatar,
  VKInput,
  DropdownMenu,
  Dropdown,
  DropdownItem,
  DropdownTrigger,
  VKFlex,
  VKTypography,
} from '@vivakits/react-components';
import CrossIcon from '../../../assets/icons/cross';
import SearchIcon from '../../../assets/icons/search';
import BellIcon from '../../../assets/icons/bell';
import NameIcon from '../../../assets/icons/name';
import SettingIcon from '../../../assets/icons/setting';
import SupportIcon from '../../../assets/icons/support';
import LogoutIcon from '../../../assets/icons/logout';


const NavBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <VKFlex
      direction="row"
      justify="space-between"
      align="center"
      className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 shadow-md z-50"
    >
      <VKFlex direction="row" align="center">
        <VKTypography className="text-3xl font-bold text-blue-500">
          <span className="text-3xl font-bold text-white">Demo</span> Company
        </VKTypography>
      </VKFlex>

      <VKFlex className="flex items-center space-x-6">
        {isSearchOpen && (
          <VKGroup
            color="none"
            noSeparator
            border="none"
            childrenProps={{ className: 'w-fit' }}
          >
            <VKInput
              size="md"
              wrapperClassName="text-red"
              placeholder="Search"
              onChange={(t) => {
                console.log(t);
              }}
            />
          </VKGroup>
        )}

        <VKGroup border="none" className="relative">
          <VKGroup
            color="primary"
            border="none"
            noSeparator
            className="flex justify-center items-center flex-wrap"
          >
            <VKActionIcon
              onClick={() => {
                setIsSearchOpen(!isSearchOpen);
              }}
              icon={isSearchOpen === true ? <CrossIcon /> : <SearchIcon />}
              size="md"
              rounded="md"
              color="primary"
            />
          </VKGroup>
        </VKGroup>

        <VKBadge
          size="md"
          placement="topRight"
          variant="circular"
          content="10"
          color="secondary"
        >
          <BellIcon />
        </VKBadge>

        <div className="cursor-pointer">
          <VKGroup
            color="none"
            border="none"
            noSeparator
            className="flex justify-center items-center gap-6 flex-wrap"
          >
            <Dropdown>
              <DropdownTrigger>
                <VKAvatar
                  variant="image"
                  size="sm"
                  src="https://i.pravatar.cc/100?u=a04258114e29026302d"
                />
              </DropdownTrigger>
              <DropdownMenu align="start" className="w-[200px] ml-[-200px]">
                <DropdownItem value="Avatar">
                  <VKFlex
                    direction="row"
                    justify="start"
                    align="center"
                    className="mb-2"
                  >
                    <VKAvatar
                      variant="image"
                      color="secondary"
                      src="https://i.pravatar.cc/100?u=a04258114e29026302d"
                      alt="person with camera"
                      withBorder
                      className="h-10 w-10"
                    />
                    <VKFlex className="flex flex-col justify-center ml-2 gap-1">
                      <VKTypography className="font-semibold text-sm">
                        Monkey D Luffy
                      </VKTypography>
                      <VKTypography className="text-sm">
                        strawhat@vivasoftltd.com
                      </VKTypography>
                    </VKFlex>
                  </VKFlex>
                  <hr />
                </DropdownItem>
                <DropdownItem value="Profile">
                  <VKFlex
                    direction="row"
                    justify="start"
                    gap={2}
                    align="center"
                  >
                    <NameIcon /> Profile
                  </VKFlex>
                </DropdownItem>
                <DropdownItem value="Setting">
                  <VKFlex
                    direction="row"
                    justify="start"
                    gap={2}
                    align="center"
                  >
                    <SettingIcon /> Setting
                  </VKFlex>
                </DropdownItem>
                <DropdownItem value="Support">
                  <VKFlex
                    direction="row"
                    justify="start"
                    gap={2}
                    align="center"
                  >
                    <SupportIcon /> Support
                  </VKFlex>
                </DropdownItem>
                <DropdownItem value="Logout">
                  <VKFlex
                    direction="row"
                    justify="start"
                    gap={2}
                    align="center"
                  >
                    <LogoutIcon /> Logout
                  </VKFlex>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </VKGroup>
        </div>
      </VKFlex>
    </VKFlex>
  );
};

export default NavBar;
