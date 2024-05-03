import React from "react";
import "./index.scss";
import AvatarAccount from "../../../../../components/avatar/AvatarAccount";
import { Button } from "antd";

function CandidateItem(props) {
    const {candidateInfo} = props;

    const onClickChat = (e) => {
        e.stopPropagation();
        console.log("chat with " + candidateInfo.id);
    };
    const onClickOrganization = ()=>{
        console.log("click on organization " + candidateInfo.id);    
    }

    return (
        <div 
            class="organization-item-wrapper"
            onClick={onClickOrganization}
        >
            <AvatarAccount
                name={candidateInfo.name}
                avatar={candidateInfo.avatar}
                backgroundNoAva={candidateInfo.backgroundNoAva}
                shape={"square"}
                size={150}
            />
            <h3 class="color-primary-green margin-10">
                {candidateInfo.name}
            </h3>
            <p class="organization-item-paragraph">
                <strong class="color-primary-green">Email : </strong>{" "}
                {candidateInfo.account}
            </p>
            <hr class="organization-item-hr" />
            
            <Button
                className="organization-item-button-chat"
                onClick={onClickChat}
            >
                Chat
            </Button>
        </div>
    );
}

export default CandidateItem;
