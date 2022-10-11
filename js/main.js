let menu = document.querySelector(".menu-icon");
menu.onclick = () => {
  menu.classList.toggle("move");
};
function validate() {
  let name = document.querySelector(".name");
  let email = document.querySelector(".email");
  let msg = document.querySelector(".massage");
  let SendBtn = document.querySelector(".send-btn");

  SendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (name.value == "" || email.value == "" || msg.value == "") {
      emptyerror();
    } else {
      sendmail(name.value, email.value, msg.value);
      success();
    }
  });
}

validate();

function emptyerror() {
  swal.fire({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success",
    button: "Aww yiss!",
  });
}

// headr background

let header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("header-active", window.scrollY > 0);
});

// scrolltop
let scrollTop = document.querySelector(".scroll-top");
window.addEventListener("scroll", () => {
  scrollTop.classList.toggle("scroll-active", window.scrollY > 0);
});
