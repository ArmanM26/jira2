// import Header from "./Components/global/Header";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
// import { useCallback } from "react";
// import Cabinet from "./pages/auth/cabinet";
import Register from "./pages/auth/register";
import MainLayout from "./Components/layouts/Main";
import Login from "./pages/auth/login";
import { ROUTE_CONSTANTS } from "./core/utils/constatns";
// import AuthWrapper from "./Components/sheard/AuthWrapper";
import "./App.css";
import "./index.css";
import { useEffect, useState } from "react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth, db } from "./services/firebase";
// import { AuthContext } from "./context/authContext";
import LoadingWrapper from "../Components/sheard/LoadingWrapper";
import Profile from "./pages/profile";
// import { getDoc, doc } from "firebase/firestore";
// import { FIRESTORE_PATH_NAMES } from "./core/utils/constatns";
import CabinetLayout from "./Components/layouts/Cabinet";
// import { Provider } from "react-redux";
// import { store } from "./state-managment/store";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserProfileInfo } from "./state-managment/slices/userProfile";

const App = () => {
  const {
    loading,
    authUserInfo: { isAuth },
  } = useSelector((store) => store.userProfile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserProfileInfo());
  }, [dispatch]);

  return (
    <LoadingWrapper loading={loading}>
      <RouterProvider
        router={createBrowserRouter(
          createRoutesFromElements(
            <Route path="/" element={<MainLayout />}>
              <Route
                path={ROUTE_CONSTANTS.LOGIN}
                element={
                  isAuth ? <Navigate to={ROUTE_CONSTANTS.CABINET} /> : <Login />
                }
              />
              <Route
                path={ROUTE_CONSTANTS.REGISTER}
                element={
                  isAuth ? (
                    <Navigate to={ROUTE_CONSTANTS.CABINET} />
                  ) : (
                    <Register />
                  )
                }
              />

              <Route
                path={ROUTE_CONSTANTS.CABINET}
                element={
                  isAuth ? (
                    <CabinetLayout />
                  ) : (
                    <Navigate to={ROUTE_CONSTANTS.LOGIN} />
                  )
                }
              >
                <Route path={ROUTE_CONSTANTS.PROFILE} element={<Profile />} />
              </Route>
            </Route>
          )
        )}
      />
    </LoadingWrapper>
  );
};

export default App;
