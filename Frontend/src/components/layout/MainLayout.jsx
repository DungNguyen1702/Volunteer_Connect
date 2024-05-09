import Footer from "../footer";
import Header from "../header";

function MainLayout (props) {
    const {isNoFooter} = props

    return (
        <div>
            <Header stateButton={props.stateButton}/>
                <props.component/>
            {!isNoFooter && <Footer/>}
        </div>
    )
}

export default MainLayout