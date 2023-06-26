import {Navigate} from "react-router-dom";
import Framework from "@/components/Framework";
import Index from "@/views/index.jsx";
import About from "@/views/about.jsx";

let router = [
  {
    path: "/",
    exact: true,
    element: <Navigate to="/index"/>,
  },
  {
    path: "/",
    element: <Framework/>,
    children: [
      {
        path: "index",
        element: <Index/>
      },
      {
        path: "/about",
        element: <About/>
      },
      // {
      //   path: "/setting",
      //   element: <Setting />
      // },
      // {
      //   path: "/support",
      //   element: <Support />
      // }
    ],
  },
];

export default router;
