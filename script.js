const modal = document.querySelector("#popup-modal");
const openBtn = document.querySelector("#open-popup");
const closeBtn = document.querySelector(".close-btn")[0];
const body = document.querySelector("body");

// When the user clicks the button, open the modal
openBtn.addEventListener('click', function(event) {
  console.log("running")
  modal.style.display = "block";
})


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

