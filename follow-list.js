class ParaSeguir {
    
    constructor () {
        this.divListaParaSeguir = document.querySelector("#lista-para-seguir")
    }

    buscaParaSeguir(){
        return fetch("./follow.json")
        
    }

    mostraListaParaSeguir(dados) {
        let listaParaSeguir = ''

        dados.map(function(elemento){
            
            listaParaSeguir += `
                <li class="tweet-card">
                  <div class="tweet-content">
                  <a href="https://twitter.com/${elemento.usuario}" target="_blank">
                  <img class="tweet-card-avatar" src=${elemento.photo} alt="">
                    <div class="tweet-header">
                      <span class="fullname">
                        <strong>${elemento.nome}</a></strong>
                      </span><br>
                      <span class="username">${elemento.usuario}</span>
                    </div>
                    <button class="btn btn-follow">Follow</button>
                  </div>
                </li>
            `
        });

        this.divListaParaSeguir.innerHTML = listaParaSeguir
    }
    
}