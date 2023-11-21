function validarFormulario(){
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmasenha = document.getElementById("confirmaSenha").value;

    console.log(confirmasenha)

    if(nome == ''|| email == ''|| senha == ''|| confirmasenha == ''){
        alert('Preencha os campos vazios!')
        return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(!emailRegex.test(email)){
        alert("Digite um e-mail válido!")
        return
    }

    if(senha.legth < 8){
        alert('Digite mais que 8 caracteres!')
        return
    }

    if(confirmasenha !== senha){
        alert('Erro, confirme sua senha novamente')
        return
    }
    alert('Seu cadastra foi realizado com sucesso!')
}

function alternaModoEscuro(){
    const pagina = document.body

    pagina.classList.toggle("alterna-formulario")

    const mudatema = document.getElementById("mudatema");

    const formulario = document.getElementById("formulario");
    formulario.classList.toggle("alterna-formulario")

    const isFormulario = document.body.classList.contains("alterna-formulario");

    if(isFormulario == true){
        mudatema.textContent = "Tema Claro"
    } else{
        mudatema.textContent = "Tema Escuro"
    }
    return
}