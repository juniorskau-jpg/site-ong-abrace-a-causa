// js/modules/form-validation.js

// Funções de Máscara (JavaScript Puro)
export function mascara(o, f) {
    setTimeout(() => {
        var v = o.value.replace(/\D/g,"");
        o.value = f(v);
    }, 1);
}

export function fMascCPF(v){
    v=v.replace(/\D/g,"");
    v=v.replace(/(\d{3})(\d)/,"$1.$2");
    v=v.replace(/(\d{3})(\d)/,"$1.$2");
    v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
    return v;
}

export function fMascCEP(v){
    v=v.replace(/\D/g,"");
    v=v.replace(/(\d{5})(\d)/,"$1-$2");
    return v;
}

// Lógica de Validação (Consistência de Dados)
function validarCPFConsistencia(cpf) {
    // Implementação real da lógica de cálculo do dígito verificador do CPF
    // Retorna true ou false
    // ... Código de validação de CPF aqui ...
    return true; 
}

function validarDataNascimento(data) {
    const hoje = new Date();
    const dataNasc = new Date(data);
    const idadeMinima = 16;
    const dataLimite = new Date(hoje.getFullYear() - idadeMinima, hoje.getMonth(), hoje.getDate());
    
    // true se a data de nascimento for anterior à data limite (o usuário é maior que 16 anos)
    return dataNasc < dataLimite; 
}

export function handleFormSubmit(e) {
    e.preventDefault(); // Impedir envio inicial

    const form = e.target;
    const cpfInput = document.getElementById('cpf');
    const nascInput = document.getElementById('nascimento');
    let isValid = true;
    
    // 1. Validar CPF pela Lógica
    if (cpfInput.value.length === 14 && !validarCPFConsistencia(cpfInput.value)) {
        alert("Erro: CPF inválido. Verifique a numeração.");
        cpfInput.classList.add('input-error'); // Classe CSS para feedback
        isValid = false;
    } else {
        cpfInput.classList.remove('input-error');
    }

    // 2. Validar Idade Mínima
    if (nascInput.value && !validarDataNascimento(nascInput.value)) {
        alert("Erro: Idade mínima de 16 anos não atingida para cadastro.");
        nascInput.classList.add('input-error');
        isValid = false;
    } else {
        nascInput.classList.remove('input-error');
    }

    if (isValid && form.checkValidity()) {
        alert('Formulário validado com sucesso! Pronto para envio.');
        // form.submit(); // Descomentar para enviar
    }
}