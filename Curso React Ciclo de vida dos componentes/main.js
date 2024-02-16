$(document).on("change", "#select", function(e){
	if($(this).val() == "1"){
		location.href = "../introducao.html"
	}

	else if($(this).val() == "2"){
		location.href = "../lista de categorias/criando_lista_categoria.html"
	}

	else if($(this).val() == "3"){
		location.href = "../seguindo padroes/seguindo.html"
	}

	else if($(this).val() == "4"){
		location.href = "../observable/criando_fonte.html"
	}

	else if($(this).val() == "5"){
		location.href = "../ciclo de vida dos objetos/ciclo_de_vida.html"
	}
});
