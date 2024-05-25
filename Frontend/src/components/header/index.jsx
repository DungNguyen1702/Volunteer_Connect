import "./index.scss";
import { ICONS } from "../../constants/icons";
import { Badge, Button, Dropdown } from "antd";
import {
    BellOutlined,
    CalendarOutlined,
    CaretDownOutlined,
    HomeOutlined,
    MessageOutlined,
    SearchOutlined,
    TeamOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import Search from "antd/es/input/Search";
import useDropdownNavigation from "./dropdown";
import { useNavigate } from "react-router-dom";
import AvatarAccount from "../avatar/AvatarAccount";
import useAuth from "../../hooks/useAuth";
import postAPI from "../../api/postAPI";
import checkTokenAPI from "../../api/checkToken";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import notiAPI from "../../api/notiAPI"

const TruncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
        return <span>{text}</span>;
    }
    return <span>{`${text.slice(0, maxLength)}...`}</span>;
};

function Header(props) {
    const activeButton = props.stateButton;
    const navigate = useNavigate();
    const {
        getItemDropDownAccount,
        getItemDropDownSearchPost,
        getItemDropDownNoti,
    } = useDropdownNavigation();
    const [search, setSearch] = useState("");
    const [listPosts, setListPosts] = useState([]);
    const [filterPosts, setFilterPosts] = useState(listPosts);
    const [notifications, setNotifications] = useState([]);
    
    const { account, setAccount, setToken, token } = useAuth();


    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                // const response = await getNotificationsAPI();
                // setNotifications(response.data);
            } catch (error) {
                console.error("Error fetching notifications:", error);
            }
        };
        fetchNotifications();
    }, []);

    useEffect(() => {
        if (search.length !== 0) {
            setFilterPosts(
                listPosts.filter((post) =>
                    post.title.toLowerCase().includes(search.toLowerCase())
                )
            );
        } else {
            setFilterPosts(listPosts);
        }
    }, [listPosts, search]);

    useEffect(() => {
        const getAllPostApi = async () => {
            await postAPI
                .getAllPost()
                .then((response) => {
                    setListPosts(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
            if (account) {
                await checkTokenAPI
                    .checkToken(token)
                    .then((response) => {
                        if (response.data === false) {
                            toast.error(
                                "Your token has expired, please log in again"
                            );
                            setAccount(null);
                            setToken(null);
                            localStorage.removeItem("account");
                            localStorage.removeItem("token");
                            setTimeout(() => navigate("/auth/login"), 2000);
                        }
                    })
                    .catch((error) => {
                        toast.error(
                            "Your token has expired, please log in again"
                        );
                        setAccount(null);
                        setToken(null);
                        localStorage.removeItem("account");
                        localStorage.removeItem("token");
                        setTimeout(() => navigate("/auth/login"), 2000);
                    });
            }
        };

        getAllPostApi();
    }, []);


    const clickHomePage = () => {
        navigate("/user-homepage");
    };

    const clickEvent = () => {
        if (account && parseInt(account.role) === 3)
            navigate("/admin/manage-activity");
        else navigate("/list-activity");
    };

    const clickGroupPeople = () => {
        if (account && parseInt(account.role) === 3)
            navigate("/admin/manage-account");
        else navigate("/people-searching");
    };

    const clickSearch = () => {
        console.log(search);
    };

    const clickChat = () => {
        navigate("/chat-box/null");
    };
    const clickNoti = (e) => {
        e.preventDefault();
        const callAPI = async()=>{
            notiAPI.getAllNotiByIdAccount(account.id).then(response=>{
                setNotifications(response.data)
            }).catch(error=>console.log(error))
        };
        callAPI();
    };

    const handleChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const clickLogin = () => {
        navigate("/auth/login");
    };

    const clickRegister = () => {
        navigate("/auth/register");
    };

    const onClickLogo = () => {
        navigate("/user-homepage");
    };

    const updateStatusNoti = (status, idNoti)=>{
        setNotifications(notifications.map((noti)=>{
            if(noti.id === idNoti)
            {
                return {...noti, status : status}
            }
                return noti
        }))
    }

    const addNoti = (noti)=>{
        setNotifications([...notifications, noti])
    }

    return (
        <div class="header-container">
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
            <div class="header-wrapper">
                <img
                    src={ICONS.logo}
                    alt="Logo"
                    class="header-wrapper logo"
                    onClick={onClickLogo}
                />
                <div class="header-wrapper button-group-left">
                    {account && (
                        <>
                            <Button
                                className={`header-wrapper button-group-left button ${
                                    activeButton === 1 ? "active" : "unactive"
                                }`}
                                onClick={clickHomePage}
                                icon={
                                    <HomeOutlined
                                        style={{
                                            color:
                                                activeButton === 1
                                                    ? "#FFFFFF"
                                                    : "#257769",
                                        }}
                                    />
                                }
                            />

                            <Button
                                className={`header-wrapper button-group-left button ${
                                    activeButton === 2 ? "active" : "unactive"
                                }`}
                                onClick={clickEvent}
                                icon={
                                    <CalendarOutlined
                                        style={{
                                            color:
                                                activeButton === 2
                                                    ? "#FFFFFF"
                                                    : "#257769",
                                        }}
                                    />
                                }
                            />

                            <Button
                                className={`header-wrapper button-group-left button ${
                                    activeButton === 3 ? "active" : "unactive"
                                }`}
                                onClick={clickGroupPeople}
                                icon={
                                    <TeamOutlined
                                        style={{
                                            color:
                                                activeButton === 3
                                                    ? "#FFFFFF"
                                                    : "#257769",
                                        }}
                                    />
                                }
                            />
                        </>
                    )}
                </div>
                <div class="header-wrapper search">
                    <Dropdown
                        menu={{
                            items: getItemDropDownSearchPost(filterPosts),
                        }}
                        trigger={["click"]}
                        placement="bottom"
                    >
                        <Search
                            placeholder="Type here to search"
                            enterButton={
                                <Button
                                    style={{
                                        backgroundColor: "#257769",
                                    }}
                                    icon={
                                        <SearchOutlined
                                            style={{ color: "#FFFFFF" }}
                                        />
                                    }
                                    onClick={clickSearch} // Điền hàm xử lý tìm kiếm của bạn vào đây
                                />
                            }
                            // onSearch={onSearch}
                            onChange={handleChangeSearch}
                            value={search}
                            size="large"
                            inputStyle={{
                                backgroundColor: "#F3E9E3",
                                color: "#257769",
                                border: "none",
                            }}
                        />
                    </Dropdown>
                </div>
                <div class="header-wrapper button-group-right">
                    {account && (
                        <>
                            <Badge overflowCount={9}>
                                <Button
                                    className={`header-wrapper button-group-right button`}
                                    onClick={clickChat}
                                    icon={<MessageOutlined />}
                                />
                            </Badge>
                            <Dropdown
                                menu={{
                                    items: getItemDropDownNoti(notifications, updateStatusNoti),
                                }}
                                trigger={["click"]}
                                placement="bottomLeft"
                            >
                                <Badge overflowCount={9}>
                                    <Button
                                        className={`header-wrapper button-group-right button`}
                                        onClick={clickNoti}
                                        icon={<BellOutlined />}
                                    />
                                </Badge>
                            </Dropdown>
                        </>
                    )}
                </div>

                {account &&
                    (account.role === 1 ? (
                        <img
                            alt="role-icon"
                            src={ICONS.candidateIcon}
                            class="header-role-icon"
                        />
                    ) : account.role === 2 ? (
                        <img
                            alt="role-icon"
                            src={ICONS.orgIcon}
                            class="header-role-icon"
                        />
                    ) : (
                        <img
                            alt="role-icon"
                            src={ICONS.adminIcon}
                            class="header-role-icon"
                        />
                    ))}

                <div class="header-wrapper account-info">
                    {account ? (
                        <Dropdown
                            menu={{
                                items: getItemDropDownAccount(account.role),
                            }}
                            placement="bottom"
                            arrow={{ pointAtCenter: true }}
                            // trigger={["hover"]}
                        >
                            <div class="header-wrapper account-info have-user">
                                <AvatarAccount
                                    name={account.name}
                                    avatar={account.avatar}
                                    backgroundNoAva={account.backgroundNoAva}
                                    size={55}
                                />
                                <h3 class="account-name">
                                    {TruncateText(account.name, 7)}
                                </h3>
                                <CaretDownOutlined
                                    style={{
                                        color: "#257769",
                                        fontSize: "20px",
                                    }}
                                />
                            </div>
                        </Dropdown>
                    ) : (
                        <div class="header-wrapper account-info no-user">
                            <Button
                                className="header-wrapper account-info no-user button"
                                onClick={clickLogin}
                            >
                                <h3>Login</h3>
                            </Button>
                            <Button
                                className="header-wrapper account-info no-user button"
                                onClick={clickRegister}
                            >
                                <h3>Register</h3>
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;
