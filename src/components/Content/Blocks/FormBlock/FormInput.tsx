import React, {FC, ReactElement} from 'react';
import FormFullNameIcon from "./FormFullNameIcon";

type PropsType = {
    formik: any,
    inputName: string,
    labelText: string,
    placeholderText: string,
    icon: ReactElement
}

const FormInput : FC<PropsType> = ({formik, inputName, labelText,placeholderText, icon}) => {
    return (
        <div className={'app__content__form-block__form__form-container__input-container'}>
            {icon}
            <label
                className={`app__content__form-block__form__form-container__input-container__label ${`${inputName}` in formik.errors && `${inputName}` in formik.touched && 'error'}`}
                htmlFor={inputName}>{labelText}</label>
            <input
                className={`app__content__form-block__form__form-container__input-container__input ${`${inputName}` in formik.errors && `${inputName}` in formik.touched && 'error'}`}
                id={inputName}
                name={inputName}
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[`${inputName}`]}
                placeholder={placeholderText}
            />
            {`${inputName}` in formik.errors && `${inputName}` in formik.touched ?
                <div className={'app__content__form-block__form__form-container__input-container error'}>{formik.errors[`${inputName}`]}</div>
                : null}
        </div>
    );
};

export default FormInput;