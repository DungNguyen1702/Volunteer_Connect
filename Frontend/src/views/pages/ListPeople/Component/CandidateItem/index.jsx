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
    const onClickCandidate = ()=>{
        console.log("click on candidate " + candidateInfo.id);    
    }

    return (
        <div 
            class="organization-item-wrapper"
            onClick={onClickCandidate}
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
            <div class="candidate-item-paragraph">
                <strong class="color-primary-green width-30">Email : </strong>{" "}
                {candidateInfo.account}
            </div>
            <div class="candidate-item-paragraph">
                <strong class="color-primary-green width-30">Birthday : </strong>{" "}
                {candidateInfo.user.birthday}
            </div>
            <div class="candidate-item-paragraph">
                <strong class="color-primary-green width-30">Address : </strong>{" "}
                {candidateInfo.user.address}
            </div>
            <Button
                className="candidate-item-button-chat"
                onClick={onClickChat}
            >
                Chat
            </Button>
        </div>
    );
}

export default CandidateItem;
