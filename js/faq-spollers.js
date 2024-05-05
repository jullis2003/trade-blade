const accordion = document.querySelector('.accordion');
const panels = document.querySelectorAll('.faq-spoller');

accordion.addEventListener('click', e => {
  const activePanel = e.target.closest('.faq-spoller');

  panels.forEach(item => {
    const button = item.querySelector('.spoller-question');
    const panel = item.querySelector('.accordion-content');

    item.classList.remove('active');
    button.classList.remove('active');
    button.setAttribute('aria-expanded', true);
    panel.setAttribute('aria-hidden', false);
  });

  if (!activePanel) return;

  toggleAccordion(activePanel);
});

function toggleAccordion(panelToActivate) {
  const activeButton = panelToActivate.querySelector('.spoller-question');
  const activePanel = panelToActivate.querySelector('.accordion-content');
  const activePanelIsOpened = activeButton.getAttribute('aria-expanded');

  if (activePanelIsOpened === 'true') {
    activeButton.setAttribute('aria-expanded', false);
    activePanel.setAttribute('aria-hidden', true);

    panelToActivate.classList.add('active');
    activeButton.classList.add('active');
  } else {
    activeButton.setAttribute('aria-expanded', true);
    activePanel.setAttribute('aria-hidden', false);

    panelToActivate.classList.remove('active');
    activeButton.classList.remove('active');
  }
}
