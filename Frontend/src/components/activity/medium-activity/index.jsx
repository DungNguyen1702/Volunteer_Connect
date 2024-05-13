import "./index.scss";
import SupportFunction from "../../../support/support_function";
import { COLOR_STATUS, COLOR_FONT } from "../../../constants/color_status";
import { useNavigate } from "react-router-dom";

function MediumActivityComponent(props) {
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
        <div class="activity-medium-component-wrapper" onClick={onClickAct}>
            <div class="activity-medium-component-header">
                <h1 id="activity-medium-component-name">{SupportFunction.TruncateText(data.name, 30)}</h1>
                <p
                    id="activity-medium-component-status"
                    style={{
                        backgroundColor: COLOR_STATUS[status],
                        color: COLOR_FONT[status],
                    }}
                >
                    {status}
                </p>
            </div>
            <p id="activity-medium-component-date">
                {data.dateStart} - {data.dateEnd}
            </p>
            <div id="activity-medium-component-content-wrapper">
                <img
                    alt="activity img"
                    src={data.image}
                    id="activity-medium-component-img"
                />
                <p id="activity-medium-component-main-content">
                    {SupportFunction.TruncateText(data.content, 100)}
                </p>
            </div>
            <div id="activity-medium-component-info-wrapper">
                <div id="activity-medium-component-info-location">
                    <p>
                        <strong>Location : </strong>
                    </p>
                    <p class="activity-medium-component-info-content">
                        {SupportFunction.TruncateText(location, 15)}
                    </p>
                </div>
                <div id="activity-medium-component-info-category">
                    <p>
                        <strong>Category : </strong>
                    </p>
                    <p class="activity-medium-component-info-content">
                        {SupportFunction.TruncateText(type, 18)}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MediumActivityComponent;
