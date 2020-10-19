import React from 'react';
import {FormikConfig, FormikErrors, useFormik} from "formik";
import FormFullNameIcon from "./FormFullNameIcon";
import FormInput from "./FormInput";

export type MyFormsValues = {
    fullName: string,
    email: string,
    phoneNumber: string,
}

export const configFormik : FormikConfig<MyFormsValues> = {
    initialValues : {fullName: '', phoneNumber: '', email: ''},
    onSubmit : values => {
        console.log(values)
    },
    validate : (values) => {
        let errors : FormikErrors<typeof values> = {}
        if(!values.fullName) {
            errors.fullName = 'Вы неверно указали имя'
        }
        if(!values.email) {
            errors.email = 'Вы неверно указали email'
        }
        if(!values.phoneNumber) {
            errors.phoneNumber = 'Вы неверно указали номер телефона'
        }
        return errors
    }
}


const FormBlock = () => {

    const formik = useFormik<MyFormsValues>(configFormik)

    return (
        <div className={'app__content__form-block'}>
            <form onSubmit={formik.handleSubmit} className={'app__content__form-block__form'}>
                <div className="app__content__form-block__form__form-container">

                    <FormInput formik={formik}
                               inputName={'fullName'}
                               labelText={'Фамилия и имя'}
                               placeholderText={'Укажите ваши имя и фамилию'}
                               icon={<FormFullNameIcon/>}
                    />

                    <FormInput formik={formik}
                               inputName={'email'}
                               labelText={'E-mail'}
                               placeholderText={'Укажите ваш e-mail'}
                               icon={<FormFullNameIcon/>}
                    />

                    <FormInput formik={formik}
                               inputName={'phoneNumber'}
                               labelText={'Телефон'}
                               placeholderText={'Укажите ваш номер телефона'}
                               icon={<FormFullNameIcon/>}
                    />








                </div>

                <button className={'app__content__form-block__form__button'}
                        type={"submit"}>
                    Сохранить изменения
                </button>

            </form>
        </div>
    );
};

export default FormBlock;