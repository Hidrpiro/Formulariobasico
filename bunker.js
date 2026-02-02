// Coletar os objetos do html
const form = document.querySelector("form");
const input_de_email = document.getElementById('emailinp')
const senha = document.getElementById('senha')
const botão = document.getElementById('btno')

function enviarDados() {
    const dados = {
        email: email.value,
        senha: senha.value
    };
    console.log("Dados coletados:", dados);
    //backend
     fetch("link do bank end - url", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Erro na requisição");
        }
        return response.json();
    })
    .then(data => {
        const mensagem = document.createElement("p");
        mensagem.style.color = "green";
        mensagem.textContent = "Aprovado!";
        form.appendChild(mensagem);

        alert("Login realizado com sucesso!");
        console.log("Resposta do servidor:", data);
    })
    .catch(error => {
        alert("Falha ao enviar os dados.");
        console.error("Erro:", error);
    });

}

form.addEventListener('submit',(event)=>{
    event.preventDefault()
    event.enviarDados()
})