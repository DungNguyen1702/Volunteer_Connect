import { Avatar, Tooltip } from "antd";
import React from "react";
import SupportFunction from "../../support/support_function";

function CandidateAva(props) {
    const { name, avatar, backgroundNoAva } = props;
    
    return (
        <>
            <Tooltip title={name} placement="top">
                {avatar ? (
                    <Avatar src={avatar} />
                ) : (
                    <Avatar
                        style={{
                            backgroundColor: backgroundNoAva,
                        }}
                    >
                        {SupportFunction.getFirstCharacter(name)}
                    </Avatar>
                )}
            </Tooltip>
        </>
    );
}

export default CandidateAva;
