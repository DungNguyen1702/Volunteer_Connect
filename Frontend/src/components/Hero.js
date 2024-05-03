import "./HeroStyle.css";
import FrameComponent2 from "./gInterface/FrameComponent2";
function Hero(props) {
    return (
        <>
            <div className={props.cName}>
                <img
                    className="image1Icon"
                    loading="lazy"
                    alt=""
                    src="/image-1@2x.png"
                />
            </div>
            <FrameComponent2/>
        </>
    )
}

export default Hero;