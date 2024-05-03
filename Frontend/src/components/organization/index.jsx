import "./index.scss";

function OrganizationIcon(props) {
    const { id ,name, avatar } = props;

    const handlerClickOrg = ()=>{
        console.log("Account " + id)
    };

    return (
        <div class="post-act-org-item-org-click-zone" onClick={handlerClickOrg}>
            <p>{name}</p>
            <img alt="org-ava" src={avatar} class="org-ava" />
        </div>
    );
}

export default OrganizationIcon;
