const modal = document.querySelector("#popup-modal");
// const openBtn = document.querySelector("#open-popup");
const closeBtn = document.getElementsByClassName("close-btn")[0];
const body = document.querySelector("body");
const modalContent = document.querySelector(".modal-content");

// document.querySelectorAll('button').forEach(btn => {
//   btn.addEventListener('click', (e) => {
//     const rect = e.target.getBoundingClientRect();
//     modalContent.textContent = btn.dataset.text; 
//     modal.style.top = `${rect.top + window.scrollY + -10}px`;
//     modal.style.left = `${rect.left + window.scrollX + 100}px`;
//     modal.style.display = 'block';
//     console.log(modal)
    
//   });
// });

document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const rect = e.target.getBoundingClientRect();
 //toggle:
    if (modal.style.display === 'block') {
      modal.style.display = 'none';
    } else {
      modalContent.textContent = btn.dataset.text;
      modal.style.top = `${rect.top + window.scrollY - 10}px`;
      modal.style.left = `${rect.left + window.scrollX + 100}px`;
      modal.style.display = 'block';
    }
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('button') && !modal.contains(e.target)) {
    modal.style.display = 'none';
    activeBtn = null;
  }
});

