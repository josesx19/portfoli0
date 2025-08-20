
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

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");


// seção contato
if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_s7wf4el", "template_7ea0srb", this)
      .then(() => {
        status.textContent = "✅ Mensagem enviada com sucesso!";
        status.style.color = "lightgreen";
        form.reset();
      }, (err) => {
        status.textContent = "❌ Erro ao enviar. Tente novamente.";
        status.style.color = "red";
        console.error(err);
      });
  });
}