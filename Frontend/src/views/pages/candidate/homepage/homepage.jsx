import { Carousel, Pagination } from "antd";
import "./homepage.scss";
import { IMAGES } from "../../../../constants/images";
import React, { useEffect, useState } from "react";
import fake_data from "../../../../data/fake_data.json";
import SmallPost from "../../../../components/post/small-post";
import BigPost from "../../../../components/post/big-post";

function addIsLikedField(posts) {
    return posts.map((post) => ({
        ...post,
        isLiked: true,
    }));
}

function UserHomepage(props) {

    const [likedPosts, setLikedPosts] = useState(
        addIsLikedField(fake_data["Posts-Activities"])
    );

    const limit = 4;
    const [startIndex, setStartIndex] = useState(0);
    const [user, setUser] = useState(fake_data.Accounts[1]);
    // const [user, setUser] = useState(null);
    const [listShowActs, setListShowActs] = useState(
        likedPosts.slice(startIndex, startIndex + limit)
    );

    useEffect(() => {
        console.log(startIndex);
        setListShowActs(likedPosts.slice(startIndex, startIndex + limit));
    }, [startIndex, likedPosts]);


    const changePage = (page, pageSize) => {
        setStartIndex((page - 1) * limit);
    };

    return (
        <div class="user-homepage-wrapper">
            <div class="slide-wrapper">
                <div class="slide-wrapper blur-slide"></div>
                <Carousel autoplay className="slide-wrapper carousel">
                    <div
                        class="slide-wrapper carousel slide"
                        style={{ backgroundColor: "red" }}
                    >
                        <img alt="slide-1" src={IMAGES.slide_1} />
                    </div>
                    <div class="slide-wrapper carousel slide">
                        <img alt="slide-2" src={IMAGES.slide_2} />
                    </div>
                    <div class="slide-wrapper carousel slide">
                        <img alt="slide-3" src={IMAGES.slide_3} />
                    </div>
                    <div class="slide-wrapper carousel slide">
                        <img alt="slide-4" src={IMAGES.slide_4} />
                    </div>
                </Carousel>
            </div>

            <div
                class="content-wrapper"
                style={
                    user !== null
                        ? {
                              gridTemplateColumns: "20% 60% 20%",
                          }
                        : {
                              gridTemplateColumns: "30% 70%",
                          }
                }
            >
                <div class="left-content-wrapper">
                    <h2 class="two-side-header">Popular activities</h2>
                    {likedPosts.map((post) => (
                        <SmallPost data={post} key={post.id} />
                    ))}
                </div>

                <div class="center-content-wrapper">
                    {listShowActs.map((post) => (
                        <BigPost data={post} key={"big-post" + post.id} />
                    ))}

                    <Pagination
                        total={likedPosts.length}
                        pageSize={limit}
                        onChange={changePage}
                    />
                </div>

                {user !== null ? (
                    <div class="right-content-wrapper">
                        <h2 class="two-side-header">Liked activities</h2>
                        {likedPosts.map((post) => (
                            <SmallPost
                                data={post}
                                key={post.id}
                                needLike={true}
                            />
                        ))}
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default UserHomepage;
