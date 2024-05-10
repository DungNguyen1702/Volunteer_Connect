import React from 'react'
import './Security.scss'

const Security = () => {
    return (
        <div className='securityFormParent'>
            <div className='securityForm'>
                <h1 className='mainhead1'>Change Password</h1>
                <div className='form'>
                    <div className='form-group'>
                        <label htmlFor='oldpass'>Old Password <span>*</span></label>
                        <input type="password"
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='newpass'>New Password <span>*</span></label>
                        <input type="password"
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='newpass'>Comfirm Password <span>*</span></label>
                        <input type="password"
                        />
                    </div>
                </div>
                <button className='mainbutton1'
                >Save</button>
            </div>
        </div>
    )
}

export default Security
