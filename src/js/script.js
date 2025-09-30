document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  // inicializa estados
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (!answer) return;
    answer.style.maxHeight = '0px';
    answer.style.overflow = 'hidden';
    answer.setAttribute('aria-hidden', 'true');
    if (btn) btn.setAttribute('aria-expanded', 'false');
  });

  // clique em cada pergunta
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon');

    if (!btn || !answer) return;

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      // fecha tudo
      faqItems.forEach(i => {
        i.classList.remove('active');
        const a = i.querySelector('.faq-answer');
        const b = i.querySelector('.faq-question');
        const ic = i.querySelector('.faq-icon');
        if (a) { a.style.maxHeight = '0px'; a.setAttribute('aria-hidden', 'true'); }
        if (b) b.setAttribute('aria-expanded', 'false');
        if (ic) ic.style.transform = 'rotate(0deg)';
      });

      // abre o clicado (se não estava aberto)
      if (!isOpen) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        answer.setAttribute('aria-hidden', 'false');
        btn.setAttribute('aria-expanded', 'true');
        if (icon) icon.style.transform = 'rotate(45deg)';
      }
    });
  });

  // ajusta altura quando a janela for redimensionada (manter altura correta)
  window.addEventListener('resize', () => {
    faqItems.forEach(i => {
      if (i.classList.contains('active')) {
        const a = i.querySelector('.faq-answer');
        if (a) a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });
});
