import React from 'react';
import avatar from '../../../../img/avatar-large.png'
import icon from '../../../../img/redactor-icon.png'

const MainBlock = () => {
    return (
        <div className={'app__content__main-block'}>
            <div className='app__content__main-block__profile-name'>
                <img src={avatar} alt="" className='app__content__main-block__profile-name__avatar'/>
                <span className={'app__content__main-block__profile-name__name'}>Иванова Анна Михайловна</span>
            </div>
            <button className="app__content__main-block__button">
                редактировать
                <img src={icon} alt="" className="app__content__main-block__button__icon"/>
            </button>

        </div>
    );
};

export default MainBlock;