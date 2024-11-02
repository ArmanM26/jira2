import { useContext, useEffect, useState } from "react";
import { Form, Input, Button, notification, Upload } from "antd";
import { AuthContext } from "../../context/authContext";
import { db } from "../../services/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { FIRESTORE_PATH_NAMES } from "../../core/utils/constatns";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../state-managment/slices/userProfile";
import "./index.css";

const Profile = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((store) => store.userProfile);
  const { userProfileInfo, handleGetUserData } = useContext(AuthContext);
  const [form] = Form.useForm();
  const [buttonLoading, setButtonLoading] = useState(false);
  const { uid, ...restData } = userProfileInfo;

  useEffect(() => {
    form.setFieldsValue(restData);
  }, [form, restData]);

  const handleEditUserProfile = async (values) => {
    setButtonLoading(true);
    try {
      const userDocRef = doc(db, FIRESTORE_PATH_NAMES.REGISTERED_USERS, uid);
      await updateDoc(userDocRef, values);
      handleGetUserData(uid);
      notification.info({ message: "User data successfully updated" });
    } catch (error) {
      notification.error({ message: "Error :(" });
    } finally {
      setButtonLoading(false);
    }
  };

  return (
    <div className="form_page_container">
      <hr />
      <Button onClick={() => dispatch(decrement())}>-</Button>
      <span>{count}</span>
      <Button onClick={() => dispatch(increment())}>+</Button>
      <Form layout="vertical" form={form} onFinish={handleEditUserProfile}>
        <Form.Item label="Profile image">
          <Upload></Upload>
        </Form.Item>
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[{ required: true, message: "Please input your First Name!" }]}
        >
          <Input placeholder="First Name" />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[{ required: true, message: "Please input your Last Name!" }]}
        >
          <Input placeholder="Last Name" />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input readOnly placeholder="Email" />
        </Form.Item>
        <Form.Item label="Phone Number" name="phoneNumber">
          <Input placeholder="Phone Number" />
        </Form.Item>
        <Button type="primary" htmlType="submit" loading={buttonLoading}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Profile;
