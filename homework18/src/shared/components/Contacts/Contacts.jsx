/** @jsxImportSource @emotion/react */

import { useState } from "react";

import SectionTitle from '../SectionTitle/SectionTitle'
import Container from "../../../modules/layouts/Container/Container";
import ContactsForm from './ContactsForm/ContactsForm'
import LoadingError from '../LoadingError/LoadingError'
import Socials from '../../components/Contacts/Socials/Socials'

import { sendAMessage } from "../../api/auth-api";

import { contactsStyle, contactsListStyle, contactsLinkStyle, contactsFormBoxStyles } from "./styles";

const Contacts = () => {
    const [error, setError] = useState(null);

    const submitForm = async (payload) => {
        const { error } = await sendAMessage(payload);
        if (error) {
            return setError(error.response.data.message);
        }
        alert("Ваше сообщение отправлено!");
    }

    return (
        <div style={{ paddingBottom: "40px" }}>
            <Container>
                <SectionTitle title="Контакты" />
                <div css={contactsStyle}>
                    <div css={contactsFormBoxStyles}>
                        <div css={contactsListStyle}>
                            <li css={contactsLinkStyle}>8 800 000 00 00</li>
                            <li css={contactsLinkStyle}>emailexample@email.com</li>
                        </div>
                        <ContactsForm submitForm={submitForm} />
                        {error && <LoadingError>{error}</LoadingError>}
                    </div>
                    <Socials />
                </div>
            </Container>
        </div>
    )
};

export default Contacts