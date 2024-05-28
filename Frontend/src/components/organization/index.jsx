import { useNavigate } from "react-router-dom";
import "./index.scss";
import { Avatar } from "antd";
import SupportFunction from "../../support/support_function";

function OrganizationIcon(props) {
    const { id, name, avatar, backgroundNoAva, size, avatarLeft } = props;
    const navigate = useNavigate();

    const handlerClickOrg = () => {
        navigate(`/contact-user/${id}/2`);
    };

    return (
        <div class="post-act-org-item-org-click-zone" onClick={handlerClickOrg}>
            {avatarLeft &&
                (avatar ? (
                    <Avatar
                        src={avatar}
                        shape={"circle"}
                        size={size ? size : "large"}
                    />
                ) : (
                    <Avatar
                        style={{
                            backgroundColor: backgroundNoAva,
                        }}
                        shape={"circle"}
                        size={size ? size : "large"}
                        className=""
                    >
                        {SupportFunction.getFirstCharacter(name)}
                    </Avatar>
                ))}
            <p class={`${avatarLeft ? "margin-left" : "margin-right"}`}>{name}</p>
            {!avatarLeft &&
                (avatar ? (
                    <Avatar
                        src={avatar}
                        shape={"circle"}
                        size={size ? size : "large"}
                    />
                ) : (
                    <Avatar
                        style={{
                            backgroundColor: backgroundNoAva,
                        }}
                        shape={"circle"}
                        size={size ? size : "large"}
                        className=""
                    >
                        {SupportFunction.getFirstCharacter(name)}
                    </Avatar>
                ))}
        </div>
    );
}

export default OrganizationIcon;
