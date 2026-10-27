// Interações da landing page Aurora Studio
"use strict";

const botaoSaibaMais = document.querySelector("#btn-saiba-mais");
const mensagemCta = document.querySelector("#msg-cta");
const secaoServicos = document.querySelector("#servicos");

botaoSaibaMais.addEventListener("click", () => {
    mensagemCta.textContent = "Obrigado pelo interesse! Veja abaixo como posso ajudar seu projeto.";
    mensagemCta.hidden = false;
    secaoServicos.scrollIntoView({ behavior: "smooth", block: "start" });
});

// Consulta de endereço usando a API pública ViaCEP.
const campoCep = document.querySelector("#cep");
const statusCep = document.querySelector("#status-cep");
const campoRua = document.querySelector("#rua");
const campoBairro = document.querySelector("#bairro");
const campoCidade = document.querySelector("#cidade");
const campoUf = document.querySelector("#uf");
let consultaCepAtual = 0;

function limparEndereco() {
    campoRua.value = "";
    campoBairro.value = "";
    campoCidade.value = "";
    campoUf.value = "";
}

campoCep.addEventListener("input", () => {
    const numeros = campoCep.value.replace(/\D/g, "").slice(0, 8);
    campoCep.value = numeros.length > 5
        ? `${numeros.slice(0, 5)}-${numeros.slice(5)}`
        : numeros;
});

campoCep.addEventListener("blur", async () => {
    const cep = campoCep.value.replace(/\D/g, "");
    const idConsulta = ++consultaCepAtual;

    if (!cep) {
        limparEndereco();
        statusCep.textContent = "";
        return;
    }

    if (cep.length !== 8) {
        limparEndereco();
        statusCep.textContent = "Digite um CEP válido com 8 números.";
        return;
    }

    statusCep.textContent = "Consultando CEP...";
    limparEndereco();

    try {
        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        if (!resposta.ok) throw new Error("Falha na consulta");

        const dados = await resposta.json();
        if (idConsulta !== consultaCepAtual) return;

        if (dados.erro) {
            statusCep.textContent = "CEP não encontrado. Confira os números e tente novamente.";
            return;
        }

        campoRua.value = dados.logradouro || "";
        campoBairro.value = dados.bairro || "";
        campoCidade.value = dados.localidade || "";
        campoUf.value = dados.uf || "";
        statusCep.textContent = "Endereço preenchido automaticamente.";
    } catch (erro) {
        if (idConsulta !== consultaCepAtual) return;
        statusCep.textContent = "Não foi possível consultar o CEP. Verifique sua conexão e tente novamente.";
    }
});

// Formulário demonstrativo: valida os campos e mostra confirmação.
// Ele não envia os dados para um servidor ou e-mail.
const formulario = document.querySelector("#form-contato");
const mensagemForm = document.querySelector("#msg-form");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    mensagemForm.classList.remove("erro");

    const nome = document.querySelector("#nome").value.trim();
    const email = document.querySelector("#email").value.trim();
    const mensagem = document.querySelector("#mensagem").value.trim();

    if (!nome || !email || !mensagem) {
        mensagemForm.textContent = "Preencha seu nome, e-mail e mensagem antes de enviar.";
        mensagemForm.classList.add("erro");
        mensagemForm.hidden = false;
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        mensagemForm.textContent = "Digite um endereço de e-mail válido.";
        mensagemForm.classList.add("erro");
        mensagemForm.hidden = false;
        return;
    }

    mensagemForm.textContent = `Obrigado, ${nome}! Sua mensagem foi registrada nesta demonstração.`;
    mensagemForm.hidden = false;
    formulario.reset();
    limparEndereco();
    statusCep.textContent = "";
});
