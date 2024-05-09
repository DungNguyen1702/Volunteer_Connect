import React from 'react'
import { useParams } from 'react-router-dom'
import './index.scss'
import UserSidebar from '../../../components/UserProfile/UserSidebar';
import AccountSetting from '../../../components/UserProfile/AccountSetting';
import Header from '../../../components/header';
import Security from '../../../components/UserProfile/Security';
import Certificate from '../../../components/UserProfile/Certificate';

const Profile =() => {
  const { activepage } = useParams();

  return (
    <div class='profile-wrapper'>
      <Header/>
      <div className='userprofilein'>
        <div className='left'>
          <UserSidebar activepage={activepage} />
        </div>
        <div className='right'>
          {activepage === 'accountsetting' && <AccountSetting />}
          {activepage === 'security' && <Security />}
          {activepage === 'certificate' && <Certificate />}
        </div>
      </div>
    </div>
  )
}

export default Profile