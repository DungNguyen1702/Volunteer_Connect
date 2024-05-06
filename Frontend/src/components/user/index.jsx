import React from "react";
import AvatarAccount from "../avatar/AvatarAccount";
import "./index.scss";

function UserIcon(props) {
    const { id, name, avatar, backgroundNoAva, size } = props;

    const onClickUser = ()=>{
        console.log('click on Account' + id)
    }

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
