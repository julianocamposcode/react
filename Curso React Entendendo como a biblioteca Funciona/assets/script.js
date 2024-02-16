const body = document.querySelector('body');
const header = document.querySelector('header');
const main = document.querySelector('main');
const setaLeft = document.querySelector('#img_burgue');
const setaRight = document.querySelector('.toggle');
const mostrar = document.querySelector('.mostrar');
const texto = document.querySelector('.transcricao');
const escondido = document.getElementById('hidden');
const primeiro = document.querySelector('#primeiro')
const box = document.getElementById('segundo');
const li = document.querySelectorAll('li')
const section = document.querySelectorAll('section')
const h = document.querySelectorAll('h1');

setaRight.onclick = () => {

	let classes = {
		header: "mudaNav",
		main: "adjust"
	}

	localStorage.setItem('header', JSON.stringify(classes.header))

	localStorage.setItem('main', JSON.stringify(classes.main));
	let estilo1 = JSON.parse(localStorage.getItem('header'));

	let estilo2 = JSON.parse(localStorage.getItem('main'));

	header.classList.toggle(estilo1);
	main.classList.toggle(estilo2);
	setaRight.classList.toggle('block')
}

setaLeft.onclick = () => {

	let classes = {
		header: "mudaNav",
		main: "adjust"
	}

	header.classList.remove(classes.header);
	main.classList.remove(classes.main)
	setaRight.classList.add('block')

	classes.header = ""
	classes.main = ""

	localStorage.setItem('header', JSON.stringify(classes.header));
}

$(document).on("change", "#select", function (e) {
	if ($(this).val() == "1") {
		location.href = "../index.html"
	}
	else if ($(this).val() == "2") {
		location.href = "../componentizando o sistema/projeto.html"
	}

	else if ($(this).val() == "3") {
		location.href = "../estilizando/index.html"
	}

	else if ($(this).val() == "4") {
		location.href = "../eventos e propriedades/index.html"
	}

	else if ($(this).val() == "5") {
		location.href = "../estado e reinderizacao/projeto_final.html"
		localStorage.progressValue = 75
	}
});


const mode = document.querySelector('.checkbox')

function elements() {
	texto.classList.toggle('noturn');
	body.classList.toggle('noturn');
}


mode.addEventListener('change', function () {
	if (mode.checked == true) {
		localStorage.estilo = "2";
		elements();

		let noturno = document.querySelectorAll('.box')

		noturno.forEach(p => {
			let txt = p.querySelector('p')
			txt.textContent = 'Modo Claro'
		})
	}
	else {
		localStorage.estilo = "1";
		elements();

		let noturno = document.querySelectorAll('.box')

		noturno.forEach(p => {
			let txt = p.querySelector('p')
			txt.textContent = 'Modo Noturno'
		})

	}
});



window.onload = () => {


	if (localStorage.estilo == "2") {
		elements();
		mode.checked = () => { }
	}

	let estilo1 = JSON.parse(localStorage.getItem('header'));

	let estilo2 = JSON.parse(localStorage.getItem('main'));

	header.classList.toggle(estilo1);
	main.classList.toggle(estilo2);
}


mostrar.onclick = () => {
	escondido.classList.remove('none');
	mostrar.classList.add('hidden');
}
//media query

if (window.matchMedia("(min-width: 600px)").matches) {
	primeiro.addEventListener('change', function () {
		if (primeiro.checked == true) {
			localStorage.chek = "2";
		}
		else {
			localStorage.chek = "1";
			header.classList.add('mudaNav')
			box.checked = false;
		}
	});

	box.addEventListener('change', function () {
		if (box.checked == true) {
			localStorage.chek = '2'
			header.classList.remove('mudaNav')
			primeiro.checked = () => { }
		}

	});

	let hr = document.createElement('hr');
	hr.id = 'hr';


	for (let i of li) {
		const ativo = i.style.background == 'rgb(40, 44, 47)';

		i.style.height = '60px'
		hr.style.width = '60px'

		if (ativo == true) {
			i.appendChild(hr);
			// salvaLocal(i)
		}
	}

	if (localStorage.estilo == "2") {
		let noturno = document.querySelectorAll('.box')

		noturno.forEach(p => {
			let txt = p.querySelector('p')
			txt.textContent = 'Modo Claro'
		})
	}

} else {

	box.addEventListener('change', function () {
		if (box.checked == true) {
			localStorage.chek = '2'
			header.classList.remove('mudaNav')
			main.classList.add('filter')
			main.classList.add('disable')
			primeiro.checked = () => { }
		}

	});

	function fog() {
		main.classList.add('filter');
		main.classList.add('disable')
	}

	primeiro.addEventListener('change', function () {
		if (primeiro.checked == true) {
			localStorage.chek = "2";
			fog()
		}
		else {
			localStorage.chek = "1";
			main.classList.remove('filter')
			main.classList.remove('disable')

			header.classList.add('mudaNav')
			box.checked = false;
		}
	});


	window.onload = () => {



		if (primeiro.checked == true) {
			fog()
			main.classList.add('disable')
		}

		if (localStorage.chek == '1') {
			header.classList.add('mudaNav')
			main.classList.remove('filter')
			main.classList.remove('disable')
		} else {
			main.classList.remove('adjust')
		}


		if (localStorage.estilo == "2") {
			elements();
			mode.checked = () => { }

			let noturno = document.querySelectorAll('.box')

			noturno.forEach(p => {
				let txt = p.querySelector('p')
				txt.textContent = 'Modo Claro'
			})
		}
	}

	let estilo2 = JSON.parse(localStorage.getItem('main'));

	main.classList.toggle(estilo2);


	for (let i of li) {
		let hr = document.createElement('hr');
		hr.id = 'hr';

		const ativo = i.style.background == 'rgb(40, 44, 47)';

		i.style.height = '85px'
		hr.style.width = '85px'

		if (ativo == true) {
			i.appendChild(hr);
			// salvaLocal(i)
		}
	}

}



body.setAttribute('onscroll', 'scroll()')

for (let i of section) {

	if (i.id == 'hidden') {

		const a = document.createElement('a');
		const seta = document.createElement('img');

		a.innerText = 'Voltar para o topo';
		a.href = '#topo'
		a.classList.add('a_seta');
		seta.src = "https://cdn-icons-png.flaticon.com/128/2791/2791552.png"
		seta.classList.add('seta_top')

		a.appendChild(seta);
		function scroll() {
			if (scrollY >= 700) {
				i.appendChild(a);
				a.classList.remove('hidden')
			}

			if (scrollY <= 10) {
				a.classList.add('hidden')
			}
		}
	}

	for (let i of h) {
		i.id = 'topo';
	}
}






const progress = document.createElement('progress');
const aside = document.createElement('aside');
const div = document.querySelectorAll('div');
const a = document.querySelectorAll('a');

progress.max = '100';
progress.value = '0';

aside.classList.add('style_aside');

if (localStorage.progressValue === undefined) {
	localStorage.progressValue = 0;
	progress.value = '0';
}

const valores = Object.values(localStorage)
const chaves = Object.keys(localStorage)



for (let i of li) {
	const ativo = i.style.background == 'rgb(40, 44, 47)';

	if (ativo) {
		const conteudo = i.children[1].children[0].textContent;
		conteudo.includes('Conclusão') ? localStorage.progressValue = 100 : '';

		if (localStorage.progressValue == 100) {

			let buton = document.createElement('buton')
			let ul = document.querySelector('ul')
			buton.classList = 'concluir'
			buton.textContent = 'Concluir Curso'
			buton.id = 'concluido'
			ul.appendChild(buton)

			let butonN = document.querySelector('.concluir')
			butonN.onclick = () => {
				localStorage.clear()
				alert('Curso Concluído')
				window.location.href = '../../index.html'
			}
		}


		if (!Object.keys(localStorage).includes(conteudo)) {
			// não fiz
			localStorage.setItem(conteudo, 0);

			for (let i of a) {
				if (Object.keys(localStorage).includes(i.textContent) && i.nextElementSibling != null) {
					i.nextElementSibling.classList.add('borda')
				}
			}

		} else {
			for (let i of a) {
				if (i.classList.length === 0 && i.textContent.trim() === '') {
					i.children[0].style = 'border: 1px solid #31c5d9;border-radius: 120px 121px 123px 132px';
				}
				if (Object.keys(localStorage).includes(i.textContent) && i.nextElementSibling != null) {
					//quando eu já fiz
					i.nextElementSibling.classList.add('borda')
				}
			}
		}
	}
}
a.forEach(el => {
	let valorClasse = el.classList.value;
	if (valorClasse == 'modules' || valorClasse == 'home' || valorClasse == '') {

		el.addEventListener('click', () => {
			if (valorClasse == '') {
				if (el.href.endsWith('#')) {
					el.href = '#concluido'
					console.log(el.href)
				}
				if (el.children[0].style.border == '1px solid rgb(49, 197, 217)') {
				} else {
					progress.value += 5;
					localStorage.progressValue = progress.value;
				}
			}
			const conteudo = el.textContent.trim();

			if (!Object.keys(localStorage).includes(conteudo)) {
				localStorage.setItem(conteudo, 0);
				progress.value += 5;
				localStorage.progressValue = progress.value;
				aside.innerHTML = progress.value + '%';
			}
		});
	}
});


progress.value = localStorage.progressValue;
aside.innerHTML = progress.value + '%';

div.forEach(el => {
	if (el.classList.value == '') {
		el.appendChild(progress);
		el.appendChild(aside);
	}
});
