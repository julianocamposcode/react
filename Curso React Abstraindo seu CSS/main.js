    $(document).on("change", "#select", function(e){
    	if($(this).val() == "1"){
    		location.href = "../apresentacao.html"
    	}

    	else if($(this).val() == "2"){
    		location.href = "../topicos basicos/global_style.html"
    	}

    	else if($(this).val() == "3"){
    		location.href = "../refatoracoes/refatoracao.html"
    	}

    	else if($(this).val() == "4"){
    		location.href = "../novo item/extrato.html"
    	}

    	else if($(this).val() == "5"){
    		location.href = "../tema/temas.html"
    	}
    });
