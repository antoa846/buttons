const modal = document.querySelector("#popup-modal");
// const openBtn = document.querySelector("#open-popup");
const closeBtn = document.getElementsByClassName("close-btn")[0];
const body = document.querySelector("body");
const modalContent = document.querySelector(".modal-content");

// When the user clicks the button, open the modal
// openBtn.addEventListener('click', function(event) {
//   console.log("running")
//   modal.style.display = "block";
// })
document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const rect = e.target.getBoundingClientRect();
    modalContent.textContent = btn.dataset.text; 
    modal.style.top = `${rect.bottom + window.scrollY + 8}px`;
    modal.style.left = `${rect.left + window.scrollX}px`;
    modal.style.display = 'block';
    console.log(modal)
  });
});

// When the user clicks on (x), close the modal
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
document.addEventListener("DOMContentLoaded", function(event) {
  window.addEventListener('click', function(event) {
    if (!modal.contains(event.target) && event.target !== openBtn) {
        console.log("clicked");
      modal.style.display = "none";
    }
  })
})

