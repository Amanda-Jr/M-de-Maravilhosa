const formulario = document.querySelector('.form__exemplo')
const divTexto = document.querySelector('.texto__exibido')

formulario.addEventListener('submit', function(evento) {
// submit - tipo do evento (1 parâmetro)
    evento.preventDefault()

    const input = document.getElementById("textoInput")
    const valorInput = input.value

    const inputNome = document.getElementById("nomeInput")
    const valorInputNome = inputNome.value

    if (valorInput === "" || valorInputNome === "") {
        alert ("Por favor, digite uma mensagem e seu nome")
    } else {
        let novaLinha = document.createElement('div')
        divTexto.appendChild(novaLinha)
        // divTexto adota a div novaLinha onde vão aparecer os recados
        novaLinha.classList.add('nova__linha')


        const novoTexto = document.createElement('p')
        novaLinha.appendChild(novoTexto)
        novoTexto.textContent = valorInput
        novoTexto.classList.add('novo__texto')


        const novoNome = document.createElement('p')
        novaLinha.appendChild(novoNome)
        novoNome.textContent = valorInputNome
        novoNome.classList.add("novo__nome")

        
        formulario.reset()
    }
    

    

})


