import React, {FC} from 'react';
import FormFullNameIcon from "./FormFullNameIcon";

type PropType = {
    formik: any,
    labelText: string,
    inputId: string,
    inputPlaceholder: string,
}

const FromInput: FC<PropType> = ({formik, labelText, inputId, inputPlaceholder}) => {

    return (
        <div className={'app__content__form-block__form__form-container__input-container'}>

            <FormFullNameIcon/>

            <label
                className={`app__content__form-block__form__form-container__input-container__label ${formik.errors.fullName && formik.touched.fullName && 'error'}`}
                htmlFor="fullName">{labelText}</label>
            <input
                className={`app__content__form-block__form__form-container__input-container__input ${formik.errors.fullName && formik.touched.fullName && 'error'}`}
                id={inputId}
                name={'fullName'}
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullName}
                placeholder={inputPlaceholder}
            />

            {formik.errors.fullName && formik.touched.fullName ?
                <div className={'app__content__form-block__form__form-container__input-container error'}>{formik.errors.fullName}</div>
                : null}


        </div>
    );
};

export default FromInput