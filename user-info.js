// cria classe usuário
class Usuario {
    // cria método para buscar as informações do usuário no json
    buscaUsuario() {
      // retorna o fetch com a promise, e sem tratamento dos resultados
      return fetch("./usuario.json")
      
    } 
    constructor() {
        this.divUsuario = document.querySelector("#div-usuario")
        this.divNumeros = document.querySelector("#numeros-do-usuario")
    }

    // monta o HTML com os dados do JSON
    mostraUsuario(dados) {
        // cria uma variavel que ira armazenar as duas divs de HTML
        let infoUsuario = ''
        let infoNumeros = ''

        //Não é do Json. Variável criada apenas para usar o localStorage no exercício
        let nomeDoUsusario = '' 
        
        // Salva o nome do usuário do JSON para o locaStorage com a chave dados-usuario
        localStorage.setItem("dados-usuario",dados[0].nome)

        nomeDoUsusario = localStorage.getItem("dados-usuario",dados[0].nome)

        infoUsuario += `
            <h3 class="profile-fullname" id="profile-name"><a>${nomeDoUsusario}<a></h3>
            <h2 class="profile-element" id="username"><a>@${dados[0].usuario}</a></h2>
            <a class="profile-element profile-website" hrerf=""><i class="octicon octicon-link"></i>&nbsp;${dados[0].website}</a>
            <a class="profile-element profile-website" hrerf=""><i class="octicon octicon-location"></i>&nbsp;${dados[0].local}</a>
            <h2 class="profile-element"><i class="octicon octicon-calendar"></i>Joined ${dados[0].cadastro}</h2>
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
                <span class="profile-stats-item profile-stats-item-label">Seguindo</span>
                <span class="profile-stats-item profile-stats-item-number">${dados[0].seguindo}</span>
                </a>
            </li>
            <li>
                <a>
                <span class="profile-stats-item profile-stats-item-label">Seguidores</span>
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