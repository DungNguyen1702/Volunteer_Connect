import { useContext, useEffect, useState } from "react";
import MediumPost from "../../../../../components/post/medium-post";
import "./index.scss";
import { Button, Pagination } from "antd";
import { FormOutlined } from "@ant-design/icons";
import { ActivityDetailContext } from "..";
import { useNavigate } from "react-router-dom";

function PostManagement() {
    const {postList, actInfo, deletePost} = useContext(ActivityDetailContext);

    const limit = 12;
    const navigate = useNavigate();

    const [startIndex, setStartIndex] = useState(0);
    const [showPostList, setShowPostList] = useState(
        postList ? postList.slice(startIndex, startIndex + limit) : null
    );

    useEffect(() => {
        setShowPostList(postList && postList.slice(startIndex, startIndex + limit));
    }, [startIndex, postList]);

    const onChangePage = (page, pageSize) => {
        setStartIndex((page - 1) * limit);
    };
    const onCreatePost =()=>{
        navigate(`/create-post/${actInfo.id}`)
    }

    return (
        <div class="post-management-wrapper">
            <h1 class='post-management-title'>Post management</h1>
            <Button 
                className="post-create-button"
                onClick={onCreatePost}
                icon={<FormOutlined />}
            >
                Create post
            </Button>
            {!postList && <h3 class='error-no-post'>There is no post in this activity</h3>}
            <div class="post-management-grid-layout">
                {postList && (
                    showPostList.map((post) => (
                        <div class="post-management-item">
                            <MediumPost data={post} deletePost={deletePost}/>
                        </div>
                    ))
                )}
            </div>
            {postList && (
                <Pagination
                    total={postList.length}
                    pageSize={limit}
                    onChange={onChangePage}
                />
            )}
        </div>
    );
}

export default PostManagement;
