import Footer from "../footer";
import Header from "../header";
import './MainLayout.scss'

function MainLayout (props) {
    const {isNoFooter} = props

    return (
        <div class='frame-wrapper'>
            <Header stateButton={props.stateButton}/>
                <div class='frame-body'>
                    <props.component/>
                </div>
            {!isNoFooter && <Footer/>}
        </div>
    )
}

export default MainLayout