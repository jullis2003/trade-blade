const spollerTitles = document.querySelectorAll('.spoller-question');

spollerTitles.forEach(element => {
  element.addEventListener('click', accordionHandler);
});

function accordionHandler(event) {
  event.preventDefault();

  const spoller = event.target.closest('.faq-spoller');
  const spollerContent = event.target.nextElementSibling;

  if (spoller.classList.contains('active')) {
    spoller.classList.remove('active');
    spollerContent.style.maxHeight = '0px';
  } else {
    document.querySelectorAll('.faq-spoller').forEach(element => {
      element.classList.remove('active');
      element.querySelector('.spoller-content').style.maxHeight = '0px';
    });

    spoller.classList.add('active');
    spollerContent.style.maxHeight = spollerContent.scrollHeight + 'px';
  }
}
