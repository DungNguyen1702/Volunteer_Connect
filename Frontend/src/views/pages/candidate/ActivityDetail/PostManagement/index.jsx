import { useContext, useEffect, useState } from "react";
import MediumPost from "../../../../../components/post/medium-post";
import "./index.scss";
import { Button, Pagination } from "antd";
import { FormOutlined } from "@ant-design/icons";
import { ActivityDetailContext } from "..";

function PostManagement() {
    const {postList} = useContext(ActivityDetailContext)

    const limit = 12;

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
            <h3 class='error-no-post'>There is no post in this activity</h3>
            <div class="post-management-grid-layout">
                {postList && (
                    showPostList.map((post) => (
                        <div class="post-management-item">
                            <MediumPost data={post} />
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
