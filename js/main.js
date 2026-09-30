"use strict";

import {
    renderRoute
} from "./router.js";

import {
    validateField,
    validateForm
} from "./validation.js";

import {
    getSavedVolunteers,
    saveVolunteer,
    deleteVolunteer
} from "./storage.js";

const app =
    document.querySelector("#app");

const menuToggle =
    document.querySelector(
        "#menu-toggle"
    );

const mainNav =
    document.querySelector(
        ".main-nav"
    );

const contrastToggle =
    document.querySelector("#contrast-toggle");

function createVolunteerFromForm(form) {
    const formData =
        new FormData(form);

    return {
        nome:
            formData.get("nome"),

        email:
            formData.get("email"),

        nascimento:
            dayjs(
                formData.get("nascimento")
            ).format("DD/MM/YYYY"),

        cpf:
            formData.get("cpf"),

        telefone:
            formData.get("telefone"),

        cep:
            formData.get("cep"),

        endereco:
            formData.get("endereco"),

        cidade:
            formData.get("cidade"),

        estado:
            formData.get("estado")
    };
}

function renderSavedVolunteers() {
    const container =
        document.querySelector(
            "#saved-volunteers"
        );

    if (!container) {
        return;
    }

    const volunteers =
        getSavedVolunteers();

    if (volunteers.length === 0) {
        container.innerHTML =
            "<p>Nenhum cadastro salvo.</p>";

        return;
    }

    container.innerHTML =
        volunteers
            .map(
                (volunteer, index) => `
          <article class="saved-volunteer">
            <h3>
              ${volunteer.nome}
            </h3>

            <p>
              <strong>E-mail:</strong>
              ${volunteer.email}
            </p>

            <p>
              <strong>
                Data de nascimento:
              </strong>
              ${volunteer.nascimento}
            </p>

            <p>
              <strong>Telefone:</strong>
              ${volunteer.telefone}
            </p>

            <p>
              <strong>Cidade:</strong>
              ${volunteer.cidade} -
              ${volunteer.estado}
            </p>

            <button
              type="button"
              class="delete-button"
              data-index="${index}"
            >
              Excluir cadastro
            </button>
          </article>
        `
            )
            .join("");
}

function loadRoute() {
    renderRoute(
        app,
        renderSavedVolunteers
    );
}

window.addEventListener(
    "hashchange",
    loadRoute
);

mainNav.addEventListener(
    "click",
    (event) => {
        const link =
            event.target.closest("a");

        if (!link) {
            return;
        }

        menuToggle.checked = false;
    }
);

contrastToggle.addEventListener("click", () => {
    document.body.classList.toggle("high-contrast");

    const enabled =
        document.body.classList.contains("high-contrast");

    contrastToggle.setAttribute(
        "aria-pressed",
        String(enabled)
    );
});

app.addEventListener(
    "input",
    (event) => {
        const field =
            event.target;

        if (
            !field.matches(
                "#volunteer-form input"
            )
        ) {
            return;
        }

        validateField(field);
    }
);

app.addEventListener(
    "submit",
    (event) => {
        if (
            !event.target.matches(
                "#volunteer-form"
            )
        ) {
            return;
        }

        event.preventDefault();

        const form =
            event.target;

        if (!validateForm(form)) {
            return;
        }

        const volunteer =
            createVolunteerFromForm(
                form
            );

        saveVolunteer(
            volunteer
        );

        renderSavedVolunteers();

        const modal =
            document.querySelector(
                "#success-modal"
            );

        if (modal) {
            modal.showModal();
        }

        form.reset();

        form
            .querySelectorAll("input")
            .forEach((field) => {
                field.classList.remove(
                    "is-valid",
                    "is-invalid"
                );

                field.removeAttribute(
                    "aria-invalid"
                );

                field.removeAttribute(
                    "aria-describedby"
                );
            });

        form
            .querySelectorAll(
                ".field-message"
            )
            .forEach((message) => {
                message.remove();
            });
    }
);

app.addEventListener(
    "click",
    (event) => {
        if (
            event.target.id ===
            "close-modal"
        ) {
            const modal =
                document.querySelector(
                    "#success-modal"
                );

            if (modal) {
                modal.close();
            }

            return;
        }

        const deleteButton =
            event.target.closest(
                ".delete-button"
            );

        if (!deleteButton) {
            return;
        }

        const index =
            Number(
                deleteButton.dataset.index
            );

        deleteVolunteer(index);

        renderSavedVolunteers();
    }
);

document.addEventListener(
    "DOMContentLoaded",
    () => {
        if (
            !window.location.hash
        ) {
            window.location.hash =
                "#/inicio";

            return;
        }

        loadRoute();
    }
);