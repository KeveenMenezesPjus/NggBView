/* global bootstrap: false */
(() => {
    'use strict'
    const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.forEach(tooltipTriggerEl => {
      new bootstrap.Tooltip(tooltipTriggerEl)
    })
})()

function openSide() {
  const sidebar = document.getElementById('mySidebar');
  sidebar.classList.add('active');
}

function closedSide() {
  const sidebar = document.getElementById('mySidebar');
  sidebar.classList.remove('active');
}

