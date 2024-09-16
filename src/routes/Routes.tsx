import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Donut from "../pages/Donut/Donut";
import Home from "../pages/Home/Home";
import PieChart from "../pages/PieChart/PieChart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/pie-chart",
        element: <PieChart></PieChart>,
      },
      {
        path: "/donut",
        element: <Donut />,
      },
    ],
  },
]);

export default router;
