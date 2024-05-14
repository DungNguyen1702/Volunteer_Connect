import { HeartFilled } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { COLOR_FONT, COLOR_STATUS } from "../../../constants/color_status";
import SupportFunction from "../../../support/support_function";
import { useNavigate } from "react-router-dom";
import './index.scss'

function LikePostComponent(props) {
    const { data } = props;

    const navigate = useNavigate();

    const activity_status = SupportFunction.ActivityStatus(
        data.activity.dateStart,
        data.activity.dateEnd
    );

    const deleteLike = (e) => {
        e.stopPropagation();
    };

    const clickPost = () => {
        navigate(`/post-detail/${data.id}`);
    };

    return (
        <div class="liked-post-component-wrapper" onClick={clickPost}>
            {/* liked post header  */}
            <div class="liked-post-header">
                <Button
                    style={{
                        border: "none",
                        boxShadow: "none",
                        background: "#F3E9E3",
                    }}
                    onClick={deleteLike}
                    icon={
                        <HeartFilled style={{ fontSize: 30, color: "red" }} />
                    }
                />
                <h3 class="post-title">{SupportFunction.TruncateText(data.title, 21)}</h3>
                <div
                    class="post-status"
                    style={{
                        backgroundColor: COLOR_STATUS[activity_status],
                        color: COLOR_FONT[activity_status],
                    }}
                >
                    {activity_status}
                </div>
            </div>

            {/* liked-post-info */}
            <div class="liked-post-info">
                <p class="liked-post-date">
                    {data.activity.dateStart} - {data.activity.dateEnd}
                </p>
                <p class="liked-post-type">
                    <strong>
                        {SupportFunction.ActivityType(data.activity.type)}
                    </strong>
                </p>
            </div>
                
            {/* liked post content  */}
            <div class="liked-post-content">
                <img alt="liked-post-img" src={data.image} class="liked-post-img" />
                <div>{SupportFunction.mainContentHTML(data.content, 200)}</div>
            </div>

            {/* liked post footer  */}
            <div class="liked-post-footer">
                <p class="liked-post-comment">
                    {SupportFunction.getStringComment(data.comments)}
                </p>
                <p class="liked-post-participant">
                    {SupportFunction.getStringParticipant(data.participants)}
                </p>
            </div>
        </div>
    );
}

export default LikePostComponent;
