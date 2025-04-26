/** @jsxImportSource @emotion/react */

import { useForm } from "react-hook-form";

import TextField from "../../TextField/TextField";
import Button from "../../Button/Button";

import fields from "./fields";

import { contactsFormStyles, contactsFormBlockStyles } from "../styles";

const ContactsForm = ({ submitForm }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (values) => {
        submitForm(values);
        reset();
    };

    return (
        <form css={contactsFormStyles} onSubmit={handleSubmit(onSubmit)}>
            <div css={contactsFormBlockStyles}>
                <TextField {...fields.email} register={register} error={errors.email} />
                <TextField
                    {...fields.username}
                    register={register}
                    error={errors.username}
                />
            </div>

            <TextField
                {...fields.message}
                register={register}
                error={errors.message}
            />
            <Button style={{ width: "30%", alignSelf: "flex-end" }}>Отправить</Button>
        </form>
    );
};

export default ContactsForm;
