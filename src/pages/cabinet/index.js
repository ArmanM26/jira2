import { Button, Typography } from "antd";
import { useState, useEffect } from "react";
import AddIssueModal from "../../components/sheard/IssueModal/Add";
import { useDispatch, useSelector } from "react-redux";
import { fetchIssueData } from "../../state-managment/slices/issues";
import EditIssueModal from "../../components/sheard/IssueModal/Edit";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import LoadingWrapper from "../../components/sheard/LoadingWrapper";

import './index.css';

const { Title } = Typography;

const Cabinet = () => {   
    const dispatch = useDispatch();
    const [ showModal, setShwModal ] = useState(false);
    const [ editModalData, setEditModalData ] = useState(null);
    const { data, isLoading } = useSelector(store => store.issues);
    
    useEffect(() => {
        dispatch(fetchIssueData());
    }, [dispatch]);

    const handleOpenModal = () => {
        setShwModal(true);
    };

    const handleCloseModal = () => {
        setShwModal(false);
    };

    return(
        <div>
            <Button type='primary' onClick={handleOpenModal}>
                Create Issue
            </Button>

            <AddIssueModal isOpen={showModal} onClose={handleCloseModal}/>
            {
                Boolean(editModalData) && <EditIssueModal
                isOpen={Boolean(editModalData)}
                onClose={() => setEditModalData(null)}
                data={editModalData}
                />
            }
            <div className="drag_context_container">
               <LoadingWrapper loading={isLoading}>
                <DragDropContext>
                    {
                        Object.entries(data).map(([columnId, column]) => {
                            return(
                                <div className="column_container" key={columnId}>
                                    <div className="column_header">
                                    <Title level={5} type="secondary">
                                        {columnId}
                                        {' '}
                                        ({column.length})
                                    </Title>
                                    </div>

                                    <div>
                                        <Droppable droppableId={columnId} key={columnId}>
                                            {
                                                (provided, snapshot) => {
                                                    return(
                                                        <div
                                                        {...provided.droppableProps}
                                                        ref={provided.innerRef}
                                                        className="droppable_container"
                                                        >
                                                            {
                                                                column.map((item, index) => {
                                                                    return(
                                                                        <Draggable
                                                                        key={item.taskId}
                                                                        draggableId={item.taskId}
                                                                        index={index}
                                                                        >
                                                                            {
                                                                                (provided, snapshot) => {
                                                                                    return(
                                                                                        <div
                                                                                        className="issue_card_container"
                                                                                        ref={provided.innerRef}
                                                                                        {...provided.draggableProps}
                                                                                        {...provided.dragHandleProps}
                                                                                        >
                                                                                            Task                                                                                                                                                   
                                                                                        </div>
                                                                                    )
                                                                                }
                                                                            }
                                                                        </Draggable>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    )
                                                }
                                            }
                                        </Droppable>
                                    </div>
                                </div>
                            )
                        })
                    }
                </DragDropContext>
               </LoadingWrapper>
            </div>
        </div>
    )
};

export default Cabinet;