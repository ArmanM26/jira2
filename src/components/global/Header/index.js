import { Button, Flex } from "antd";
import "./index.css";
// import { ROUTE_CONSTANTS } from "../../../core/utils/constatns";
// import { Link, useNavigate } from "react-router-dom";
import AuthProfileDropDown from "../sheard/AuthProfileDropDown";
import { AuthContext } from "../../../context/authContext";
import { useContext } from "react";
const Header = () => {
  const isAuth = useContext(AuthContext);

  return (
    <div className="main_header">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <p>Logo</p>
        <div style={{ marginLeft: "auto" }}>
          {isAuth ? <AuthProfileDropDown /> : <Button>Sign in</Button>}
        </div>
      </div>
    </div>
  );
};

export default Header;
