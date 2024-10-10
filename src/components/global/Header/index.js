import { Flex, Button } from "antd";
import "./index.css";
import { ROUTE_CONSTANTS } from "../../../core/utils/constatns";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  return (
    <div className="main_header">
      <div className="header_logo">
        <p>Logo</p>
      </div>
      <div className="header_signin">
        <Link to="/login" className="signin_button">
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default Header;
