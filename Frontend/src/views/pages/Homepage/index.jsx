import { Carousel, Pagination, Select } from "antd";
import "./index.scss";
import { IMAGES } from "../../../constants/images";
import React, { useEffect, useState } from "react";
import fake_data from "../../../data/fake_data.json";
import SmallPost from "../../../components/post/small-post";
import BigPost from "../../../components/post/big-post";
import { Button } from "@mui/material";
import { ICONS } from "../../../constants/icons";
import { TYPES } from "../../../constants/activity_types";
import SupportFunction from "../../../support/support_function";
import { COUNTRY } from "../../../constants/activity_countries";
import { STATUS } from "../../../constants/activity_status";
import { COLOR_FONT, COLOR_STATUS } from "../../../constants/color_status";
import postAPI from "../../../api/postAPI.js";

function addIsLikedField(posts) {
    return posts.map((post) => ({
        ...post,
        isLiked: true,
    }));
}

function UserHomepage(props) {
    // const element
    const limit = 4;

    // set UseState
    const [startIndex, setStartIndex] = useState(0);
    const [user, setUser] = useState(fake_data.Accounts[1]);
    // const [user, setUser] = useState(null);
    const [likedPosts, setLikedPosts] = useState(
        addIsLikedField(fake_data["Posts-Activities"])
    );
    const [listPosts, setListPosts] = useState([]);
    const [popularPosts, setPopularPost] = useState(fake_data["Posts-Activities"])

    const [listShowActs, setListShowActs] = useState(
        listPosts.slice(startIndex, startIndex + limit)
    );
    const [selectedCategory, setSelectedCategory] = useState(0);
    const [selectedCountry, setSelectedCountry] = useState(0);
    const [selectedStatus, setSelectedStatus] = useState(0);
    const [sortBy, setSortBy] = useState(1);
    const [sortOrder, setSortOrder] = useState(1);

    // set useEffect
    useEffect(() => {
        setListShowActs(listPosts.slice(startIndex, startIndex + limit));
    }, [startIndex, listPosts]);

    useEffect(()=>{
        const getAllPostApi = async()=>{
            await postAPI.getAllPost()
                .then ((response)=> {
                    console.log(response.data)
                    setListPosts(response.data)
                })
                .catch((error) => {
                                console.log(error)
                })
        }

        getAllPostApi();
    },[])

    // set event
    const onChangePage = (page, pageSize) => {
        setStartIndex((page - 1) * limit);
    };

    const onChangeCategory = (category) => {
        setSelectedCategory(category);
        console.log(category);
    };

    const onChangeCountry = (country) => {
        setSelectedCountry(country);
        console.log(country);
    };

    const onChangeStatus = (status) => {
        setSelectedStatus(status);
        console.log(status);
    };

    const onChangeSortBy = (value) => {
        setSortBy(value);
    };

    const onChangeSortOrder = (value) => {
        setSortOrder(value);
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

            <div class="button-wrapper">
                <div class="button-category-wrapper">
                    <h2 class="button-category-title">Category</h2>
                    <div class="button-category-item-container">
                        {/* all */}
                        <Button
                            className={`button-item ${
                                selectedCategory === 0
                                    ? "button-item-active"
                                    : "button-item-inactive"
                            }`}
                            onClick={() => onChangeCategory(0)}
                        >
                            <img
                                alt="button-category-all-icon"
                                src={
                                    selectedCategory === 0
                                        ? ICONS.categoryAllActive
                                        : ICONS.categoryAllInActive
                                }
                                class="button-category-item-icon"
                            />
                            <p class="button-item-text">All</p>
                        </Button>

                        {Object.entries(TYPES).map(([key, value]) => (
                            <Button
                                className={`button-item ${
                                    selectedCategory === key
                                        ? "button-item-active"
                                        : "button-item-inactive"
                                }`}
                                onClick={() => onChangeCategory(key)}
                            >
                                <img
                                    alt="button-category-icon"
                                    src={
                                        selectedCategory === key
                                            ? ICONS[
                                                  `category${SupportFunction.removeSpaceInString(
                                                      value
                                                  )}Active`
                                              ]
                                            : ICONS[
                                                  `category${SupportFunction.removeSpaceInString(
                                                      value
                                                  )}InActive`
                                              ]
                                    }
                                    class="button-category-item-icon"
                                />
                                <p class="button-item-text">{value}</p>
                            </Button>
                        ))}
                    </div>
                </div>
                <div class="button-country-status-sort-wrapper">
                    
                    {/* Country  */}
                    <div class="button-country-status-wrapper">
                        <h3 class="button-country-status-sort-title">
                            Country :{" "}
                        </h3>
                        {/* all  */}
                        <Button
                            className={`button-item ${
                                selectedCountry === 0
                                    ? "button-item-active"
                                    : "button-item-inactive"
                            }`}
                            onClick={() => onChangeCountry(0)}
                        >
                            <img
                                alt="button-country-all-icon"
                                src={ICONS.world}
                                class="button-country-item-icon"
                            />
                            <p class="button-item-text">All</p>
                        </Button>

                        {Object.entries(COUNTRY).map(([key, value]) => (
                            <Button
                                className={`button-item ${
                                    selectedCountry === key
                                        ? "button-item-active"
                                        : "button-item-inactive"
                                }`}
                                onClick={() => onChangeCountry(key)}
                            >
                                <img
                                    alt="button-country-icon"
                                    src={ICONS[`${value}`]}
                                    class="button-country-item-icon"
                                />
                                <p class="button-item-text">{value}</p>
                            </Button>
                        ))}
                    </div>

                    {/* Status  */}
                    <div class="button-country-status-wrapper">
                        <h3 class="button-country-status-sort-title">
                            Status :{" "}
                        </h3>

                        {/* all  */}
                        <Button
                            className={`button-item ${
                                selectedStatus === 0
                                    ? "button-item-active"
                                    : "button-item-inactive"
                            }`}
                            onClick={() => onChangeStatus(0)}
                        >
                            <p 
                                class="button-item-text"
                                style={{marginTop : '0px'}}
                            >All</p>
                        </Button>
                        
                        {Object.entries(STATUS).map(([key, value]) =>(
                            <Button
                                className={'button-item'}
                                onClick={() => onChangeStatus(key)}
                                style={{
                                    backgroundColor : `${selectedStatus === key ? COLOR_STATUS[value] : 'rgba(255, 0, 0, 0)'}`,
                                    color : `${selectedStatus === key ? COLOR_FONT[value] : '#257769'}`,
                                }}
                            >
                                <p class="button-item-text"
                                    style={{marginTop : '0px'}}
                                >{value}</p>
                            </Button>
                        ))}
                    </div>

                    {/* Sort  */}
                    <div class ='sort-wrapper'>
                        <h3 class='button-country-status-sort-title'>Sort by : </h3>
                        <Select
                            defaultValue={sortBy}
                            onChange={onChangeSortBy}
                            options={[
                                { value: 1, label: "Start date" },
                                { value: 2, label: "End date" },
                                { value: 3, label: "Registration date" },
                                { value: 4, label: "Created date" },
                            ]}
                            style={{
                                width : "30%",
                                textAlign : "center"
                            }}
                            className="select-item"
                        />

                        <h3 class='button-country-status-sort-title'>Sort order : </h3>
                        <Select
                            defaultValue={sortOrder}
                            onChange={onChangeSortOrder}
                            options={[
                                { value: 1, label: "Increase" },
                                { value: 2, label: "Decrease" },
                            ]}
                            className="select-item"
                        />
                    </div>
                </div>
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
                    {popularPosts.map((post) => (
                        <SmallPost data={post} key={post.id} />
                    ))}
                </div>

                <div class="center-content-wrapper">
                    {listShowActs.map((post) => (
                        <BigPost data={post} key={"big-post" + post.id} />
                    ))}

                    <Pagination
                        total={listPosts.length}
                        pageSize={limit}
                        onChange={onChangePage}
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
