import Header from "../Components/global/Header";
import Register from "../pages/register";
import MainLayout from "../Components/layouts/Main";
import Login from "../pages/login";
import { ROUTE_CONSTANTS } from "../core/utils/constatns";
// import "./styles/global.css";
import "../App.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<MainLayout />}>
            <Route path={ROUTE_CONSTANTS.LOGIN} element={<Login />} />
            <Route path={ROUTE_CONSTANTS.REGISTER} element={<Register />} />
          </Route>
        )
      )}
    />
  );
};

export default App;
