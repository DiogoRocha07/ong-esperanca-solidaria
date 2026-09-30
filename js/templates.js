const projects = [
    {
        id: "educacao",
        status: "Em andamento",
        badgeClass: "badge-active",
        title: "Educação para Todos",
        description:
            "Apoio educacional para crianças e adolescentes em situação de vulnerabilidade, oferecendo oportunidades de aprendizado e desenvolvimento."
    },
    {
        id: "alimentos",
        status: "Campanha ativa",
        badgeClass: "badge-highlight",
        title: "Alimento Solidário",
        description:
            "Arrecadação e distribuição de alimentos para famílias que necessitam de apoio, contribuindo para a segurança alimentar da comunidade."
    },
    {
        id: "inclusao",
        status: "Inscrições abertas",
        badgeClass: "badge-info",
        title: "Inclusão Digital",
        description:
            "Acesso à tecnologia e conhecimentos básicos de informática para pessoas da comunidade, ampliando oportunidades de inclusão."
    }
];

function renderProjects() {
    return projects
        .map(
            (project) => `
        <article
          id="${project.id}"
          class="project-card"
        >
          <span class="badge ${project.badgeClass}">
            ${project.status}
          </span>

          <h2>${project.title}</h2>

          <p>
            ${project.description}
          </p>
        </article>
      `
        )
        .join("");
}

export const templates = {
    inicio: `
    <section class="section-card col-12 hero">
      <div>
        <h1>ONG Esperança Solidária</h1>

        <h2>Quem somos</h2>

        <p>
          A ONG Esperança Solidária é uma organização sem fins lucrativos
          dedicada ao desenvolvimento de projetos sociais e ao apoio de
          pessoas em situação de vulnerabilidade.
        </p>

        <p>
          Nosso objetivo é transformar vidas por meio de ações de
          solidariedade, educação e participação comunitária.
        </p>
      </div>

      <picture class="hero-media">
        <source
          srcset="./imagens/ong-voluntarios.webp"
          type="image/webp"
        >

        <img
          src="./imagens/ong-voluntarios.png"
          alt="Voluntários participando de uma ação social"
          width="800"
          height="600"
        >
      </picture>
    </section>

    <section class="section-card col-12">
      <h2>Como ajudar</h2>

      <p>
        Você pode contribuir por meio de doações ou participando
        de nossas atividades como voluntário.
      </p>

      <a
        class="button-link"
        href="#/cadastro"
      >
        Cadastre-se como voluntário
      </a>
    </section>

    <section class="section-card col-12">
      <h2>Entre em contato</h2>

      <address>
        <p>
          E-mail:
          <a href="mailto:contato@esperancasolidaria.org.br">
            contato@esperancasolidaria.org.br
          </a>
        </p>

        <p>
          Telefone:
          <a href="tel:+551143211234">
            (11) 4321-1234
          </a>
        </p>

        <p>
          Rua da Solidariedade, 100 - São Paulo - SP
        </p>
      </address>
    </section>
  `,

    projetos: `
    <section class="section-card col-12">
      <h1>Nossos projetos sociais</h1>

      <p>
        Conheça algumas das iniciativas desenvolvidas pela ONG
        Esperança Solidária para apoiar a comunidade.
      </p>

      <picture class="projects-media">
        <source
          srcset="../imagens/ong-voluntarios.webp"
          type="image/webp"
        >

        <img
          src="../imagens/ong-voluntarios.png"
          alt="Voluntários participando de uma ação social"
          width="800"
          height="600"
        >
      </picture>

      <div class="projects-grid">
        ${renderProjects()}
      </div>
    </section>

    <section class="section-card col-12">
      <h2>Seja um voluntário</h2>

      <p>
        Os voluntários podem participar de ações sociais,
        campanhas, eventos e outras atividades da organização.
      </p>

      <p>
        Cada pessoa pode colaborar de acordo com sua
        disponibilidade, conhecimentos e habilidades.
      </p>

      <a
        class="button-link"
        href="#/cadastro"
      >
        Quero ser voluntário
      </a>
    </section>

    <section class="section-card col-12">
      <h2>Faça uma doação</h2>

      <p>
        As doações ajudam a manter nossos projetos e ampliar
        o número de pessoas atendidas.
      </p>

      <p>
        É possível contribuir com alimentos, materiais, roupas
        ou recursos destinados às ações sociais.
      </p>
    </section>
  `,

    cadastro: `
    <section class="section-card col-12">
      <h1>Cadastro de voluntários</h1>

      <p>
        Preencha seus dados para demonstrar interesse em participar
        das ações da ONG Esperança Solidária.
      </p>

      <div
        class="alert alert-info"
        role="status"
      >
        <strong>Atenção:</strong>
        preencha todos os campos obrigatórios antes de enviar
        o cadastro.
      </div>

      <form
        id="volunteer-form"
        class="volunteer-form"
        novalidate
      >
        <fieldset>
          <legend>Dados pessoais</legend>

          <div class="form-field">
            <label for="nome">
              Nome completo
            </label>

            <input
              type="text"
              id="nome"
              name="nome"
              autocomplete="name"
              required
            >
          </div>

          <div class="form-field">
            <label for="email">
              E-mail
            </label>

            <input
              type="email"
              id="email"
              name="email"
              autocomplete="email"
              required
            >
          </div>

          <div class="form-field">
            <label for="nascimento">
              Data de nascimento
            </label>

            <input
              type="date"
              id="nascimento"
              name="nascimento"
              autocomplete="bday"
              required
            >
          </div>

          <div class="form-field">
            <label for="cpf">
              CPF
            </label>

            <input
              type="text"
              id="cpf"
              name="cpf"
              placeholder="000.000.000-00"
              pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
              maxlength="14"
              inputmode="numeric"
              required
            >
          </div>

          <div class="form-field">
            <label for="telefone">
              Telefone
            </label>

            <input
              type="tel"
              id="telefone"
              name="telefone"
              placeholder="(11) 91234-5678"
              pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}"
              maxlength="15"
              autocomplete="tel"
              required
            >
          </div>
        </fieldset>

        <fieldset>
          <legend>Endereço</legend>

          <div class="form-field">
            <label for="cep">
              CEP
            </label>

            <input
              type="text"
              id="cep"
              name="cep"
              placeholder="00000-000"
              pattern="[0-9]{5}-[0-9]{3}"
              maxlength="9"
              inputmode="numeric"
              autocomplete="postal-code"
              required
            >
          </div>

          <div class="form-field">
            <label for="endereco">
              Endereço
            </label>

            <input
              type="text"
              id="endereco"
              name="endereco"
              autocomplete="street-address"
              required
            >
          </div>

          <div class="form-field">
            <label for="cidade">
              Cidade
            </label>

            <input
              type="text"
              id="cidade"
              name="cidade"
              autocomplete="address-level2"
              required
            >
          </div>

          <div class="form-field">
            <label for="estado">
              Estado
            </label>

            <input
              type="text"
              id="estado"
              name="estado"
              placeholder="SP"
              pattern="[A-Za-z]{2}"
              maxlength="2"
              autocomplete="address-level1"
              required
            >
          </div>
        </fieldset>

        <button
          class="button-primary"
          type="submit"
        >
          Cadastrar
        </button>
      </form>

      <dialog
        id="success-modal"
        class="modal"
        aria-labelledby="modal-title"
      >
        <div class="modal-content">
          <span
            class="modal-icon"
            aria-hidden="true"
          >
            ✓
          </span>

          <h2 id="modal-title">
            Cadastro validado
          </h2>

          <p>
            O formulário foi preenchido corretamente e foi salvo
            no armazenamento local do navegador.
          </p>

          <button
            type="button"
            class="button-primary"
            id="close-modal"
          >
            Fechar
          </button>
        </div>
      </dialog>

      <section class="saved-data">
        <h2>Cadastros salvos</h2>

        <div id="saved-volunteers">
          <p>Nenhum cadastro salvo.</p>
        </div>
      </section>
    </section>
  `,

    erro: `
    <section class="section-card col-12">
      <h1>Página não encontrada</h1>

      <p>
        O conteúdo solicitado não existe.
      </p>

      <a
        class="button-link"
        href="#/inicio"
      >
        Voltar para o início
      </a>
    </section>
  `
};