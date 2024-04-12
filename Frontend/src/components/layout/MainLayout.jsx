import Footer from "../footer";
import Header from "../header";

function MainLayout (props) {
    return (
        <div>
            <Header/>
                <props.component/>
            <Footer/>
        </div>
    )
}

export default MainLayout