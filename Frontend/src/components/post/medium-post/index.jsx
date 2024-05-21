import { DeleteOutlined } from "@ant-design/icons";
import "./index.scss";
import SupportFunction from "../../../support/support_function";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

function MediumPost(props) {
    const { data, deletePost } = props;

    const { account } = useAuth();

    const navigate = useNavigate();

    const onClickDelete = (e) => {
        e.stopPropagation();
        deletePost(data.id);
    };

    const clickAct = () => {
        console.log("medium post " + data.id);
        navigate(`/post-detail/${data.id}`);
    };

    return (
        <div class="medium-post-wrapper" onClick={clickAct}>
            {/* big post header  */}
            <div class="medium-post-header">
                {account && account.role === 2 && (
                    <Button
                        className="medium-post-delete-button"
                        onClick={onClickDelete}
                        icon={<DeleteOutlined />}
                    />
                )}
                <h2 class="post-title">
                    {SupportFunction.TruncateText(data.title, 25)}
                </h2>
            </div>

            {/* big-post-info */}
            <div class="medium-post-info">
                <p class="medium-post-date">
                    <strong class="accent-color">Created at : </strong>{" "}
                    {data.createdAt}
                </p>
            </div>

            {/* big post content  */}
            <div class="medium-post-content">
                <img
                    alt="medium-post-img"
                    src={data.image}
                    class="medium-post-img"
                />
                <div>{SupportFunction.mainContentHTML(data.content, 150)}</div>
            </div>

            {/* big post footer  */}
            <div class="medium-post-footer">
                <p class="medium-post-comment">
                    {SupportFunction.getStringComment(data.comments)}
                </p>
            </div>
        </div>
    );
}

export default MediumPost;
