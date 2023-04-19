/* global bootstrap: false */
(() => {
    'use strict'
    const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.forEach(tooltipTriggerEl => {
        new bootstrap.Tooltip(tooltipTriggerEl)
    })
})()

/* interação sidebar*/
function openSide() {
  const sidebar = document.getElementById('mySidebar');
  const perfilSideBar = document.getElementById('perfilSideBar');
  sidebar.classList.add('active');
  perfilSideBar.classList.add('dropdown-toggle');
}

function closedSide() {
  const sidebar = document.getElementById('mySidebar');
  const perfilSideBar = document.getElementById('perfilSideBar');
  sidebar.classList.remove('active');
  perfilSideBar.classList.remove('dropdown-toggle')
}

/*botão de pesquisa */
const searchInputDropdown = document.getElementById('navbarDropdownMenuLink');
const dropdownOptions = document.getElementById('aqui');

searchInputDropdown.addEventListener('input', () => {
  const filter = searchInputDropdown.value.toLowerCase();
  showOptions();
  const valueExist = !!filter.length;

  if (valueExist) {
    dropdownOptions.forEach((el) => {
      const elText = el.textContent.trim().toLowerCase();
      const isIncluded = elText.includes(filter);
      if (!isIncluded) {
        el.style.display = 'none';
      }
    });
  }
});

const showOptions = () => {
  dropdownOptions.forEach((el) => {
    el.style.display = 'flex';
  })
}
