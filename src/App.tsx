import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./components/layout";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./components/dashboard";
import ManageCategory from "./pages/admin/manage-category";
import ManageProduct from "./pages/admin/manage-product";
import ManageVoucher from "./pages/admin/manage-voucher";
import OrderPage from "./pages/order_page";
import CheckOut from "./pages/check-out";
import Details from "./pages/details";
import ManageFood from "./pages/admin/food";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout/>,
      children: [
        {path:"", element: <Home/>},
        {path:"/login", element: <Login/>},
        {path:"/register", element: <Register/>},
        {path:"/check-out", element: <CheckOut/>},
        {path:"/details/:id", element: <Details/>},
        
      ],
    },
    {
      path:"dashboard",
      element:<Dashboard/>,
      children:[
        {
        path:"category",
        element: <ManageCategory/>,
      },
      {
        path:"product",
        element: <ManageProduct/>,
      },
      {
        path:"voucher",
        element: <ManageVoucher/>,
      },
      {
        path:"food",
        element: <ManageFood/>,
      },
    ],
    },
    {
      path:"/order_page", 
      element: <OrderPage/>,
    },
  ]); 

  return  <RouterProvider router={router} />
}

export default App;