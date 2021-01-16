class ParaSeguir {
    buscaParaSeguir(){
        return fetch("./follow.json")
        
    }

    constructor () {
        this.divListaParaSeguir = document.querySelector("#lista-para-seguir")
    }
    
    mostraListaParaSeguir(dados) {
        let listaParaSeguir = ''

        dados.map(function(elemento){
            
            listaParaSeguir += `
                <li class="tweet-card">
                  <div class="tweet-content">
                    <img class="tweet-card-avatar" src="https://randomuser.me/api/portraits/men/${(elemento.nome+elemento.usuario).length}.jpg" alt="">
                    <div class="tweet-header">
                      <span class="fullname">
                        <strong>${elemento.nome}</strong>
                      </span>
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