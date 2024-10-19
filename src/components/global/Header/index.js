import { Flex } from "antd";
import "./index.css";
// import { ROUTE_CONSTANTS } from "../../../core/utils/constatns";
// import { Link, useNavigate } from "react-router-dom";
import AuthProfileDropDown from "../sheard/AuthProfileDropDown";

const Header = () => {
  return (
    <div className="main_header">
      <Flex justify="space-between" align="center" style={{ width: "100%" }}>
        <p>Logo</p>
        <div style={{ marginLeft: "auto" }}>
          {" "}
          <AuthProfileDropDown />
        </div>
      </Flex>
    </div>
  );
};

export default Header;
