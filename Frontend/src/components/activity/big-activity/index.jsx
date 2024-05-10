import "./index.scss";
import SupportFunction from "../../../support/support_function";
import { COLOR_STATUS, COLOR_FONT } from "../../../constants/color_status";
import { useNavigate } from "react-router-dom";

function ActivityComponent(props) {
    const data = props.data;
    const status = SupportFunction.ActivityStatus(data.dateStart, data.dateEnd);
    const type = SupportFunction.ActivityType(data.type);
    const location = `${data.location}, ${SupportFunction.ActivityCountry(
        data.country
    )}`;
    const navigate = useNavigate();

    const onClickAct = () => {
        console.log("click act " + data.id);
        navigate(`/activity-detail/${data.id}`);
    };

    return (
        <div class="activity-component-wrapper" onClick={onClickAct}>
            <div class="activity-component-header">
                <h2 id="activity-component-name">{data.name}</h2>
                <h4
                    id="activity-component-status"
                    style={{
                        backgroundColor: COLOR_STATUS[status],
                        color: COLOR_FONT[status],
                    }}
                >
                    {status}
                </h4>
            </div>
            <p id="activity-component-date">
                {data.dateStart} - {data.dateEnd}
            </p>
            <div id="activity-component-content-wrapper">
                <img
                    alt="activity img"
                    src={data.image}
                    id="activity-component-img"
                />
                <p id="activity-component-main-content">
                    {SupportFunction.TruncateText(data.content, 300)}
                </p>
            </div>
            <div id="activity-component-info-wrapper">
                <div id="activity-component-info-location">
                    <p>
                        <strong>Location : </strong>
                    </p>
                    <p class="activity-component-info-content">
                        {SupportFunction.TruncateText(location, 16)}
                    </p>
                </div>
                <div id="activity-component-info-category">
                    <p>
                        <strong>Category : </strong>
                    </p>
                    <p class="activity-component-info-content">
                        {SupportFunction.TruncateText(type, 18)}
                    </p>
                </div>
            </div>
            <div id="activity-component-comment-parti-wrapper">
                <p class="activity-component-comment-parti-item">
                    {SupportFunction.getStringComment(data.comments)}
                </p>
                <p class="activity-component-comment-parti-item">
                    {SupportFunction.getStringParticipant(data.participants)}
                </p>
            </div>
        </div>
    );
}

export default ActivityComponent;
