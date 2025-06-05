document.addEventListener('DOMContentLoaded', () => {
  // Aplica tema salvo no localStorage ou usa escuro como padrão
  const temaSalvo = localStorage.getItem('tema') || 'tema-escuro';
  document.body.classList.add(temaSalvo);

  // Função para atualizar o logo do GitHub com base no tema atual
  const atualizarLogoGitHub = () => {
    const githubImg = document.getElementById('github-img');
    const temaClaro = document.body.classList.contains('tema-claro');

    if (githubImg) {
      githubImg.src = temaClaro
        ? 'github-mark.svg' 
        : 'github-mark-white.svg'; 
    }
  };

  // Chama a função uma vez ao carregar
  atualizarLogoGitHub();

  // Botão de alternância de tema
  const btnTema = document.getElementById('btn-tema');
  if (btnTema) {
    btnTema.addEventListener('click', () => {
      // Alterna entre os temas
      document.body.classList.toggle('tema-claro');
      document.body.classList.toggle('tema-escuro');

      // Atualiza localStorage com o novo tema
      const novoTema = document.body.classList.contains('tema-claro')
        ? 'tema-claro'
        : 'tema-escuro';
      localStorage.setItem('tema', novoTema);

      atualizarLogoGitHub();
    });
  }

  // Formulário de contato com feedback visual
  const form = document.getElementById('form-contato');
  const msgSucesso = document.getElementById('mensagem-sucesso');

  if (form && msgSucesso) {
    form.addEventListener('submit', (e) => {
      e.preventDefault(); 

      msgSucesso.style.display = 'block'; 

      setTimeout(() => {
        msgSucesso.style.display = 'none'; 
        form.reset(); 
      }, 4000);
    });
  }
});
