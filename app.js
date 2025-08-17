
//Tema claro e escuro
const toggleButton = document.getElementById("toggle-theme");
const temaSalvo = localStorage.getItem("tema");
if (temaSalvo === "claro") {
    document.body.classList.add("light-theme");
    toggleButton.textContent = "🌞";
} else {
    toggleButton.textContent = "🌙";
}

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    const estaClaro = document.body.classList.contains("light-theme");
    toggleButton.textContent = estaClaro ? "🌞" : "🌙";

    localStorage.setItem("tema", estaClaro ? "claro" : "escuro");
});

//overlay no background
document.addEventListener("mousemove", function(e) {
    document.body.style.setProperty('--mouse-x', e.clientX + 'px');
    document.body.style.setProperty('--mouse-y', e.clientY + 'px');
});


//efeito digitação
var texto = "Hello world!";
var textoElement = document.querySelector(".apresentacao__conteudo__titulo");
var atraso = 200;

var contadorDeLetras = 0;
function escreverTexto () {
    if (contadorDeLetras < texto.length) {
        textoElement.textContent += texto.charAt(contadorDeLetras);
        contadorDeLetras++;
        setTimeout(escreverTexto, atraso);
    }
}

escreverTexto()

//seção habilidades
document.querySelectorAll(".habilidade__card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.borderColor = "#ff8819d2"; // laranja
    });
    card.addEventListener("mouseleave", () => {
        card.style.borderColor = "var(--cor--borda)";
    });
});

//menu mobile

const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".topo__menu");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});


navbar.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});

async function carregarPersonagensMarvel() {
  try {
    const res = await fetch("/api/marvel");
    const data = await res.json();

    const container = document.getElementById("marvel-list");
    container.innerHTML = "";

    data.data.results.forEach(p => {
      const img = `${p.thumbnail.path}/portrait_xlarge.${p.thumbnail.extension}`;
      const link = p.urls[0]?.url || "https://marvel.com";

      const card = document.createElement("div");
      card.classList.add("habilidade__card");
      card.innerHTML = `
        <img src="${img}" alt="${p.name}">
        <h3>${p.name}</h3>
        <a href="${link}" target="_blank">Ver mais</a>
      `;
      container.appendChild(card);
    });
  } catch (err) {
    console.error("Erro ao carregar personagens:", err);
  }
}

carregarPersonagensMarvel();
