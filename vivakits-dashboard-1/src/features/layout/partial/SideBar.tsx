import { VKFlex, VKList, VKTypography } from "@vivakits/react-components";
import FacebookIcon from "../../../assets/icons/facebook";
import InstagramIcon from "../../../assets/icons/instagram";
import LinkedInIcon from "../../../assets/icons/linkedin";
import { useLocation } from "react-router-dom";
const Sidebar = () => {
  const data = [
    { label: "Dashboard", path: "/" },
    { label: "Settings", path: "/settings" },
    { label: "About", path: "/about" },
  ];
  const location = useLocation();

  return (
    <VKFlex
      direction="column"
      justify="space-between"
      className="fixed h-full w-48 bg-gray-800 text-white z-50"
    >
      <VKFlex direction="row" className="w-full h-3/4 mt-10">
        <VKList
          dataSource={data}
          split={false}
          className="w-full p-0 mb-0 pb-0"
          renderItem={(item, index) => {
            console.log(location.pathname, item.path)
            const isActive = location.pathname === item.path;
            return (
              <a className="font-semibold" href={item.path}>
                <VKList.Item
                  className={`${
                    isActive ? "bg-[#3B82F6]" : ""
                  } w-full p-2 rounded hover:bg-gray-200 hover:text-gray-800`}
                  key={index}
                >
                  {item.label}
                </VKList.Item>
              </a>
            );
          }}
        />
      </VKFlex>
      <VKFlex direction="column" className="h-1/4 px-2 w-full">
        <VKFlex justify="space-around" className="w-full mb-2">
          <a href="#">
            <FacebookIcon />
          </a>
          <a href="#">
            <InstagramIcon />
          </a>
          <a href="#">
            <LinkedInIcon />
          </a>
        </VKFlex>
        <VKTypography className="text-xs text-center px-2">
          © 2025 <span className="font-bold">Demo </span>
          <span className="text-[#3B82F6] font-bold">Company</span> All rights
          reserved.
        </VKTypography>
      </VKFlex>
    </VKFlex>
  );
};

export default Sidebar;
