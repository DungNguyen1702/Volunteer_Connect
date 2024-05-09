import { useNavigate } from "react-router-dom";
import "./index.scss";

function OrganizationIcon(props) {
    const { id ,name, avatar } = props;
    const navigate = useNavigate();

    const handlerClickOrg = ()=>{
        navigate(`/contact-user/${id}`)
    };

    return (
        <div class="post-act-org-item-org-click-zone" onClick={handlerClickOrg}>
            <p>{name}</p>
            <img alt="org-ava" src={avatar} class="org-ava" />
        </div>
    );
}

export default OrganizationIcon;
