import {Navigate} from "react-router-dom";
import Framework from "@/components/Framework";
import Index from "@/views/index.jsx";
import About from "@/views/about.jsx";
import Settings from "@/views/settings.jsx";
import Explorer from "@/views/explorer.jsx";
import {IconFolderOpen, IconHome, IconInfoCircle, IconSetting} from "@douyinfe/semi-icons";
import Studio from "@/views/studio.jsx";

export const childRouter = [
  {
    path: "index",
    element: <Index/>,
    icon: <IconHome/>,
    text: "首页",
  },
  {
    path: "explorer",
    element: <Explorer/>,
    icon: <IconFolderOpen/>,
    text: "配置管理器",
  },
  {
    path: "settings",
    element: <Settings/>,
    icon: <IconSetting/>,
    text: '设置',
  },
  {
    path: "about",
    element: <About/>,
    icon: <IconInfoCircle/>,
    text: '关于',
  },
  {
    path: "studio",
    element: <Studio/>,
    text: '工作室',
    hide: true
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
