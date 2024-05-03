import Navbar from "../../../components/navBar/Navbar";
import "../../../components/hero/HeroStyle.css";
import FrameComponent1 from "../../../components/gInterface/FrameComponent1";
import Footer from "../../../components/footer";

function About() {
    return (
        <>
            <Navbar />
            <FrameComponent1 />
            <img
                className=".frameChild"
                loading="lazy"
                alt=""
                src="/rectangle-66@2x.png"
            />
            <Footer/>
        </>
    );
}

export default About;
