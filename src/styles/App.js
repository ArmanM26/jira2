import Header from "./Components/global/Header";
// import { login, register } from "./pages/auth";
import Register from "../pages/auth/register";
import MainLayout from "./Components/layouts/Main";
import Login from "../pages/auth/login";
import { ROUTE_CONSTANTS } from "../core/utils/constatns";
import AuthWrapper from "./Components/sheard/AuthWrapper";
// import "./styles/global.css";
import "../App.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "../index.css";
const App = () => {
  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<MainLayout />}>
            {/* <Header /> */}

            <Route path={ROUTE_CONSTANTS.LOGIN} element={<Login />} />
            <Route path={ROUTE_CONSTANTS.REGISTER} element={<Register />} />
          </Route>
        )
      )}
    />
  );
};

export default App;
