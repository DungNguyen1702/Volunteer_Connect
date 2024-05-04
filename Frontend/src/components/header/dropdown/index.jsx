import { BookOutlined, HeartOutlined, LogoutOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

import("./index.scss");

const useDropdownNavigation = ()=>{
    const navigate = useNavigate();
    const {setToken, setAccount} = useAuth();
    

    const getItemDropDownAccount = (role)=>{
        console.log(role);
    
        const handlerClickLogout = ()=>{
            navigate('/auth/login');
            setAccount(null);
            setToken(null);
        }
        
        const itemsCandidate = [
            {
                key: "Candidate-dropdown-1",
                label: (
                    <div 
                        class="item-wrapper"
                        onClick={()=>{navigate('/profile/personInfo')}}
                    >
                        <UserOutlined className="item-icon"/>
                        <p class="item-title">Person info</p>
                    </div>
                ),
            },
            {
                key: "Candidate-dropdown-2",
                label: (
                    <div 
                        class="item-wrapper"
                        onClick={()=>{navigate('/profile/security')}}
                    >
                        <SettingOutlined className="item-icon"/>
                        <p class="item-title">Security</p>
                    </div>
                ),
            },
            {
                key: "Candidate-dropdown-3",
                label: (
                    <div 
                        class="item-wrapper"
                        onClick={()=>{navigate('/profile/likedPosts')}}
                    >
                        <HeartOutlined className="item-icon"/>
                        <p class="item-title">Liked posts</p>
                    </div>
                ),
            },
            {
                key: "Candidate-dropdown-4",
                label: (
                    <div 
                        class="item-wrapper"
                        onClick={()=>{navigate('/profile/certificates')}}
                    >
                        <BookOutlined className="item-icon" />
                        <p class="item-title">Certificates</p>
                    </div>
                ),
            },
            {
                key: "Candidate-dropdown-5",
                label: (
                    <div 
                        class="item-wrapper" 
                        onClick={handlerClickLogout}>
                        <LogoutOutlined className="item-icon"/>
                        <p class="item-title">Logout</p>
                    </div>
                ),
            },
        ];
    
        const itemsOrganization = [
            {
                key: "Organization-dropdown-1",
                label: (
                    <div 
                        class="item-wrapper"
                        onClick={()=>{navigate('/profile/personInfo')}}
                    >
                        <UserOutlined className="item-icon"/>
                        <p class="item-title">Person info</p>
                    </div>
                ),
            },
            {
                key: "Organization-dropdown-2",
                label: (
                    <div 
                        class="item-wrapper"
                        onClick={()=>{navigate('/profile/security')}}
                    >
                        <SettingOutlined className="item-icon"/>
                        <p class="item-title">Security</p>
                    </div>
                ),
            },
            {
                key: "Organization-dropdown-3",
                label: (
                    <div 
                        class="item-wrapper"
                        onClick={()=>{navigate('/profile/likedPosts')}}
                    >
                        <HeartOutlined className="item-icon"/>
                        <p class="item-title">Liked posts</p>
                    </div>
                ),
            },
            {
                key: "Organization-dropdown-4",
                label: (
                    <div class="item-wrapper" onClick={handlerClickLogout}>
                        <LogoutOutlined className="item-icon" />
                        <p class="item-title">Logout</p>
                    </div>
                ),
            },
        ];
    
        const itemsAdmin = [
            {
                key: "Admin-dropdown-1",
                label: (
                    <div 
                        class="item-wrapper"
                        onClick={()=>{navigate('/profile/personInfo')}}
                    >
                        <UserOutlined className="item-icon"/>
                        <p class="item-title">Person info</p>
                    </div>
                ),
            },
            {
                key: "Admin-dropdown-2",
                label: (
                    <div 
                        class="item-wrapper"
                        onClick={()=>{navigate('/profile/security')}}
                    >
                        <SettingOutlined className="item-icon"/>
                        <p class="item-title">Security</p>
                    </div>
                ),
            },
            {
                key: "Admin-dropdown-3",
                label: (
                    <div class="item-wrapper" onClick={handlerClickLogout}>
                        <LogoutOutlined className="item-icon"/>
                        <p class="item-title">Logout</p>
                    </div>
                ),
            },
        ];
    
        switch (role) {
            case 1:
                return itemsCandidate;
            case 2:
                return itemsOrganization;
            case 3:
                return itemsAdmin;
            default:
                return;
        }
    }
    return {getItemDropDownAccount}
}

export default useDropdownNavigation;
