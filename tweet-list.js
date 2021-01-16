class Tweets {
    buscaTweets(){
        return fetch("./tweets.json")
    }

    constructor (){
        this.divTweets = document.querySelector("#lista-de-tweets")
    }

    mostraTweets(dados){
        let tweetsHTML = ''

        dados.map(function(elemento){
           
            
            /* Fetch para exibir fotos aleatórias nos avares de usuario
            let foto = ''

            fetch("https://dog.ceo/api/breeds/image/random")
                .then(function (resposta){
                    resposta.json()
                    .then(function(dados){
                        //console.log(dados.message)
                        foto = dados.message
                    })
                })
            
            console.log(foto)*/
            
            tweetsHTML += `
            
            <li class="tweet-card">
                <div class="tweet-content">
                <div class="tweet-header">
                    <span class="fullname">
                    <strong>${elemento.nome}</strong>
                    </span>
                    <span class="username">${elemento.usuario}</span>
                    <span class="tweet-time">- ${elemento.data}</span>
                </div>
                <a>
                    <img class="tweet-card-avatar" src="https://randomuser.me/api/portraits/women/${(elemento.nome+elemento.usuario).length}.jpg" alt="">
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
                    <i class="octicon octicon-heart" aria-hidden="true"></i><span>${elemento.likes}</span>
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



/*




*/