import React from 'react';
import MailIcon from "./MailIcon";
import PhoneIcon from "./PhoneIcon";

const InfoBlock = () => {
    return (
        <div className={'app__content__info-block'}>

            <div className='app__content__info-block__row'>
                <MailIcon/>
                <div className="app__content__info-block__row__title">
                    Ivanova@mail.ru
                </div>
            </div>

            <div className='app__content__info-block__row end'>
                <PhoneIcon/>
                <div className="app__content__info-block__row__title">
                    Укажите номер телефона
                </div>
            </div>

        </div>
    );
};

export default InfoBlock;