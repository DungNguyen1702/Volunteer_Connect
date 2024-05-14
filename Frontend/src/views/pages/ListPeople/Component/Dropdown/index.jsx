import { useNavigate } from "react-router-dom";
import AvatarAccount from '../../../../../components/avatar/AvatarAccount'
import("./index.scss");

const useDropDownListPeopleItem = ()=>{
    const navigate = useNavigate();

    const onClickAccount = (id, role)=>{
        navigate(`/contact-user/${id}/${role}`);
    };

    const getItemDropDownSearchAccount = (accountList)=>{
        return accountList.map(account => ({
            key : account.id,
            label : (
                <div class='search-account-item-wrapper' onClick={()=>onClickAccount(account.id, account.role)}>
                    <AvatarAccount
                        name={account.name} 
                        avatar={account.avatar} 
                        backgroundNoAva={account.backgroundNoAva} 
                        size={50}
                    />
                    <div class='search-account-item-content'>
                        <p class='search-account-item-name'>{account.name}</p>
                        <p class='search-account-item-email'><strong>Email : </strong>{account.account}</p>
                    </div>
                </div>
            )
        }));
    }

    return { getItemDropDownSearchAccount}
}

export default useDropDownListPeopleItem;
