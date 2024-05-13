import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import "./index.scss";
import SupportFunction from "../../../support/support_function";
import { useState } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { COLOR_FONT, COLOR_STATUS } from "../../../constants/color_status";
import useAuth from "../../../hooks/useAuth";

function BigPost(props) {
    const data = props.data;

    const navigate = useNavigate();

    const [like, setLike] = useState(data.isLiked);

    const { account } = useAuth();

    const clickLike = (e) => {
        e.stopPropagation();
        setLike(!like);
    };

    const activity_status = SupportFunction.ActivityStatus(
        data.activity.dateStart,
        data.activity.dateEnd
    );

    const clickPost = () => {
        navigate(`/post-detail/${data.id}`);
    };

    return (
        <div class="big-post-wrapper" onClick={clickPost}>
            {/* big post header  */}
            <div class="big-post-header">
                {account && (
                    <Button
                        style={{
                            border: "none",
                            boxShadow: "none",
                            background: "#F3E9E3",
                        }}
                        onClick={clickLike}
                        icon={
                            like ? (
                                <HeartFilled
                                    style={{ fontSize: 30, color: "red" }}
                                />
                            ) : (
                                <HeartOutlined
                                    style={{ fontSize: 30, color: "red" }}
                                />
                            )
                        }
                    />
                )}
                <h2 class="post-title">{data.title}</h2>
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

            {/* big-post-info */}
            <div class="big-post-info">
                <p class="big-post-date">
                    {data.activity.dateStart} - {data.activity.dateEnd}
                </p>
                <p class="big-post-type">
                    <strong>
                        {SupportFunction.ActivityType(data.activity.type)}
                    </strong>
                </p>
                <p class="big-post-register">
                    <strong style={{ color: "#52C5BB" }}>Register: </strong>
                    {data.activity.deadline}
                </p>
            </div>

            {/* big post content  */}
            <div class="big-post-content">
                <img alt="big-post-img" src={data.image} class="big-post-img" />
                <div>{SupportFunction.mainContentHTML(data.content, 700)}</div>
            </div>

            {/* big post footer  */}
            <div class="big-post-footer">
                <p class="big-post-comment">
                    {SupportFunction.getStringComment(data.comments)}
                </p>
                <p class="big-post-participant">
                    {SupportFunction.getStringParticipant(data.participants)}
                </p>
            </div>
        </div>
    );
}

export default BigPost;
