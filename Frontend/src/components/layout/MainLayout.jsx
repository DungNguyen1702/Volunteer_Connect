import Footer from "../footer";
import Header from "../header";

function MainLayout (props) {
    return (
        <div>
            <Header stateButton={props.stateButton} isLogined = {props.isLogined}/>
                <props.component isLogined={props.isLogined}/>
            <Footer/>
        </div>
    )
}

export default MainLayout