import React from 'react';
import {FormikConfig, FormikErrors, useFormik} from "formik";
import {FormikProps} from "formik/dist/types";
import FromInput from "./FromInput";

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
        return errors
    }
}


const FormBlock = () => {

    const formik = useFormik<MyFormsValues>(configFormik)

    return (
        <div className={'app__content__form-block'}>
            <form onSubmit={formik.handleSubmit} className={'app__content__form-block__form'}>
                <div className="app__content__form-block__form__form-container">
                    <FromInput formik={formik}
                               inputId={'fullName'}
                               labelText={'Фамилия и имя'}
                               inputPlaceholder={'Укажите ваши фамилию и имя'} />

                    <FromInput formik={formik}
                               inputId={'fullName'}
                               labelText={'Фамилия и имя'}
                               inputPlaceholder={'Укажите ваши фамилию и имя'} />

                    <FromInput formik={formik}
                               inputId={'fullName'}
                               labelText={'Фамилия и имя'}
                               inputPlaceholder={'Укажите ваши фамилию и имя'} />
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