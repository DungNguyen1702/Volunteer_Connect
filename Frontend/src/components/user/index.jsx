import React from "react";
import CandidateAva from "../avatar/candidateAvatar";
import './index.scss'

function UserIcon(props) {
    const { name, avatar, backgroundNoAva } = props;

    return (
        <div class="user-icon-wrapper">
            <CandidateAva
                name={name}
                avatar={avatar}
                backgroundNoAva={backgroundNoAva}
            />
            <p class='user-icon-name'>{name}</p>
        </div>
    );
}

export default UserIcon;
