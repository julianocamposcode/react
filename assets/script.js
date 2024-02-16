
ScrollReveal({
	origin:'left',
	distance:'33px',
	duration: 2500,
}).reveal('.inicio, .icon ,.animation1, .animation3, .curso1, .curso3, .curso5, .sports, .setup');


ScrollReveal({
	origin:'right',
	distance:'33px',
	duration: 2500,
}).reveal('.animation2, .curso2, .curso4, .curso6, .copa');

ScrollReveal({
	origin:'top',
	distance:'33px',
	duration: 2500,
}).reveal('.img_logo, .center');


const linkCurso = document.querySelectorAll('.link_curso')

linkCurso.forEach( curso => {
	curso.onclick = () => {
		localStorage.progressValue = 0;
		
	}
})

