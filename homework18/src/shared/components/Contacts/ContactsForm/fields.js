const fields = {
    username: {
        type: "text",
        placeholder: "Ваше имя",
        name: "name",
        rules: {
            required: "Введите ваше имя"
        }
    },
    email: {
        type: "email",
        placeholder: "Ваш email",
        name: "email",
        rules: {
            required: "Введите адрес почты"
        }
    },
    message: {
        type: "text",
        placeholder: "Введите сообщение",
        name: "message",
        rules: {
            required: "Введите ваше сообщение"
        }
    }
};

export default fields;