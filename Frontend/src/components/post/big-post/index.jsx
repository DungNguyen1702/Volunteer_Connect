import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import "./index.scss";
import SupportFunction from "../../../support/support_function";
import { useState } from "react";
import { Button } from "antd";

const COLOR_STATUS = {
    "On going": "#52CF80",
    UpComing: "#61BED7",
    Happened: "#D06969",
};

function BigPost(props) {
    const data = props.data;

    const [like, setLike] = useState(data.isLiked);

    const clickLike = (e) => {
        e.stopPropagation();
        setLike(!like);
    };

    const activity_status = SupportFunction.ActivityStatus(
        data.activity.date_start,
        data.activity.date_end
    );

    const clickAct = ()=>{
        console.log('big post ' + data.id)
    }

    return (
        <div class="big-post-wrapper"
            onClick={clickAct}
        >
            {/* big post header  */}
            <div class="big-post-header">
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
                <h2 class="post-title">{data.title}</h2>
                <div
                    class="post-status"
                    style={{ backgroundColor: COLOR_STATUS[activity_status] }}
                >
                    {activity_status}
                </div>
            </div>

            {/* big-post-info */}
            <div class='big-post-info'>
                <p class='big-post-date'>{data.activity.date_start} - {data.activity.date_end}</p>
                <p class='big-post-type'><strong>{SupportFunction.ActivityType(data.activity.type)}</strong></p>
                <p class='big-post-register'><strong style={{color: '#52C5BB'}}>Register: </strong>{data.activity.date_end}</p>
            </div>

            {/* big post content  */}
            <div class='big-post-content'>
                <img alt='big-post-img' src={data.image} class='big-post-img'/>
                <div>
                {SupportFunction.mainContentHTML(data.content, 6000)}
                </div>
            </div>

            {/* big post footer  */}
            <div class='big-post-footer'>
                <p class='big-post-comment'>{SupportFunction.getStringComment(data.activity.comments)}</p>
                <p class='big-post-participant'>{SupportFunction.getStringParticipant(data.activity.participants)}</p>
            </div>
        </div>
    );
}

export default BigPost;
