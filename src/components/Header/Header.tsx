import React from 'react';
import ProfileMenu from "./ProfileMenu/ProfileMenu";
import Title from "./Title/Title";

const Header = () => {
    return (
        <div className={'app__header'}>
            <ProfileMenu/>
            <Title/>
        </div>
    );
};

export default Header;