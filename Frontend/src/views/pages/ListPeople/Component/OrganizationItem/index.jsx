import React from "react";
import "./index.scss";
import AvatarAccount from '../../../../../components/avatar/AvatarAccount'

function OrganizationItem(props) {
    const {organizationInfo} = props;

    return <div class="organization-item-wrapper">
        <AvatarAccount name={organizationInfo.name} avatar={organizationInfo.avatar} backgroundNoAva={organizationInfo.backgroundNoAva} shape={'square'} size={150}/>
    </div>;
}

export default OrganizationItem;
