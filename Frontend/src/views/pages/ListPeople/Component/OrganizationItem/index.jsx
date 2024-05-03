import React from "react";
import "./index.scss";
import AvatarAccount from "../../../../../components/avatar/AvatarAccount";
import { Button } from "antd";

function OrganizationItem(props) {
    const { organizationInfo } = props;

    const onClickChat = (e) => {
        e.stopPropagation();
        console.log("chat with " + organizationInfo.id);
    };
    const onClickOrganization = ()=>{
        console.log("click on organization " + organizationInfo.id);    
    }

    return (
        <div 
            class="organization-item-wrapper"
            onClick={onClickOrganization}
        >
            <AvatarAccount
                name={organizationInfo.name}
                avatar={organizationInfo.avatar}
                backgroundNoAva={organizationInfo.backgroundNoAva}
                shape={"square"}
                size={150}
            />
            <h3 class="color-primary-green margin-10">
                {organizationInfo.name}
            </h3>
            <p class="organization-item-paragraph">
                <strong class="color-primary-green">Email : </strong>{" "}
                {organizationInfo.account}
            </p>
            <hr class="organization-item-hr" />
            {organizationInfo.activity ? (
                <p class="organization-item-paragraph">
                    Organization of "{organizationInfo.activity.name}"
                </p>
            ) : (
                <p class="organization-item-paragraph">
                    There is no organization managing
                </p>
            )}
            <Button
                className="organization-item-button-chat"
                onClick={onClickChat}
            >
                Chat
            </Button>
        </div>
    );
}

export default OrganizationItem;
