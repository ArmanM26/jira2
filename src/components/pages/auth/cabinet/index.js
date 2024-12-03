import { Button } from "antd";
import { useState, useEffect } from "react";
import AddIssueModal from "../../../Components/sheard/IssueModal/Add";
import { useDispatch, useSelector } from "react-redux";
import { fetchIssueData } from "../../../state-managment/slices/issues";

const Cabinet = () => {
  const dispatch = useDispatch();
  const [showModal, setShwModal] = useState(false);
  const { data } = useSelector((store) => store.issues);
  console.log(data);

  useEffect(() => {
    dispatch(fetchIssueData());
  }, [dispatch]);

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
