class Tweets {
    constructor() {
        this.divTweets = document.querySelector("#lista-de-tweets")
    }

    buscaTweets() {
        return fetch("./tweets.json")
    }

    mostraTweets(dados) {
        let tweetsHTML = ''

        dados.map(function (elemento) {

            tweetsHTML += `
            
            <li class="tweet-card">
                <div class="tweet-content">
                <div class="tweet-header">
                    <span class="fullname">
                    <a href="https://twitter.com/${elemento.usuario}" target="_blank">
                    <strong>${elemento.nome}</strong></a>
                    </span>
                    <span class="username">${elemento.usuario}</span>
                    <span class="tweet-time">- ${elemento.data}</span>
                </div>
                <a>
                    <img class="tweet-card-avatar" src=${elemento.photo} alt="">
                </a>
                <div class="tweet-text">
                    <p class="" lang="es" data-aria-label-part="0">${elemento.mensagem}</p>
                </div>
                <div class="tweet-footer">
                    <a class="tweet-footer-btn">
                    <i class="octicon octicon-comment" aria-hidden="true"></i><span>${elemento.comentarios}</span>
                    </a>
                    <a class="tweet-footer-btn">
                    <i class="octicon octicon-sync" aria-hidden="true"></i><span>${elemento.compartilhamentos}</span>
                    </a>
                    <a class="tweet-footer-btn">
                    <i class="octicon octicon-heart" onClick={somalike()} aria-hidden="true"></i><span>${elemento.likes}</span>
                    </a>
                </div>
                </div>
                </li>
            `
        }
        )
        this.divTweets.innerHTML = tweetsHTML
    }
}
