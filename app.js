// instancio a classe de usuario e crio o objeto de usuario
const objetoUsuario = new Usuario()
const objetoTweets = new Tweets()
const objetoParaSeguir = new ParaSeguir()

// uso meu objetoUsuario e chamo o método buscausuarios que 
// existe dentro de usuarios para dar o fetch
objetoUsuario.buscaUsuario()
    // fetch realizado, uso o then para pegar a resposta 
    .then(function (resposta) {
        // converto a resposta em json
        resposta.json()
            // pego os dados convertidos em json  
            .then(function (dados) {
                // envio para o método mostraUsuario
                objetoUsuario.mostraUsuario(dados)
            })
    })

objetoParaSeguir.buscaParaSeguir()
    .then(function (resposta) {
        resposta.json()
            .then(function (dados) {
                objetoParaSeguir.mostraListaParaSeguir(dados.followers)
            })
    })

objetoTweets.buscaTweets()
    .then(function (resposta) {
        resposta.json()
            .then(function (dados) {
                objetoTweets.mostraTweets(dados.tweets)
            })
    })

