	$(document).on("change", "#select", function(e){
		if($(this).val() == "1"){
			location.href = "../introducao.html"
		}

		else if($(this).val() == "2"){
			location.href = "../material UI/projeto.html"
		}

		else if($(this).val() == "3"){
			location.href = "../forms e hooks/formularios.html"
		}

		else if($(this).val() == "4"){
			location.href = "../regras hooks/regra_hook.html"
		}

		else if($(this).val() == "5"){
			location.href = "../tratamento/exibindo_erros.html"
		}
	});
