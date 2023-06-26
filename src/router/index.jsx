import {Navigate} from "react-router-dom";
import Framework from "@/components/Framework";
import Index from "@/views/index.jsx";
import About from "@/views/about.jsx";
import Settings from "@/views/settings.jsx";
import {CustomerServiceFilled, FolderOpenFilled, HomeFilled, SettingFilled} from "@ant-design/icons";
import Explorer from "@/views/explorer.jsx";

export const childRouter = [
  {
    path: "index",
    element: <Index/>,
    icon: <HomeFilled/>,
    label: "首页",
  },
  {
    path: "explorer",
    element: <Explorer/>,
    icon: <FolderOpenFilled />,
    label: "图库管理器",
  },
  {
    path: "settings",
    element: <Settings/>,
    icon: <SettingFilled/>,
    label: '设置',
  },
  {
    path: "about",
    element: <About/>,
    icon: <CustomerServiceFilled/>,
    label: '关于',
  },
]
export const router = [
  {
    path: "/",
    exact: true,
    element: <Navigate to="/index"/>,
  },
  {
    path: "/",
    element: <Framework/>,
    children: childRouter,
  },
];
