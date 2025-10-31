// js/main.js
import { mascara, fMascCPF, fMascCEP, handleFormSubmit } from './modules/form-validation.js';

// --- INICIALIZAÇÃO DE MÁSCARAS ---
const cpf = document.getElementById('cpf');
const cep = document.getElementById('cep');

if (cpf) {
    cpf.addEventListener('input', () => mascara(cpf, fMascCPF));
    // Telefone e outros campos...
}

if (cep) {
    cep.addEventListener('input', () => mascara(cep, fMascCEP));
}

// --- INICIALIZAÇÃO DA VALIDAÇÃO (Fase 3) ---
const form = document.getElementById('cadastro-form');
if (form) {
    form.addEventListener('submit', handleFormSubmit);
}

// --- LÓGICA DO MENU HAMBÚRGUER (Fase 3/4 - Acessibilidade) ---
const menuButton = document.querySelector('.menu-hamburguer');
const mainNav = document.getElementById('main-nav');

if (menuButton) {
    menuButton.addEventListener('click', () => {
        const isExpanded = menuButton.getAttribute('aria-expanded') === 'true' || false;
        
        mainNav.classList.toggle('is-open');
        menuButton.setAttribute('aria-expanded', !isExpanded);
    });
}

// --- LÓGICA DO SPA (Rotas e Conteúdo) ---
// (Esta lógica é mais extensa e requer arquivos HTML completos. 
// Para a simulação, basta que o código acima esteja modularizado.)
// ... SPA code ...