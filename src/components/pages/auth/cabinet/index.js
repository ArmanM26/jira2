import { Button } from "antd";
import { useState, useEffect } from "react";
import AddIssueModal from "../../../Components/sheard/IssueModal/Add";
import { useDispatch, useSelector } from "react-redux";
import { fetchIssueData } from "../../../state-managment/slices/issues";
import EditIssueModal from "../../../Components/sheard/IssueModal/Edit";

const Cabinet = () => {
  const dispatch = useDispatch();
  const [showModal, setShwModal] = useState(false);
  const [editModalData, setEditModalData] = useState(null);
  const { data } = useSelector((store) => store.issues);

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
      {Boolean(editModalData) && (
        <EditIssueModal
          isOpen={Boolean(editModalData)}
          onClose={() => setEditModalData(null)}
          data={editModalData}
        />
      )}
      <div>
        <ul>
          {data.map((item) => {
            return (
              <li key={item.taskId} onClick={() => setEditModalData(item)}>
                {item.issueName}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Cabinet;
