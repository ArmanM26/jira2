import { Avatar, Dropdown, Button, Typography, Flex, theme } from "antd";
import "./index.css";

const { useToken } = theme;
const { Text } = Typography;

const AuthProfileDropDown = () => {
  const { token } = useToken();
  console.log(token, "token");

  const items = [
    {
      label: "Profile",
      key: "0",
    },
    {
      label: "Cabinet",
      key: "1",
    },
    {
      label: "Logout",
      key: "2",
    },
  ];

  return (
    <Dropdown
      menu={{ items }}
      trigger={["click"]}
      dropdownRender={(menu) => {
        return (
          <div
            style={{
              borderRadius: token.borderRadiusLG,
              backgroundColor: token.colorBgElevated,
              boxShadow: token.boxShadowSecondary,
              padding: token.sizeXS,
            }}
          >
            <Flex vertical align="center" style={{ padding: token.sizeMS }}>
              <Avatar
                src="https://img.freepik.com/free-vector/user-blue-gradient_78370-4692.jpg?ga=GA1.1.1067879588.1728592679&semt=ais_hybrid"
                size="large"
              />
              <Text strong style={{ marginTop: 10 }}>
                John Smith
              </Text>
              <Text type="secondary">johnsmith@gmail.com</Text>
            </Flex>
            {menu}
          </div>
        );
      }}
    >
      <Flex direction="column" align="center" style={{ padding: token.sizeMS }}>
        <Avatar size="large" className="user_profile_avatar">
          J S
        </Avatar>
      </Flex>
    </Dropdown>
  );
};

export default AuthProfileDropDown;
