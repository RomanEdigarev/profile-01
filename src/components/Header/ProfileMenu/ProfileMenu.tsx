import React from 'react';
import NotificationIcon from "./NotificationIcon";
import ProfileName from "./ProfileName";

const ProfileMenu = () => {
    return (
        <div className={'app__header__profile-menu'}>
            <NotificationIcon/>
            <ProfileName name={'Иванова А.'}/>
        </div>
    );
};

export default ProfileMenu;