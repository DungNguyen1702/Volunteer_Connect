import React, { useEffect, useState } from "react";
import "./index.scss";
import fakeData from "../../../data/fake_data.json";
import LikePostComponent from "../../post/likePost";
import { Pagination } from "antd";
import postAPI from "../../../api/postAPI";

function LikedPost() {
    const [likeData, setLikeData] = useState([]);
    const limit = 4;

    const [startIndex, setStartIndex] = useState(0);
    const [showPost, setShowPost] = useState(
        likeData.slice(startIndex, startIndex + limit)
    );

    useEffect(() => {
        const callApi = async () => {
            await postAPI
                .getLikedPost()
                .then((response) => {
                    setLikeData(response.data)
                })
                .catch((error) => console.log(error));
        };
        callApi();
    }, []);

    const onChangePage = (page, pageSize) => {
        setStartIndex((page - 1) * limit);
    };

    useEffect(() => {
        setShowPost(likeData && likeData.slice(startIndex, startIndex + limit));
    }, [startIndex, likeData]);

    return (
        <div class="liked-post-profile-wrapper">
            <h1 class="liked-post-title">List of liked posts</h1>
            <div class="liked-post-grid-layout">
                {showPost &&
                    showPost.length > 0 &&
                    showPost.map((post) => <LikePostComponent data={post} />)}
            </div>
            <div class="certificate-profile-footer">
                {likeData && likeData.length > 0 && (
                    <Pagination
                        total={likeData.length}
                        pageSize={limit}
                        onChange={onChangePage}
                    />
                )}
            </div>
            {(!likeData || likeData.length <= 0) && (
                <div class="no-post">You have not liked any posts</div>
            )}
        </div>
    );
}

export default LikedPost;
