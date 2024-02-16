    $(document).on("change", "#select", function(e){
        if($(this).val() == "1"){
            location.href = "../apresentacao.html"
        }

        else if($(this).val() == "2"){
            location.href = "../criando componentes/erro.html"
        }

        else if($(this).val() == "3"){
            location.href = "../conectando com API/componente_link.html"
        }

        else if($(this).val() == "4"){
            location.href = "../exibindo post e categoria/post_inexistente.html"
        }

        else if($(this).val() == "5"){
            location.href = "../rotas aninhadas/exibindo_categoria.html"
        }
    });
