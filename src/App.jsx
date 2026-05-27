import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Copyhome from "./pages/copyhome";

const router = createBrowserRouter([
 {
  element:<Layout />,
  children:[
    {
      path:"/",
      element:<Home />
    }]
 }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
