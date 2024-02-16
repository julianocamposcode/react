const body = document.querySelector("body");
const header = document.querySelector("header");
const main = document.querySelector("main");
const setaLeft = document.querySelector("#img_burgue");
const setaRight = document.querySelector(".toggle");
const texto = document.querySelector(".transcricao");
const escondido = document.getElementById("hidden");
const primeiro = document.querySelector("#primeiro");
const box = document.getElementById("segundo");
const ancora = document.querySelectorAll(".ancoras");
const li = document.querySelectorAll("li");
const ignite = document.querySelectorAll(".ignite");

setaRight.onclick = () => {
  let classes = {
    header: "mudaNav",
    main: "adjust",
  };

  localStorage.setItem("header", JSON.stringify(classes.header));

  localStorage.setItem("main", JSON.stringify(classes.main));

  let estilo1 = JSON.parse(localStorage.getItem("header"));

  let estilo2 = JSON.parse(localStorage.getItem("main"));

  header.classList.toggle(estilo1);
  main.classList.toggle(estilo2);
  setaRight.classList.toggle("block");
};

setaLeft.onclick = () => {
  let classes = {
    header: "mudaNav",
    main: "adjust",
  };

  header.classList.remove(classes.header);
  main.classList.remove(classes.main);
  setaRight.classList.add("block");

  classes.header = "";
  classes.main = "";

  localStorage.setItem("header", JSON.stringify(classes.header));
};

$(document).on("change", "#select", function (e) {
  if ($(this).val() == "1") {
    location.href = "../index.html";
  } else if ($(this).val() == "2") {
    location.href = "../componentizando o sistema/projeto.html";
  } else if ($(this).val() == "3") {
    location.href = "../estilizando/index.html";
  } else if ($(this).val() == "4") {
    location.href = "../eventos e propriedades/index.html";
  } else if ($(this).val() == "5") {
    location.href = "../estado e reinderizacao/projeto_final.html";
  }
});

const mode = document.querySelector(".checkbox");

function elements() {
  texto.classList.toggle("noturn");
  body.classList.toggle("noturn");
}

mode.addEventListener("change", function () {
  if (mode.checked == true) {
    localStorage.estilo = "2";
    elements();

    let noturno = document.querySelectorAll(".box");

    noturno.forEach((p) => {
      let txt = p.querySelector("p");
      txt.textContent = "Modo Claro";
    });
  } else {
    localStorage.estilo = "1";
    elements();

    let noturno = document.querySelectorAll(".box");

    noturno.forEach((p) => {
      let txt = p.querySelector("p");
      txt.textContent = "Modo Noturno";
    });
  }
});

window.onload = () => {
  if (localStorage.estilo == "2") {
    elements();
    mode.checked = () => {};

    let noturno = document.querySelectorAll(".box");

    noturno.forEach((p) => {
      let txt = p.querySelector("p");
      txt.textContent = "Modo Claro";
    });
  }

  let estilo1 = JSON.parse(localStorage.getItem("header"));

  let estilo2 = JSON.parse(localStorage.getItem("main"));

  header.classList.toggle(estilo1);
  main.classList.toggle(estilo2);
};

//media query

if (window.matchMedia("(min-width: 600px)").matches) {
  primeiro.addEventListener("change", function () {
    if (primeiro.checked == true) {
      localStorage.chek = "2";
    } else {
      localStorage.chek = "1";
      header.classList.add("mudaNav");
      box.checked = false;
    }
  });

  box.addEventListener("change", function () {
    if (box.checked == true) {
      localStorage.chek = "2";
      header.classList.remove("mudaNav");
      primeiro.checked = () => {};
    }
  });

  let hr = document.createElement("hr");
  hr.id = "hr";

  for (let i of li) {
    const ativo = i.style.background == "rgb(40, 44, 47)";

    i.style.height = "60px";
    hr.style.width = "60px";

    if (ativo == true) {
      i.appendChild(hr);
    }
  }
} else {
  box.addEventListener("change", function () {
    if (box.checked == true) {
      localStorage.chek = "2";
      header.classList.remove("mudaNav");
      main.classList.add("filter");
      main.classList.add("disable");
      primeiro.checked = () => {};
    }
  });

  function fog() {
    main.classList.add("filter");
    main.classList.add("disable");
  }

  primeiro.addEventListener("change", function () {
    if (primeiro.checked == true) {
      localStorage.chek = "2";
      fog();
    } else {
      localStorage.chek = "1";
      main.classList.remove("filter");
      main.classList.remove("disable");

      header.classList.add("mudaNav");
      box.checked = false;
    }
  });

  window.onload = () => {
    if (primeiro.checked == true) {
      fog();
      main.classList.add("disable");
    }

    if (localStorage.chek == "1") {
      header.classList.add("mudaNav");
      main.classList.remove("filter");
      main.classList.remove("disable");
    } else {
      main.classList.remove("adjust");
    }

    if (localStorage.estilo == "2") {
      elements();
      mode.checked = () => {};

      let noturno = document.querySelectorAll(".box");

      noturno.forEach((p) => {
        let txt = p.querySelector("p");
        txt.textContent = "Modo Claro";
      });
    }
  };

  let estilo2 = JSON.parse(localStorage.getItem("main"));

  main.classList.toggle(estilo2);

  let hr = document.createElement("hr");
  hr.id = "hr";

  for (let i of li) {
    const ativo = i.style.background == "rgb(40, 44, 47)";

    i.style.height = "85px";
    hr.style.width = "85px";

    if (ativo == true) {
      i.appendChild(hr);
    }
  }
}

ignite.forEach((el) => {
  let pai = el.parentElement;
  pai.classList.add("hover");

  function mudaUrl(elemento, url) {
    elemento.getAttributeNode("href").value = url;
  }

  if (el.textContent == "Ignite") {
    mudaUrl(pai, "../ignite/iniciando.html");
  } else {
    mudaUrl(pai, "../explorer/primeiro_passo.html");
  }
});

li.forEach((element) => {
  if (element.style.background == "rgb(40, 44, 47)") {
    let filhoSpan = element.querySelector(".fileira").querySelector("span");
    filhoSpan.classList.add("borda");
  }
});
