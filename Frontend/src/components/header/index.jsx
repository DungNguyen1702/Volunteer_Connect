import "./header.scss";
import { ICONS } from "../../constants/icons";
import { Avatar, Badge, Button, Dropdown } from "antd";
import {
    BellOutlined,
    CalendarOutlined,
    CaretDownOutlined,
    HomeOutlined,
    MessageOutlined,
    SearchOutlined,
    TeamOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import Search from "antd/es/input/Search";
import fakeData from "../../data/fake_data.json";
import getItemDropDownAccount from "./dropdown";
import { useNavigate } from "react-router-dom";

const TruncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
        return <span>{text}</span>;
    }
    return <span>{`${text.slice(0, maxLength)}...`}</span>;
};

function Header(props) { 

    
    const activeButton = props.stateButton;
    const navigate = useNavigate();
    const [search, setSearch] = useState("");

    

    const [user, setUser] = useState(fakeData.Accounts[1]);
    // const [user, setUser] = useState(null);
    const numberOfNoti = 10;
    const numberOfChat = 10;

    const clickHomePage = () => {
        navigate('/user-homepage')
    };

    const clickEvent = () => {
        navigate('/participating-activity')
    };

    const clickGroupPeople = () => {
        navigate('/people-searching')
    };

    const clickSearch = () => {
        console.log(search);
    };

    const clickChat = () => {};
    const clickNoti = () => {};

    const handleChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const onClickAccount = () => {
        console.log("account click");
    };

    const clickLogin = () => {
        console.log("Login");
    };

    const clickRegister = () => {
        console.log("Register");
    };

    return (
        <div class="header-container">
            <div class="header-wrapper">
                <img src={ICONS.logo} alt="Logo" class="header-wrapper logo" />
                <div class="header-wrapper button-group-left">
                    {user !== null ? (
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
                    ) : null}
                </div>
                <div class="header-wrapper search">
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
                </div>
                <div class="header-wrapper button-group-right">
                    {user !== null ? (
                        <>
                            <Badge count={numberOfChat} overflowCount={9}>
                                <Button
                                    className={`header-wrapper button-group-right button`}
                                    onClick={clickChat}
                                    icon={<MessageOutlined />}
                                />
                            </Badge>

                            <Badge count={numberOfNoti} overflowCount={9}>
                                <Button
                                    className={`header-wrapper button-group-right button`}
                                    onClick={clickNoti}
                                    icon={<BellOutlined />}
                                />
                            </Badge>
                        </>
                    ) : null}
                </div>

                <div class="header-wrapper account-info">
                    {user !== null ? (
                        <Dropdown
                            menu={{ items : getItemDropDownAccount(user.role, navigate)}}
                            placement="bottom"
                            arrow={{ pointAtCenter: true }}
                            // trigger={["hover"]}
                        >
                            <div class="header-wrapper account-info have-user">
                                <Avatar
                                    src={user.avatar}
                                    style={{
                                        width: "60px",
                                        height: "60px",
                                    }}
                                />
                                <h3 class="account-name">
                                    {TruncateText(user.name, 7)}
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
