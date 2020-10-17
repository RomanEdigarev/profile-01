import React, {FC} from 'react';
import avatar from '../../../img/avatar-mini.png'

type PropsType = {
    name: string
}
const ProfileName : FC<PropsType> = ({name}) => {
    return (
        <div className={'profile-name'}>
            <img className={'profile-name__avatar'} src={avatar} alt=""/>
            <span className="profile-name__name">{name}</span>
        </div>
    );
};

export default ProfileName;