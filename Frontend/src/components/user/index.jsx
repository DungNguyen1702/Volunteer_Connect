import React from "react";
import AvatarAccount from "../avatar/AvatarAccount";
import "./index.scss";
import { useNavigate } from "react-router-dom";

function UserIcon(props) {
    const { id, name, avatar, backgroundNoAva, size, role } = props;

    const navigate = useNavigate();

    const onClickUser = ()=>{
        navigate(`/contact-user/${id}/${role}`)
    };

    return (
        <div 
            class="user-icon-wrapper"
            onClick={onClickUser}    
        >
            <AvatarAccount
                name={name}
                avatar={avatar}
                backgroundNoAva={backgroundNoAva}
                size={size}
            />
            <p class="user-icon-name">{name}</p>
        </div>
    );
}

export default UserIcon;
