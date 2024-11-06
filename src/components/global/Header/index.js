import React, { useContext } from "react";
import { Button, Flex } from "antd";
import AuthProfileDropDown from "../sheard/AuthProfileDropDown";
import { AuthContext } from "../../../context/authContext";
import { Link } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../../../core/utils/constatns";
import { useSelector } from "react-redux";

const Header = () => {
  const {
    authUserInfo: { isAuth, userData },
  } = useSelector((store) => store.userProfile);
  return (
    <div className="main_header">
      <Flex justify="space-between" align="center">
        <p>Logo</p>

        <div>
          {isAuth ? (
            <AuthProfileDropDown userProfileInfo={userData} />
          ) : (
            <Link to={ROUTE_CONSTANTS.LOGIN}>
              <Button>Sign In</Button>
            </Link>
          )}
        </div>
      </Flex>
    </div>
  );
};

export default Header;
