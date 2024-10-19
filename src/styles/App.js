import Header from "../Components/global/Header";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import Cabinet from "../pages/auth/cabinet";
import Register from "../pages/auth/register";
import MainLayout from "../Components/layouts/Main";
import Login from "../pages/auth/login";
import { ROUTE_CONSTANTS } from "../core/utils/constatns";
import AuthWrapper from "../Components/sheard/AuthWrapper";
import "../App.css";
import "../index.css";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebase";
import { AuthContext, authContext } from "../context/authContext";
import LoadingWrapper from "Components/sheard/LoadingWrapper";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      setIsAuth(Boolean(user));
    });
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <LoadingWrapper loading={loading}>
        <RouterProvider
          router={createBrowserRouter(
            createRoutesFromElements(
              <Route path="/" element={<MainLayout />}>
                <Route
                  path={ROUTE_CONSTANTS.LOGIN}
                  element={
                    isAuth ? (
                      <Navigate to={ROUTE_CONSTANTS.CABINET} />
                    ) : (
                      <Login />
                    )
                  }
                />
                <Route path={ROUTE_CONSTANTS.REGISTER} element={<Register />} />
                <Route path={ROUTE_CONSTANTS.CABINET} element={<Cabinet />} />
              </Route>
            )
          )}
        />
      </LoadingWrapper>
    </AuthContext.Provider>
  );
};

export default App;
