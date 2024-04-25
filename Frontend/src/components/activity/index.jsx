import "./index.scss";
import SupportFunction from "../../support/support_function";
import { COLOR_STATUS, COLOR_FONT } from "../../constants/color_status";

function ActivityComponent(props) {
    const data = props.data;
    const status = SupportFunction.ActivityStatus(
        data.date_start,
        data.date_end
    );
    const type = SupportFunction.ActivityType(data.type);
    const location = `${data.location}, ${SupportFunction.ActivityCountry(
        data.country
    )}`;

    const onClickAct = () => {
        console.log("click act " + data.id);
    };

    return (
        <div class="activity-component-wrapper" onClick={onClickAct}>
            <div class="activity-component-header">
                <h1 id="activity-component-name">{data.name}</h1>
                <h3
                    id="activity-component-status"
                    style={{
                        backgroundColor: COLOR_STATUS[status],
                        color: COLOR_FONT[status],
                    }}
                >
                    {status}
                </h3>
            </div>
            <p id="activity-component-date">
                {data.date_start} - {data.date_end}
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
                        {SupportFunction.TruncateText(location, 18)}
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
