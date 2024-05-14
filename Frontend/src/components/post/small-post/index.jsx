import "./index.scss";
import SupportFunction from "../../../support/support_function";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SmallPost(props) {
    const {data, onDeleteLikePost} = props;
    const needLike = props.needLike;

    const navigate = useNavigate();

    const [like, setLike] = useState(data.isLiked);

    const clickLike = (e) => {
        e.stopPropagation();
        setLike(!like);
        onDeleteLikePost(data.id);
    };

    const clickAct = () => {
        console.log("small post " + data.id);
        navigate(`/post-detail/${data.id}`);
    };

    return (
        <div class="small-post-wrapper" onClick={clickAct}>
            {needLike ? (
                <div class="post-like-header">
                    <Button
                        style={{
                            border: "none",
                            boxShadow: "none",
                            background: "#f4f4f4",
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
                    <h4 class="small-post-title">
                        {SupportFunction.TruncateText(data.title, 20)}
                    </h4>
                </div>
            ) : (
                <h4 class="small-post-title">
                    {SupportFunction.TruncateText(data.title, 18)}
                </h4>
            )}
            <img alt="post-img" src={data.image} class="post-image" />
            <h6 class="post-type">
                {SupportFunction.ActivityType(data.activity.type)}
            </h6>
            <div class="post-date-participants-wrapper">
                <p>{data.activity.dateStart}</p>
                <p>
                    {SupportFunction.getStringParticipant(
                        data.activity.participants
                    )}
                </p>
            </div>
        </div>
    );
}

export default SmallPost;
