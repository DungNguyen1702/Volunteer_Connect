import "./index.scss";
import { useNavigate, useParams } from "react-router-dom";
import SmallPost from "../../../components/post/small-post";
import SupportFunction from "../../../support/support_function";
import { Button } from "antd";
import Comment from "../../../components/comment/postComment/comment";
import InputComment from "../../../components/comment/postComment/inputComment/inputComment";
import OrganizationIcon from "../../../components/organization";
import { createContext, useContext, useEffect, useState } from "react";
import postAPI from "../../../api/postAPI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../../../hooks/useAuth";
import applyFormAPI from "../../../api/applyFormAPI";
import commentAPI from "../../../api/commentAPI";

export const PostDetailContext = createContext();

function PostDetail() {
    const { id } = useParams();

    const { account } = useAuth();

    const [data, setData] = useState(null);

    const [popularActs, setPopularActs] = useState([]);

    const [post, setPost] = useState(null);
    const [act, setAct] = useState(null);
    const [org, setOrg] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const callApi = async () => {
            await postAPI
                .getPostDetail(id)
                .then((response) => {
                    setData(response.data);
                    setPost(response.data.post);
                    setAct(response.data.activity);
                    setOrg(response.data.organization);
                    setComments(response.data.comments);
                })
                .catch((error) => {
                    console.log(error);
                });

            await postAPI
                .getAllPost()
                .then((response) => {
                    // get List popuplar
                    var uniqueActivities = [];
                    var filteredPosts = [];

                    response.data.forEach(function (post) {
                        if (
                            !uniqueActivities.includes(post.activity.id) &&
                            uniqueActivities.length < 6
                        ) {
                            uniqueActivities.push(post.activity.id);
                            filteredPosts.push(post);
                        }
                    });

                    // Sắp xếp các bài post theo số lượng participants giảm dần
                    filteredPosts.sort(function (a, b) {
                        return b.participants - a.participants;
                    });

                    setPopularActs(
                        filteredPosts
                            .filter((post) => post.participants !== 0)
                            .slice(0, 6)
                    );
                })
                .catch((error) => console.log(error));
        };
        callApi();
    }, [id]);

    const { token } = useAuth();
    const navigate = useNavigate();

    const handlerClickRegister = () => {
        if (account && parseInt(account.role) === 3) {
            toast.error(
                "You can't register this activity because you're an admin"
            );
            return;
        }

        if (!token) {
            toast.error("You need to login to register this activity");
            setTimeout(() => navigate("/auth/login"), 2000);
        }  else if (account && parseInt(account.role) === 2) {
            toast.error(
                "You can't register this activity because you're an organization"
            );
            return;
        } else {
            const callApi = async () => {
                await applyFormAPI
                    .createApplyForm(act.id)
                    .then((response) => {
                        console.log(response);

                        if (response.data.fail) {
                            toast.error(
                                "You can apply this activity because you have already registered this activity before"
                            );
                            return;
                        }

                        toast.success("You have successfully registered");
                        setTimeout(() => navigate("/user-homepage"), 2000);
                    })
                    .catch((error) => console.log(error));
            };
            callApi();
        }
    };

    const addPostComment = async (comments, newComment) => {
        try {
            const response = await commentAPI.createPostComment(newComment);
            newComment = { ...newComment, id: response.data.data };

            toast.success("commit successfull");

            if (newComment.comment_parentId === null) {
                return [...comments, newComment];
            } else {
                return comments.map((comment) => {
                    if (comment.id === newComment.comment_parentId) {
                        return {
                            ...comment,
                            replies: [...comment.replies, newComment],
                        };
                    } else if (comment.replies.length > 0) {
                        return {
                            ...comment,
                            replies: addPostComment(
                                comment.replies,
                                newComment
                            ),
                        };
                    } else {
                        return comment;
                    }
                });
            }
        } catch (error) {
            console.log(error);
            toast.error("commit failed");
        }
    };

    const updatePostComment = (comments, newComment, commentId) => {
        const callAPI = async () => {
            await commentAPI
                .updatePostComment(newComment)
                .then((response) => console.log(response.data))
                .catch((error) => console.log(error));
        };

        callAPI();

        return comments.map((comment) => {
            if (comment.id === commentId) {
                return {
                    ...comment,
                    ...newComment,
                };
            } else if (comment.replies.length > 0) {
                return {
                    ...comment,
                    replies: updatePostComment(
                        comment.replies,
                        newComment,
                        commentId
                    ),
                };
            } else {
                return comment;
            }
        });
    };

    const deletePostComment = (comments, commentId) => {
        const callAPI = async () => {
            await commentAPI
                .deletePostComment(commentId)
                .then((response) => console.log(response.data))
                .catch((error) => console.log(error));
        };

        callAPI();

        return comments
            .filter((comment) => comment.id !== commentId)
            .map((comment) => ({
                ...comment,
                replies: deletePostComment(comment.replies, commentId),
            }));
    };

    return (
        <div class="post-detail-wrapper">
            {data && post && act && org && comments && (
                <div>
                    <div class="post-detail-info-wrapper">
                        <div class="post-detail-main">
                            {/* post's title  */}
                            <h1 class="post-title">{post.title}</h1>
                            <p class="post-date">
                                {act.dateStart} - {act.dateEnd}
                            </p>

                            {/* image post  */}
                            <img
                                alt="post img"
                                src={post.image}
                                class="post-img"
                            />

                            {/* info of activity and organization of post */}
                            <div class="post-act-org-wrapper">
                                <hr class="post-hr" />
                                <div class="post-act-org-info">
                                    <div class="post-act-org-left">
                                        <p class="post-act-org-item">
                                            <strong>Host's email : </strong>{" "}
                                            {act.email}
                                        </p>
                                        <p class="post-act-org-item">
                                            <strong>Location : </strong>{" "}
                                            {act.location}
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
                                            <strong>
                                                Registration deadline :{" "}
                                            </strong>{" "}
                                            {act.deadline}
                                        </p>
                                        <p class="post-act-org-item">
                                            <strong>Category : </strong>{" "}
                                            {SupportFunction.ActivityType(
                                                act.type
                                            )}
                                        </p>
                                        <div class="post-act-org-item-org">
                                            <p style={{ marginRight: "7px" }}>
                                                <strong>Organization : </strong>
                                            </p>
                                            <OrganizationIcon
                                                name={org.name}
                                                avatar={org.avatar}
                                                id={org.id}
                                                backgroundNoAva={
                                                    org.backgroundNoAva
                                                }
                                            />
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
                    <div class="post-comment-wrapper">
                        <PostDetailContext.Provider
                            value={{
                                addPostComment: addPostComment,
                                updatePostComment: updatePostComment,
                                deletePostComment: deletePostComment,
                                setComments: setComments,
                                listComment: comments,
                                postId: id,
                            }}
                        >
                            {account && (
                                <div class="post-comment-reply">
                                    <InputComment />
                                </div>
                            )}
                            {comments.map((comment) => (
                                <Comment data={comment} key={comment.id} />
                            ))}
                        </PostDetailContext.Provider>
                    </div>
                </div>
            )}
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                closeOnClick={true}
                pauseOnHover={true}
                draggable={true}
                progress={undefined}
                theme="colored"
            />
        </div>
    );
}

export default PostDetail;
