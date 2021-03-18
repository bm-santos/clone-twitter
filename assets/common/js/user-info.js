class Usuario {
    constructor() {
        this.divUsuario = document.querySelector("#div-usuario")
        this.divNumeros = document.querySelector("#numeros-do-usuario")
    }

    buscaUsuario() {
        return fetch("./assets/common/api/usuario.json")
    }

    mostraUsuario(dados) {
        let infoUsuario = ''
        let infoNumeros = ''
        let nomeDoUsusario = ''


        localStorage.setItem("dados-usuario", dados[0].nome)

        nomeDoUsusario = localStorage.getItem("dados-usuario", dados[0].nome)

        document.title = `Twitter - ${nomeDoUsusario} (@${dados[0].usuario})`

        infoUsuario += `
            <h3 class="profile-fullname" id="profile-name"><a>${nomeDoUsusario}<a></h3>
            <h2 class="profile-element" id="username"><a>@${dados[0].usuario}</a></h2>
            <a class="profile-element profile-website" href="https://${dados[0].website}" target="_blank"><i class="octicon octicon-link"></i>&nbsp;${dados[0].website}</a>
            <a class="profile-element profile-website" href="https://www.google.com/maps/search/${dados[0].local}" target="_blank"><i class="octicon octicon-location"></i>&nbsp;${dados[0].local}</a>
            <h2 class="profile-element"><i class="octicon octicon-calendar"></i> Joined in ${dados[0].cadastro}</h2>
            <button class="btn btn-search-bar tweet-to-btn">Tweet to ${dados[0].nome}</button>
        `
        this.divUsuario.innerHTML = infoUsuario

        infoNumeros += `
            <li class="profile-stats-item-active">
                <a>
                <span class="profile-stats-item profile-stats-item-label">Tweets</span>
                <span class="profile-stats-item profile-stats-item-number">${dados[0].quantidade_tweets}</span>
                </a>
            </li>
            <li>
                <a>
                <span class="profile-stats-item profile-stats-item-label">Following</span>
                <span class="profile-stats-item profile-stats-item-number">${dados[0].seguindo}</span>
                </a>
            </li>
            <li>
                <a>
                <span class="profile-stats-item profile-stats-item-label">Followers</span>
                <span class="profile-stats-item profile-stats-item-number">${dados[0].seguidores}</span>
                </a>
            </li>
            <li>
            <a>
                <span class="profile-stats-item profile-stats-item-label">Likes</span>
                <span class="profile-stats-item profile-stats-item-number">${dados[0].likes}</span>
                </a>
            </li>
        `
        this.divNumeros.innerHTML = infoNumeros
    }
}