const validationRules = {
    nome: {
        validate: (value) =>
            value.trim().length >= 3,

        message:
            "Informe um nome com pelo menos 3 caracteres."
    },

    email: {
        validate: (value) =>
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),

        message:
            "Informe um e-mail válido."
    },

    nascimento: {
        validate: (value) =>
            value !== "",

        message:
            "Informe a data de nascimento."
    },

    cpf: {
        validate: (value) =>
            /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(value),

        message:
            "Use o formato 000.000.000-00."
    },

    telefone: {
        validate: (value) =>
            /^\(\d{2}\) \d{5}-\d{4}$/.test(value),

        message:
            "Use o formato (11) 91234-5678."
    },

    cep: {
        validate: (value) =>
            /^\d{5}-\d{3}$/.test(value),

        message:
            "Use o formato 00000-000."
    },

    endereco: {
        validate: (value) =>
            value.trim().length >= 3,

        message:
            "Informe o endereço."
    },

    cidade: {
        validate: (value) =>
            value.trim().length >= 2,

        message:
            "Informe a cidade."
    },

    estado: {
        validate: (value) =>
            /^[A-Za-z]{2}$/.test(value),

        message:
            "Informe a sigla do estado com 2 letras."
    }
};

function getMessageElement(field) {
    const messageId =
        `${field.id}-message`;

    let message =
        document.querySelector(
            `#${messageId}`
        );

    if (!message) {
        message =
            document.createElement("small");

        message.id = messageId;

        field.insertAdjacentElement(
            "afterend",
            message
        );
    }

    field.setAttribute(
        "aria-describedby",
        messageId
    );

    return message;
}

export function validateField(field) {
    const rule =
        validationRules[field.name];

    if (!rule) {
        return true;
    }

    const value = field.value;
    const message =
        getMessageElement(field);

    if (value.trim() === "") {
        field.classList.add(
            "is-invalid"
        );

        field.classList.remove(
            "is-valid"
        );

        field.setAttribute(
            "aria-invalid",
            "true"
        );

        message.textContent =
            "Este campo é obrigatório.";

        message.className =
            "field-message error-message";

        return false;
    }

    if (!rule.validate(value)) {
        field.classList.add(
            "is-invalid"
        );

        field.classList.remove(
            "is-valid"
        );

        field.setAttribute(
            "aria-invalid",
            "true"
        );

        message.textContent =
            rule.message;

        message.className =
            "field-message error-message";

        return false;
    }

    field.classList.add(
        "is-valid"
    );

    field.classList.remove(
        "is-invalid"
    );

    field.setAttribute(
        "aria-invalid",
        "false"
    );

    message.textContent =
        "Campo preenchido corretamente.";

    message.className =
        "field-message success-message";

    return true;
}

export function validateForm(form) {
    const fields =
        form.querySelectorAll("input");

    let formIsValid = true;
    let firstInvalidField = null;

    fields.forEach((field) => {
        const valid =
            validateField(field);

        if (!valid) {
            formIsValid = false;

            if (!firstInvalidField) {
                firstInvalidField = field;
            }
        }
    });

    if (firstInvalidField) {
        firstInvalidField.focus();
    }

    return formIsValid;
}