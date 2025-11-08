// Mensagem simples ao clicar no botão CTA
const btn = document.querySelector('.btn-cta');
if (btn) {
  btn.addEventListener('click', () => {
    alert('Você será redirecionado para o WhatsApp para solicitar seu site 🚀');
  });
}
// Seleciona todos os cards de projeto
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  const comment = card.getAttribute('data-comment'); // pega comentário do HTML
  const commentElement = card.querySelector('.project-comment');

  // Evento ao clicar
  card.addEventListener('click', () => {
    // Se já estiver mostrando, esconde
    if (commentElement.textContent === comment) {
      commentElement.textContent = '';
    } else {
      // Limpa comentários de todos os outros cards
      projectCards.forEach(c => c.querySelector('.project-comment').textContent = '');
      // Mostra comentário deste card
      commentElement.textContent = comment;
    }
  });
});
// Espera a página carregar
window.addEventListener('DOMContentLoaded', () => {
  const about = document.querySelector('.animate-left');
  const freelance = document.querySelector('.animate-center');

  setTimeout(() => {
    about.classList.add('show');
  }, 300); // Sobre Mim aparece primeiro

  setTimeout(() => {
    freelance.classList.add('show');
  }, 800); // Freelance aparece depois
});
function toggleMenu() {
  const menu = document.getElementById('explore-menu');
  const icon = document.getElementById('toggle-icon');
  
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
    icon.textContent = '−'; // sinal de menos quando aberto
  } else {
    menu.classList.add('hidden');
    icon.textContent = '+'; // sinal de mais quando fechado
  }
}
