import React from 'react'
import './AccountSetting.scss'

const AccountSetting = () => {
    return (
        <div className='accountsetting'>
            <div className='profile-photo'>
                <h1 className='mainhead1'>Profile Photo</h1>
                
                <button className='mainbutton1'>Save</button>
            </div>
            <div className='contact-address'>
                <h1 className='mainhead1'>Contact Address</h1>
                <div className='form'>
                    <div className='form-group'>
                        <label htmlFor='address'>Address <span>*</span></label>
                        <input type='text' name='address' id='address' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='phone'>Phone/Mobile <span>*</span></label>
                        <input type='text' name='phone' id='phone' />
                    </div>
                </div>
                <button className='mainbutton1'>Save</button>
            </div>
            <div className='personal-information'>
                <h1 className='mainhead1'>Personal Information</h1>
                <div className='form'>
                    <div className='form-group'>
                        <label htmlFor='name'>Your name <span>*</span></label>
                        <input type='text' name='name' id='name' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='dob'>Day of Birth <span>*</span></label>
                        <input type='text' name='dob' id='dob' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>Email <span>*</span></label>
                        <input type='text' name='email' id='email' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='gender'>Gender<span>*</span></label>
                        <input type='text' name='gender' id='gender' />
                    </div>
                </div>
                <button className='mainbutton1'>Save</button>
            </div>
        </div>
    )
}

export default AccountSetting
