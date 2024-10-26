import Header from "./Components/global/Header";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import Cabinet from "./pages/auth/cabinet";
import Register from "./pages/auth/register";
import MainLayout from "./Components/layouts/Main";
import Login from "./pages/auth/login";
import { ROUTE_CONSTANTS } from "./core/utils/constatns";
import AuthWrapper from "./Components/sheard/AuthWrapper";
import "./App.css";
import "./index.css";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./services/firebase";
import { AuthContext } from "./context/authContext";
import LoadingWrapper from "../Components/sheard/LoadingWrapper";
import Profile from "./pages/profile";
import { getDoc, doc } from "firebase/firestore";
import { FIRESTORE_PATH_NAMES } from "./core/utils/constatns";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userProfileInfo, setUserProfileInfo] = useState({});

  const handleGetUserData = async (uid) => {
    const docRef = doc(db, FIRESTORE_PATH_NAMES.REGISTERED_USERS, uid);
    const response = await getDoc(docRef);

    if (response.exists()) {
      setUserProfileInfo(response.data());
    }
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      user.uid && handleGetUserData(user.uid);

      setLoading(false);
      setIsAuth(Boolean(user));
    });
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, userProfileInfo }}>
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
                <Route
                  path={ROUTE_CONSTANTS.PROFILE}
                  element={
                    isAuth ? (
                      <Profile />
                    ) : (
                      <Navigate to={ROUTE_CONSTANTS.LOGIN} />
                    )
                  }
                />
              </Route>
            )
          )}
        />
      </LoadingWrapper>
    </AuthContext.Provider>
  );
};

export default App;
