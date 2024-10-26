import { Button, Flex } from "antd";
import "./index.css";
// import { ROUTE_CONSTANTS } from "../../../core/utils/constatns";
// import { Link, useNavigate } from "react-router-dom";
import AuthProfileDropDown from "../sheard/AuthProfileDropDown";
import { AuthContext } from "../../../context/authContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../../../core/utils/constatns";

const Header = () => {
  const { isAuth, userProfileInfo } = useContext(AuthContext);

  return (
    <div className="main_header">
      <Flex justify="space-between" align="center">
        <p>Logo</p>

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
