import React, { useContext } from "react";
import { Button, Flex } from "antd";
import AuthProfileDropDown from "./../sheard/AuthProfileDropDown";
import { AuthContext } from "../../../context/authContext";
import { Link } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../../../core/utils/constatns";
import { useSelector } from "react-redux";

const Header = () => {
  const { isAuth, userProfileInfo } = useContext(AuthContext);
  const { count } = useSelector((store) => store.userProfile);

  return (
    <div className="main_header">
      <Flex justify="space-between" align="center">
        <p>{count}</p>
        <div>
          {isAuth ? (
            <AuthProfileDropDown userProfileInfo={userProfileInfo} />
          ) : (
            <Link to={ROUTE_CONSTANTS.LOGIN}>
              <Button>Sign in</Button>
            </Link>
          )}
        </div>
      </Flex>
    </div>
  );
};

export default Header;
