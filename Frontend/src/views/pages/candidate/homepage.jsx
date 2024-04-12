import { Carousel } from "antd";
import "./homepage.scss";
import { images } from "../../../constants/images";
import React from "react";

function UserHomepage() {
    return (
        <div class="user-homepage-wrapper">
            <div class="slide-wrapper">
                <div class='slide-wrapper blur-slide'></div>
                <Carousel autoplay className="slide-wrapper carousel">
                    <div class='slide-wrapper carousel slide' style={{backgroundColor : 'red'}}>
                        <img alt='slide-1' src={images.slide_1}/>
                    </div>
                    <div class='slide-wrapper carousel slide'>
                        <img alt='slide-2' src={images.slide_2}/>
                    </div>
                    <div class='slide-wrapper carousel slide'>
                        <img alt='slide-3' src={images.slide_3}/>
                    </div>
                    <div class='slide-wrapper carousel slide'>
                        <img alt='slide-4' src={images.slide_4}/>
                    </div>
                </Carousel>
            </div>

            <div class="content-wrapper">
                <div class="left-content-wrapper">
                    <h1>left</h1>
                </div>

                <div class="center-content-wrapper">
                    <h1>center</h1>
                </div>

                <div class="right-content-wrapper">
                    <h1>right</h1>
                </div>
            </div>
        </div>
    );
}

export default UserHomepage;
