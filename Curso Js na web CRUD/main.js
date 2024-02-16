const pai = document.querySelector('main')
const position =  document.createElement('section')
const p = document.createElement('p')
const sync = document.createElement('p')
const segundoTexto = document.querySelector('.texto2')

p.innerText = 'npx json-server --watch db.json'
sync.innerText = 'browser-sync start --server --file . --host --port 5000 --startPath admin/telas/lista_cliente.html'

const classe = (element) => {
    element.classList.add('p_comand')
}

classe(position)

if(segundoTexto == null) {
    position.classList.add('none')
}


position.appendChild(p)
position.appendChild(sync)

pai.appendChild(position)

$(document).on("change", "#select", function(e){
    if($(this).val() == "1"){
        location.href = "../apresentacao.html"
    }

    else if($(this).val() == "2"){
        location.href = "../fetch API/reescrevendo_fetch.html"
    }

    else if($(this).val() == "3"){
        location.href = "../criar e remover/criando_cliente.html"
    }

    else if($(this).val() == "4"){
        location.href = "../editar dados/conexao_editar.html"
    }

    else if($(this).val() == "5"){
        location.href = "../async await/async_await.html"
    }
});

