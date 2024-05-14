import { useNavigate } from "react-router-dom";
import "./index.scss";
import { Avatar } from "antd";
import SupportFunction from '../../support/support_function'

function OrganizationIcon(props) {
    const { id ,name, avatar, backgroundNoAva } = props;
    const navigate = useNavigate();

    const handlerClickOrg = ()=>{
        navigate(`/contact-user/${id}/2`)
    };

    return (
        <div class="post-act-org-item-org-click-zone" onClick={handlerClickOrg}>
            <p class='margin-right'>{name}</p>
            {avatar ? (
                    <Avatar
                        src={avatar}
                        shape={"circle"}
                        size={"large"}
                    />
                ) : (
                    <Avatar
                        style={{
                            backgroundColor: backgroundNoAva,
                        }}
                        shape={"circle"}
                        size={"large"}
                        className=""
                    >
                        {SupportFunction.getFirstCharacter(name)}
                    </Avatar>
                )}
        </div>
    );
}

export default OrganizationIcon;
