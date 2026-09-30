import { templates } from "./templates.js";

const pageTitles = {
    inicio: "ONG Esperança Solidária",
    projetos: "Projetos - ONG Esperança Solidária",
    cadastro: "Cadastro - ONG Esperança Solidária"
};

export function getRoute() {
    const cleanHash = window.location.hash
        .replace(/^#\/?/, "")
        .trim();

    if (!cleanHash) {
        return {
            page: "inicio",
            section: null
        };
    }

    const parts = cleanHash.split("/");

    return {
        page: parts[0],
        section: parts[1] || null
    };
}

function updateActiveLink(page) {
    const links = document.querySelectorAll(
        ".main-nav [data-route]"
    );

    links.forEach((link) => {
        link.removeAttribute("aria-current");

        if (link.dataset.route === page) {
            link.setAttribute(
                "aria-current",
                "page"
            );
        }
    });
}

export function renderRoute(
    app,
    onCadastroRender
) {
    const { page, section } = getRoute();

    const template = templates[page];

    if (!template) {
        app.innerHTML = templates.erro;

        document.title =
            "Página não encontrada - ONG Esperança Solidária";

        updateActiveLink("");

        return;
    }

    app.innerHTML = template;

    document.title =
        pageTitles[page] ||
        "ONG Esperança Solidária";

    updateActiveLink(page);

    if (page === "cadastro") {
        onCadastroRender();
    }

    if (section) {
        requestAnimationFrame(() => {
            const target =
                document.getElementById(section);

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    } else {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}