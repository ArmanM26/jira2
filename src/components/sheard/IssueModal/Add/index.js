import { Modal, Form } from "antd";
import { useState } from "react";
import ModalForm from "../Form";
const AddIssueModal = ({ isOpen, onClose }) => {
  const [buttonLoading, setButtonLoading] = useState(false);
  const [form] = Form.useForm();
  const handleCreateIssue = (values) => {
    console.log(values);
  };
  const handleClose = () => {
    onClose();
    form.resetFields();
  };
  return (
    <Modal
      title="Create Issue"
      open={isOpen}
      onCancel={handleClose}
      confirmLoading={buttonLoading}
      onOk={form.submit}
      okText="Create Issue"
      width={600}
      centered
    >
      <ModalForm form={form} onFinish={handleCreateIssue} />
    </Modal>
  );
};
export default AddIssueModal;
