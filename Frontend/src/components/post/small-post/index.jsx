import "./index.scss";
import SupportFunction from "../../../support/support_function";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useState } from "react";



function SmallPost(props) {
    const data = props.data;
    const needLike = props.needLike;

    const [like, setLike] = useState(data.isLiked);

    const clickLike = (e) => {
        e.stopPropagation();
        setLike(!like);
    };

    const clickAct = ()=>{
        console.log('small post ' + data.id)
    }

    return (
        <div class="small-post-wrapper" 
            onClick={clickAct}
        >
            {needLike ? (
                <div class="post-like-header">
                    <Button
                        style={{border : 'none', boxShadow: 'none', background : '#f4f4f4'}}
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
                    <h4 class="small-post-title">{SupportFunction.TruncateText(data.title, 24)}</h4>
                </div>
            ) : (
                <h4 class="small-post-title">{SupportFunction.TruncateText(data.title, 24)}</h4>
            )}
            <img alt="post-img" src={data.image} class="post-image" />
            <h6 class="post-type">{SupportFunction.ActivityType(data.activity.type)}</h6>
            <div class="post-date-participants-wrapper">
                <p>{data.activity.date_start}</p>
                <p>{SupportFunction.getStringParticipant(data.activity.participants)}</p>
            </div>
        </div>
    );
}

export default SmallPost;
