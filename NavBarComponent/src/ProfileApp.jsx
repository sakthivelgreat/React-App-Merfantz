import { useState } from "react";
import './ProfileApp.css'; 

const ProfileApp = ({ handleDropdownToggle }) => {
    

    return (
        <div className="profile-app">
            <div className="profile-header" onClick={handleDropdownToggle}>
                <div className="profile-icon">S</div>
                <div className="profile-details">
                    <span className="profile-name">Satheeskumar</span>
                    <small className="profile-plan">Free Plan</small>
                </div>

                <div className="dropdown-arrow"><svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="KUS3F kmGIB"><path d="M6 15l6-6 6 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
            </div>
        </div>
    );
};

export default ProfileApp;
 