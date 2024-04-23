import "./index.scss";
import { useParams } from "react-router-dom";
import fakeData from "../../../../data/fake_data.json";
import SmallPost from "../../../../components/post/small-post";
import SupportFunction from "../../../../support/support_function";
import { Button } from "antd";
import { ICONS } from "../../../../constants/icons";
import Comment from "../../../../components/comment/comment";
import InputComment from "../../../../components/comment/inputComment/inputComment";

function ActivityDetail(props) {
    const { id } = useParams();

    const data = fakeData["Post-detail"];

    const popularActs = fakeData["Posts-Activities"];

    const post = data.Post;
    const act = data.Activity;
    const org = data.Organization;
    const comments = data.Comments;

    const handlerClickOrg = () => {};

    const handlerClickRegister = () => {};

    return (
        <div class="post-detail-wrapper">
            <div class="post-detail-info-wrapper">
                <div class="post-detail-main">
                    {/* post's title  */}
                    <h1 class="post-title">{post.title}</h1>
                    <p class="post-date">
                        {act.date_start} - {act.date_end}
                    </p>

                    {/* image post  */}
                    <img alt="post img" src={post.image} class="post-img" />

                    {/* info of activity and organization of post */}
                    <div class="post-act-org-wrapper">
                        <hr class="post-hr" />
                        <div class="post-act-org-info">
                            <div class="post-act-org-left">
                                <p class="post-act-org-item">
                                    <strong>Host's email : </strong> {act.email}
                                </p>
                                <p class="post-act-org-item">
                                    <strong>Location : </strong> {act.location}
                                </p>
                                <p class="post-act-org-item">
                                    <strong>Participants : </strong>{" "}
                                    {SupportFunction.getStringParticipant(
                                        act.participants
                                    )}
                                </p>
                            </div>
                            <div class="post-act-org-right">
                                <p class="post-act-org-item">
                                    <strong>Registration deadline : </strong>{" "}
                                    {act.deadline}
                                </p>
                                <p class="post-act-org-item">
                                    <strong>Category : </strong>{" "}
                                    {SupportFunction.ActivityType(act.type)}
                                </p>
                                <div class="post-act-org-item-org">
                                    <p>
                                        <strong>Organization : </strong>
                                    </p>
                                    <div
                                        class="post-act-org-item-org-click-zone"
                                        onClick={handlerClickOrg}
                                    >
                                        <p>{org.name}</p>
                                        <img
                                            alt="org-ava"
                                            src={org.avatar}
                                            class="org-ava"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p class="act-content">{act.content}</p>
                        <hr class="post-hr" />
                    </div>

                    {/* post's content  */}
                    <div class="post-content">
                        {SupportFunction.convertToHTML(post.content)}
                    </div>

                    {/* register button  */}
                    <Button
                        className="post-register-button"
                        onClick={handlerClickRegister}
                    >
                        {/* <img alt='register-button' src = {ICONS.register} class='register-icon'/> */}
                        <h3 class="button-register-text">Register</h3>
                    </Button>
                </div>
                <div class="post-detail-popular-acts">
                    <h2 class="post-detail-popular-acts-header">
                        Popular activities
                    </h2>
                    {popularActs.map((post) => (
                        <SmallPost data={post} key={post.id} />
                    ))}
                </div>
            </div>
            <div class='post-comment-wrapper'>
                <div class='post-comment-reply'><InputComment/></div>
                {comments.map(comment => <Comment data={comment} key={comment.id} />)}
            </div>
        </div>
    );
}

export default ActivityDetail;
