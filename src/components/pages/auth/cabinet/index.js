import { Button } from "antd";
import { useState } from "react";
import AddIssueModal from "../../components/sheard/IssueModal/Add";
const Cabinet = () => {
  const [showModal, setShwModal] = useState(false);
  const handleOpenModal = () => {
    setShwModal(true);
  };
  const handleCloseModal = () => {
    setShwModal(false);
  };
  return (
    <div>
      <Button type="primary" onClick={handleOpenModal}>
        Create Issue
      </Button>
      <AddIssueModal isOpen={showModal} onClose={handleCloseModal} />
    </div>
  );
};
export default Cabinet;
