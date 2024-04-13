import "./footer.scss";
import { ICONS } from "../../constants/icons";

function Footer() {
    return (
        <div class="footer-wrapper">
            <div class="icons-wrapper">
                <img alt="icon-facebook" class="icon" src={ICONS.facebook} />
                <img alt="icon-ins" class="icon" src={ICONS.ins} />
                <img alt="icon-youtube" class="icon" src={ICONS.youtube} />
                <img alt="icon-gmail" class="icon" src={ICONS.gmail} />
            </div>
            <div class="info-wrapper">
                <div class="info">
                    <p>
                        <strong style={{ color: "#398677" }}>
                            Country & Region
                        </strong>{" "}
                        : VietNam, Singapore, Indonesia, Malaysia
                    </p>
                    <p style={{marginTop:'10px'}}>
                        <strong style={{ color: "#398677" }}>
                            Head office
                        </strong>{" "}
                        : 54 Nguyen Luong Bang, Hoa Khanh, Lien Chieu, Da Nang
                    </p>
                </div>

                <div class="google-maps">
                    <iframe
                        title="head-office-map"
                        class="map"
                        loading="lazy"
                        allowfullscreen
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.8424053486656!2d108.14729407460018!3d16.073665739320223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314218d68dff9545%3A0x714561e9f3a7292c!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBCw6FjaCBLaG9hIC0gxJDhuqFpIGjhu41jIMSQw6AgTuG6tW5n!5e0!3m2!1svi!2s!4v1712907743747!5m2!1svi!2s"
                    ></iframe>
                </div>
                <div class="logo-and-slogan">
                    <img alt="logo" src={ICONS.logo} class="logo" />
                    <div class="slogan">
                        <h2>Volunteer connection</h2>
                        <h4>- Live, learn and grow & connect -</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
