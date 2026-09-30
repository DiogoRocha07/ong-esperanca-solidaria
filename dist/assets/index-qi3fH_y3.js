(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();const v=[{id:"educacao",status:"Em andamento",badgeClass:"badge-active",title:"Educação para Todos",description:"Apoio educacional para crianças e adolescentes em situação de vulnerabilidade, oferecendo oportunidades de aprendizado e desenvolvimento."},{id:"alimentos",status:"Campanha ativa",badgeClass:"badge-highlight",title:"Alimento Solidário",description:"Arrecadação e distribuição de alimentos para famílias que necessitam de apoio, contribuindo para a segurança alimentar da comunidade."},{id:"inclusao",status:"Inscrições abertas",badgeClass:"badge-info",title:"Inclusão Digital",description:"Acesso à tecnologia e conhecimentos básicos de informática para pessoas da comunidade, ampliando oportunidades de inclusão."}];function h(){return v.map(e=>`
        <article
          id="${e.id}"
          class="project-card"
        >
          <span class="badge ${e.badgeClass}">
            ${e.status}
          </span>

          <h2>${e.title}</h2>

          <p>
            ${e.description}
          </p>
        </article>
      `).join("")}const m={inicio:`
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
          srcset="/imagens/ong-voluntarios.webp"
          type="image/webp"
        >

        <img
          src="/imagens/ong-voluntarios.png"
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
  `,projetos:`
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
        ${h()}
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
  `,cadastro:`
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
  `,erro:`
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
  `},b={inicio:"ONG Esperança Solidária",projetos:"Projetos - ONG Esperança Solidária",cadastro:"Cadastro - ONG Esperança Solidária"};function y(){const e=window.location.hash.replace(/^#\/?/,"").trim();if(!e)return{page:"inicio",section:null};const a=e.split("/");return{page:a[0],section:a[1]||null}}function u(e){document.querySelectorAll(".main-nav [data-route]").forEach(t=>{t.removeAttribute("aria-current"),t.dataset.route===e&&t.setAttribute("aria-current","page")})}function E(e,a){const{page:t,section:s}=y(),o=m[t];if(!o){e.innerHTML=m.erro,document.title="Página não encontrada - ONG Esperança Solidária",u("");return}e.innerHTML=o,document.title=b[t]||"ONG Esperança Solidária",u(t),t==="cadastro"&&a(),s?requestAnimationFrame(()=>{const i=document.getElementById(s);i&&i.scrollIntoView({behavior:"smooth",block:"start"})}):window.scrollTo({top:0,behavior:"smooth"})}const S={nome:{validate:e=>e.trim().length>=3,message:"Informe um nome com pelo menos 3 caracteres."},email:{validate:e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),message:"Informe um e-mail válido."},nascimento:{validate:e=>e!=="",message:"Informe a data de nascimento."},cpf:{validate:e=>/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(e),message:"Use o formato 000.000.000-00."},telefone:{validate:e=>/^\(\d{2}\) \d{5}-\d{4}$/.test(e),message:"Use o formato (11) 91234-5678."},cep:{validate:e=>/^\d{5}-\d{3}$/.test(e),message:"Use o formato 00000-000."},endereco:{validate:e=>e.trim().length>=3,message:"Informe o endereço."},cidade:{validate:e=>e.trim().length>=2,message:"Informe a cidade."},estado:{validate:e=>/^[A-Za-z]{2}$/.test(e),message:"Informe a sigla do estado com 2 letras."}};function A(e){const a=`${e.id}-message`;let t=document.querySelector(`#${a}`);return t||(t=document.createElement("small"),t.id=a,e.insertAdjacentElement("afterend",t)),e.setAttribute("aria-describedby",a),t}function f(e){const a=S[e.name];if(!a)return!0;const t=e.value,s=A(e);return t.trim()===""?(e.classList.add("is-invalid"),e.classList.remove("is-valid"),e.setAttribute("aria-invalid","true"),s.textContent="Este campo é obrigatório.",s.className="field-message error-message",!1):a.validate(t)?(e.classList.add("is-valid"),e.classList.remove("is-invalid"),e.setAttribute("aria-invalid","false"),s.textContent="Campo preenchido corretamente.",s.className="field-message success-message",!0):(e.classList.add("is-invalid"),e.classList.remove("is-valid"),e.setAttribute("aria-invalid","true"),s.textContent=a.message,s.className="field-message error-message",!1)}function L(e){const a=e.querySelectorAll("input");let t=!0,s=null;return a.forEach(o=>{f(o)||(t=!1,s||(s=o))}),s&&s.focus(),t}const d="voluntarios";function l(){const e=localStorage.getItem(d);if(!e)return[];try{return JSON.parse(e)}catch(a){return console.error("Erro ao recuperar dados:",a),[]}}function N(e){const a=l();a.push(e),localStorage.setItem(d,JSON.stringify(a))}function q(e){const a=l();a.splice(e,1),localStorage.setItem(d,JSON.stringify(a))}const r=document.querySelector("#app"),C=document.querySelector("#menu-toggle"),O=document.querySelector(".main-nav"),p=document.querySelector("#contrast-toggle");function w(e){const a=new FormData(e);return{nome:a.get("nome"),email:a.get("email"),nascimento:dayjs(a.get("nascimento")).format("DD/MM/YYYY"),cpf:a.get("cpf"),telefone:a.get("telefone"),cep:a.get("cep"),endereco:a.get("endereco"),cidade:a.get("cidade"),estado:a.get("estado")}}function c(){const e=document.querySelector("#saved-volunteers");if(!e)return;const a=l();if(a.length===0){e.innerHTML="<p>Nenhum cadastro salvo.</p>";return}e.innerHTML=a.map((t,s)=>`
          <article class="saved-volunteer">
            <h3>
              ${t.nome}
            </h3>

            <p>
              <strong>E-mail:</strong>
              ${t.email}
            </p>

            <p>
              <strong>
                Data de nascimento:
              </strong>
              ${t.nascimento}
            </p>

            <p>
              <strong>Telefone:</strong>
              ${t.telefone}
            </p>

            <p>
              <strong>Cidade:</strong>
              ${t.cidade} -
              ${t.estado}
            </p>

            <button
              type="button"
              class="delete-button"
              data-index="${s}"
            >
              Excluir cadastro
            </button>
          </article>
        `).join("")}function g(){E(r,c)}window.addEventListener("hashchange",g);O.addEventListener("click",e=>{e.target.closest("a")&&(C.checked=!1)});p.addEventListener("click",()=>{document.body.classList.toggle("high-contrast");const e=document.body.classList.contains("high-contrast");p.setAttribute("aria-pressed",String(e))});r.addEventListener("input",e=>{const a=e.target;a.matches("#volunteer-form input")&&f(a)});r.addEventListener("submit",e=>{if(!e.target.matches("#volunteer-form"))return;e.preventDefault();const a=e.target;if(!L(a))return;const t=w(a);N(t),c();const s=document.querySelector("#success-modal");s&&s.showModal(),a.reset(),a.querySelectorAll("input").forEach(o=>{o.classList.remove("is-valid","is-invalid"),o.removeAttribute("aria-invalid"),o.removeAttribute("aria-describedby")}),a.querySelectorAll(".field-message").forEach(o=>{o.remove()})});r.addEventListener("click",e=>{if(e.target.id==="close-modal"){const s=document.querySelector("#success-modal");s&&s.close();return}const a=e.target.closest(".delete-button");if(!a)return;const t=Number(a.dataset.index);q(t),c()});document.addEventListener("DOMContentLoaded",()=>{if(!window.location.hash){window.location.hash="#/inicio";return}g()});
