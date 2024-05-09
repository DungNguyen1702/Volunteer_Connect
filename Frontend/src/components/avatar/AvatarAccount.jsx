import { Avatar, Tooltip } from "antd";
import React from "react";
import SupportFunction from "../../support/support_function";

function AvatarAccount(props) {
    const { name, avatar, backgroundNoAva, shape, size } = props;

    return (
        <>
            <Tooltip title={name} placement="top">
                {avatar ? (
                    <Avatar
                        src={avatar}
                        shape={shape ? shape : "circle"}
                        size={size ? size : "large"}
                    />
                ) : (
                    <Avatar
                        style={{
                            backgroundColor: backgroundNoAva,
                        }}
                        shape={shape ? shape : "circle"}
                        size={size ? size : "large"}
                    >
                        {SupportFunction.getFirstCharacter(name)}
                    </Avatar>
                )}
            </Tooltip>
        </>
    );
}

export default AvatarAccount;
