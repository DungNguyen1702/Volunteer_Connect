import {
    BookOutlined,
    HeartOutlined,
    LogoutOutlined,
    SettingOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { ICONS } from "../../../constants/icons";
import SupportFunction from '../../../support/support_function'

import("./index.scss");

const useDropdownNavigation = () => {
    const navigate = useNavigate();
    const { setToken, setAccount } = useAuth();

    const getItemDropDownAccount = (role) => {
        // console.log(role);

        const handlerClickLogout = () => {
            const callFunction = async () => {
                await setAccount(null);
                await setToken(null);
                navigate("/user-homepage");
                localStorage.removeItem("account");
                localStorage.removeItem("token");
            };
            callFunction();
            console.log("logout");
        };

        const itemsCandidate = [
            {
                key: "Candidate-dropdown-1",
                label: (
                    <div
                        class="item-wrapper"
                        onClick={() => {
                            navigate("/profile/accountsetting");
                        }}
                    >
                        <UserOutlined className="item-icon" />
                        <p class="item-title">Person info</p>
                    </div>
                ),
            },
            {
                key: "Candidate-dropdown-2",
                label: (
                    <div
                        class="item-wrapper"
                        onClick={() => {
                            navigate("/profile/security");
                        }}
                    >
                        <SettingOutlined className="item-icon" />
                        <p class="item-title">Security</p>
                    </div>
                ),
            },
            {
                key: "Candidate-dropdown-3",
                label: (
                    <div
                        class="item-wrapper"
                        onClick={() => {
                            navigate("/profile/likedPosts");
                        }}
                    >
                        <HeartOutlined className="item-icon" />
                        <p class="item-title">Liked posts</p>
                    </div>
                ),
            },
            {
                key: "Candidate-dropdown-4",
                label: (
                    <div
                        class="item-wrapper"
                        onClick={() => {
                            navigate("/profile/certificate");
                        }}
                    >
                        <BookOutlined className="item-icon" />
                        <p class="item-title">Certificates</p>
                    </div>
                ),
            },
            {
                key: "Candidate-dropdown-5",
                label: (
                    <div class="item-wrapper" onClick={handlerClickLogout}>
                        <LogoutOutlined className="item-icon" />
                        <p class="item-title">Logout</p>
                    </div>
                ),
            },
        ];

        const itemsOrganization = [
            {
                key: "Organization-dropdown-1",
                label: (
                    <div
                        class="item-wrapper"
                        onClick={() => {
                            navigate("/profile/personInfo");
                        }}
                    >
                        <UserOutlined className="item-icon" />
                        <p class="item-title">Person info</p>
                    </div>
                ),
            },
            {
                key: "Organization-dropdown-2",
                label: (
                    <div
                        class="item-wrapper"
                        onClick={() => {
                            navigate("/profile/security");
                        }}
                    >
                        <SettingOutlined className="item-icon" />
                        <p class="item-title">Security</p>
                    </div>
                ),
            },
            {
                key: "Organization-dropdown-3",
                label: (
                    <div
                        class="item-wrapper"
                        onClick={() => {
                            navigate("/profile/likedPosts");
                        }}
                    >
                        <HeartOutlined className="item-icon" />
                        <p class="item-title">Liked posts</p>
                    </div>
                ),
            },
            {
                key: "Organization-dropdown-4",
                label: (
                    <div class="item-wrapper" onClick={handlerClickLogout}>
                        <LogoutOutlined className="item-icon" />
                        <p class="item-title">Logout</p>
                    </div>
                ),
            },
        ];

        const itemsAdmin = [
            {
                key: "Admin-dropdown-1",
                label: (
                    <div
                        class="item-wrapper"
                        onClick={() => {
                            navigate("/profile/personInfo");
                        }}
                    >
                        <UserOutlined className="item-icon" />
                        <p class="item-title">Person info</p>
                    </div>
                ),
            },
            {
                key: "Admin-dropdown-2",
                label: (
                    <div
                        class="item-wrapper"
                        onClick={() => {
                            navigate("/profile/security");
                        }}
                    >
                        <SettingOutlined className="item-icon" />
                        <p class="item-title">Security</p>
                    </div>
                ),
            },
            {
                key: "Admin-dropdown-3",
                label: (
                    <div class="item-wrapper" onClick={handlerClickLogout}>
                        <LogoutOutlined className="item-icon" />
                        <p class="item-title">Logout</p>
                    </div>
                ),
            },
        ];

        switch (role) {
            case 1:
                return itemsCandidate;
            case 2:
                return itemsOrganization;
            case 3:
                return itemsAdmin;
            default:
                return;
        }
    };

    const onClickPost = (id) => {
        navigate(`/post-detail/${id}`);
    };

    const getItemDropDownSearchPost = (filterPosts) => {
        return filterPosts.map((post) => ({
            key: post.id,
            label: (
                <div
                    class="search-post-item"
                    onClick={() => onClickPost(post.id)}
                >
                    <img
                        alt={`post ${post.id} img`}
                        src={post.image}
                        class="search-post-image"
                    />
                    <p class="search-post-item-title">{post.title}</p>
                </div>
            ),
        }));
    };

    const getItemDropDownNoti = (notifications, updateStatusNoti) => {
        const onClickNoti = (e, type, idTO, status, idNoti) => {
            // e.domEvent.stopPropagation();
            console.log(e)

            if(status===0)
            {
                updateStatusNoti(1, idNoti)
            }

            if (type === 1) {
                navigate("/post-detail/" + idTO);
            } else if (type === 2) {
                navigate("/post-detail/" + idTO);
            } else if (type === 3) {
                navigate("/activity-detail/" + idTO);
            } else if (type === 4) {
                navigate("/activity-detail/" + idTO);
            }
        };

        return notifications.length !== 0
            ? notifications.map((noti) => ({
                  key: noti.id,
                  label: (
                      <div
                          class={`noti-item-wrapper ${
                              noti.status === 0 && "noRead-noti-item"
                          }`}
                          onClick={(e) => onClickNoti(e, noti.type, noti.idTO, noti.status, noti.id)}
                      >
                          <img
                              alt="noti-icon"
                              src={noti.image ? noti.image : ICONS.iconNoNoti}
                              class="noti-item-icon"
                          />
                          <div class="noti-item-content-wrapper">
                              <p
                                  class={`noti-item-content ${
                                      noti.status === 0 &&
                                      "noRead-noti-item-content"
                                  }`}
                              >
                                  {noti.content}
                              </p>
                              <p class="noti-item-create-date">
                                  {SupportFunction.convertDateFromArrayToString(noti.createdAt)}
                              </p>
                          </div>
                      </div>
                  ),
              }))
            : [
                  {
                      key: "no-notifications",
                      label: (
                          <div class={`noti-item-wrapper`}>
                              <img
                                  alt="noti-icon"
                                  src={ICONS.iconNoNoti}
                                  class="noti-item-icon"
                              />
                              <div class="noti-item-content-wrapper">
                                  <p class="noti-item-content">
                                      You don't have any notification
                                  </p>
                              </div>
                          </div>
                      ),
                  },
              ];
    };

    return {
        getItemDropDownAccount,
        getItemDropDownSearchPost,
        getItemDropDownNoti,
    };
};

export default useDropdownNavigation;
