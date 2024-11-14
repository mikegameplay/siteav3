// Função para validar o formulário de contato
function validateForm(event) {
    event.preventDefault(); // Evitar o envio real do formulário

    // Obtendo os valores dos campos
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Validação simples: Verificar se os campos estão preenchidos
    if (!nome || !email || !mensagem) {
        alert("Todos os campos precisam ser preenchidos!");
        return;
    }

    // Verificação simples de formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, insira um e-mail válido!");
        return;
    }

    // Se a validação passar, mostrar uma mensagem de sucesso
    alert("Formulário enviado com sucesso!\nNome: " + nome + "\nE-mail: " + email + "\nMensagem: " + mensagem);

    // Limpar o formulário
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mensagem').value = '';
}

// Adicionar um ouvinte de evento para o envio do formulário
document.querySelector('form').addEventListener('submit', validateForm);
