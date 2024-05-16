import { useParams } from "react-router-dom";
import "./index.scss";
import fakeData from "../../../data/fake_data.json";
import SupportFunction from "../../../support/support_function";
import { Button } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { COLOR_FONT, COLOR_STATUS } from "../../../constants/color_status";
import OrganizationIcon from "../../../components/organization";
import { createContext, useEffect, useState } from "react";
import { ICONS } from "../../../constants/icons";
import PostManagement from "./PostManagement";
import TaskManagement from "./TaskManagement";
import MemberManagement from "./MemberMangement";
import { ToastContainer, toast } from "react-toastify";
import UpdateActModal from "./Component/UpdateModal";
import DeleteActModal from "./Component/DeleteModal";
import useAuth from "../../../hooks/useAuth";
import activityAPI from "../../../api/activityAPI";
import candidateAPI from "../../../api/candidateAPI";
import applyFormAPI from "../../../api/applyFormAPI";

export const ActivityDetailContext = createContext();

function ActivityDetail() {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const { account } = useAuth();
    const [activityStatus, setActivityStatus] = useState(null);
    const [org, setOrg] = useState(null);
    const [tabButton, setTabButton] = useState(2);
    const [isDeleteAct, setIsDeleteAct] = useState(false);
    const [isUpdateAct, setIsUpdateAct] = useState(false);
    const [listCandidate, setListCandidate] = useState([]);
    const [listApplyForm, setListApplyForm] = useState([]);
    const [listPost, setListPost] = useState([]);

    useEffect(() => {
        const callApi = async () => {
            await activityAPI
                .getActivityDetail(id)
                .then((response) => {
                    // console.log(response.data);
                    setData(response.data);
                    setListCandidate(response.data.candidates);
                    setOrg(response.data.organization);
                    setListPost(response.data.postList);
                })
                .catch((error) => {
                    console.log(error);
                });
            await applyFormAPI
                .getAllApplyFormByActivityID(id)
                .then((response) => {setListApplyForm(response.data)
                console.log(response.data);
            })
                .catch((error) => console.log(error));
        };
        callApi();
    }, []);

    const onClickUpdate = () => {
        setIsUpdateAct(true);
    };
    const onClickDelete = () => {
        setIsDeleteAct(true);
    };
    const onClickTask = () => {
        setTabButton(1);
    };
    const onClickPost = () => {
        setTabButton(2);
    };
    const onClickMember = () => {
        setTabButton(3);
    };

    const updateAct = (newAct) => {
        const updateAPI = async () => {
            await activityAPI
                .updateActivity({ ...newAct, id: id })
                .then((response) => {
                    const updatedAct = { ...data, ...newAct };
                    setData(updatedAct);
                    toast.success("Update activity successfully");
                })
                .catch((error) => {
                    console.log(error);
                    toast.error("Update activity failed");
                });
        };
        updateAPI();
    };

    const updateCandidate = (candidateId, newCandidate) => {
        const callApi = async () => {
            await candidateAPI
                .updateCandidate(candidateId, newCandidate)
                .then((response) => {
                    const newListCandidate = listCandidate.map((candidate) => {
                        if (candidate.id === candidateId)
                            return { ...candidate, ...newCandidate };
                        else return candidate;
                    });
                    setListCandidate(newListCandidate);
                })
                .catch((error) => console.log(error));
        };
        callApi();
    };

    const deleteCandidate = (candidateId) => {
        const newListCandidate = listCandidate.filter(
            (candidate) => candidate.id !== candidateId
        );
        setListCandidate(newListCandidate);
    };

    const confirmApplyForm = (applyFormId) => {
        const findApplyForm = listApplyForm.find(
            (applyForm) => applyForm.id === applyFormId
        );

        // Gửi api lên và lấy về newCandidate rồi add vào
        const newCandidate = {
            id: listCandidate.length,
            activity_id: data.id,
            certificate: null,
            date_earn_certificate: null,
            createdAt: SupportFunction.getCurrentlyDate(),
            user: findApplyForm.user,
            user_id: findApplyForm.user_id,
        };

        const newListApplyForm = listApplyForm.filter(
            (applyForm) => applyForm.id !== applyFormId
        );

        setListApplyForm(newListApplyForm);
        setListCandidate([...listCandidate, newCandidate]);
    };

    const denyApplyForm = (applyFormId) => {
        // Gửi api về set thành false
        const newListApplyForm = listApplyForm.filter(
            (applyForm) => applyForm.id !== applyFormId
        );

        setListApplyForm(newListApplyForm);
    };

    const deletePost = (postId) => {
        const newListPost = listPost.filter((post) => post.id !== postId);
        setListPost(newListPost);
    };

    return (
        <div class="activity-detail-wrapper">
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                closeOnClick={true}
                pauseOnHover={true}
                draggable={true}
                progress={undefined}
                theme="colored"
            />
            {data && (
                <div>
                    <div class="activity-detail-header">
                        <img
                            alt="activity-img"
                            src={data.image}
                            id="activity-image"
                        />
                        <div id="activity-img-blur"></div>
                        <div id="activity-header-content-wrapper">
                            {parseInt(account.role) === 2 && (
                                <div id="activity-manager-button-wrapper">
                                    <Button
                                        className="activity-manager-button-item"
                                        onClick={onClickUpdate}
                                        icon={
                                            <EditOutlined className="activity-manager-button-icon" />
                                        }
                                    >
                                        Update
                                    </Button>
                                    <Button
                                        className="activity-manager-button-item"
                                        onClick={onClickDelete}
                                        icon={
                                            <DeleteOutlined className="activity-manager-button-icon" />
                                        }
                                    >
                                        Delete
                                    </Button>
                                    {isDeleteAct && (
                                        <DeleteActModal
                                            isDeleteAct={isDeleteAct}
                                            setIsDeleteAct={setIsDeleteAct}
                                            actId={data.id}
                                        />
                                    )}
                                    {isUpdateAct && (
                                        <UpdateActModal
                                            updateAct={updateAct}
                                            isUpdateAct={isUpdateAct}
                                            setIsUpdateAct={setIsUpdateAct}
                                            actInfo={data}
                                        />
                                    )}
                                </div>
                            )}
                            <h1 id="activity-name">{data.name}</h1>
                            <h3
                                id="activity-status"
                                style={{
                                    backgroundColor:
                                        COLOR_STATUS[activityStatus],
                                    color: COLOR_FONT[activityStatus],
                                }}
                            >
                                {activityStatus}
                            </h3>
                            <div class="activity-header-info-hr-wrapper">
                                <div id="activity-header-info-wrapper">
                                    <div class="activity-header-info-item-container">
                                        <div class="activity-header-info-item">
                                            <p class="activity-header-info-item-title">
                                                Organization :{" "}
                                            </p>
                                            <div class="activity-header-info-item-content">
                                                {org && (
                                                    <OrganizationIcon
                                                        name={org.name}
                                                        avatar={org.avatar}
                                                        id={org.id}
                                                    />
                                                )}
                                            </div>
                                        </div>
                                        <div class="activity-header-info-item">
                                            <p class="activity-header-info-item-title">
                                                Location :{" "}
                                            </p>
                                            <p class="activity-header-info-item-content">
                                                {data.location},{" "}
                                                {SupportFunction.ActivityCountry(
                                                    data.country
                                                )}
                                            </p>
                                        </div>
                                        <div class="activity-header-info-item">
                                            <p class="activity-header-info-item-title">
                                                Start date :{" "}
                                            </p>
                                            <p class="activity-header-info-item-content">
                                                {data.dateStart}
                                            </p>
                                        </div>
                                        <div class="activity-header-info-item">
                                            <p class="activity-header-info-item-title">
                                                End date :{" "}
                                            </p>
                                            <p class="activity-header-info-item-content">
                                                {data.dateEnd}
                                            </p>
                                        </div>
                                        <div class="activity-header-info-item">
                                            <p class="activity-header-info-item-title">
                                                Registration date :{" "}
                                            </p>
                                            <p class="activity-header-info-item-content">
                                                {data.dateEnd}
                                            </p>
                                        </div>
                                    </div>
                                    <div id="vertical-line"></div>
                                    <div class="activity-header-info-item-container">
                                        <div class="activity-header-info-item">
                                            <p class="activity-header-info-item-title">
                                                Participant number :{" "}
                                            </p>
                                            <p class="activity-header-info-item-content">
                                                {SupportFunction.getStringParticipant(
                                                    data.participants
                                                )}
                                            </p>
                                        </div>
                                        <div class="activity-header-info-item">
                                            <p class="activity-header-info-item-title">
                                                Post number :{" "}
                                            </p>
                                            <p class="activity-header-info-item-content">
                                                {SupportFunction.getStringPost(
                                                    data.postNumber
                                                )}
                                            </p>
                                        </div>
                                        <div class="activity-header-info-item">
                                            <p class="activity-header-info-item-title">
                                                Category :{" "}
                                            </p>
                                            <p class="activity-header-info-item-content">
                                                {SupportFunction.ActivityType(
                                                    data.type
                                                )}
                                            </p>
                                        </div>
                                        <div class="activity-header-info-item">
                                            <p class="activity-header-info-item-title">
                                                Apply form number :{" "}
                                            </p>
                                            <p class="activity-header-info-item-content">
                                                {SupportFunction.getStringApplyForm(
                                                    data.applyFormNumber
                                                )}
                                            </p>
                                        </div>
                                        <div class="activity-header-info-item">
                                            <p class="activity-header-info-item-title">
                                                Email :{" "}
                                            </p>
                                            <p class="activity-header-info-item-content">
                                                {data.email}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <hr id="horizontal-line"></hr>
                            </div>
                            <p id="activity-content">{`"${data.content}"`}</p>
                            <div id="tabbar-button-wrapper">
                                <Button
                                    className={`tabbar-button ${
                                        tabButton === 1
                                            ? "tabbar-button-active"
                                            : "tabbar-button-inactive"
                                    }`}
                                    onClick={onClickTask}
                                >
                                    <img
                                        alt="post-management-icon"
                                        src={
                                            tabButton === 1
                                                ? ICONS.TaskActive
                                                : ICONS.TaskInActive
                                        }
                                        class="tab-button-icon"
                                    />
                                    {tabButton === 1 ? (
                                        <p class="tab-button-text">
                                            Task management
                                        </p>
                                    ) : null}
                                </Button>
                                <Button
                                    className={`tabbar-button ${
                                        tabButton === 2
                                            ? "tabbar-button-active"
                                            : "tabbar-button-inactive"
                                    }`}
                                    onClick={onClickPost}
                                >
                                    <img
                                        alt="post-management-icon"
                                        src={
                                            tabButton === 2
                                                ? ICONS.PostActive
                                                : ICONS.PostInActive
                                        }
                                        class="tab-button-icon"
                                    />
                                    {tabButton === 2 ? (
                                        <p class="tab-button-text">
                                            Post management
                                        </p>
                                    ) : null}
                                </Button>
                                <Button
                                    className={`tabbar-button ${
                                        tabButton === 3
                                            ? "tabbar-button-active"
                                            : "tabbar-button-inactive"
                                    }`}
                                    onClick={onClickMember}
                                >
                                    <img
                                        alt="member-management-icon"
                                        src={
                                            tabButton === 3
                                                ? ICONS.MemberActive
                                                : ICONS.MemberInActive
                                        }
                                        class="tab-button-icon"
                                    />
                                    {tabButton === 3 ? (
                                        <p class="tab-button-text">
                                            Member management
                                        </p>
                                    ) : null}
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div class="activity-tab-content">
                        <ActivityDetailContext.Provider
                            value={{
                                listCandidate: listCandidate,
                                listApplyForm: listApplyForm,
                                postList: listPost,
                                actInfo: data,
                                updateCandidate: updateCandidate,
                                deleteCandidate: deleteCandidate,
                                confirmApplyForm: confirmApplyForm,
                                denyApplyForm: denyApplyForm,
                                deletePost: deletePost,
                            }}
                        >
                            {tabButton === 1 ? (
                                <TaskManagement />
                            ) : tabButton === 2 ? (
                                <PostManagement />
                            ) : (
                                <MemberManagement />
                            )}
                        </ActivityDetailContext.Provider>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ActivityDetail;
