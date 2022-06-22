const collapsible = document.querySelectorAll('.collapsible')
collapsible.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('collapsible--expanded')
  })

});

