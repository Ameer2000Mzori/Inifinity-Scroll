// getting our elements
const navLinks = document.getElementsByClassName("navlinks")[0];
const menuBtn = document.getElementsByClassName("menubtn")[0];
const menuImg = document.getElementsByClassName("menubtnimg")[0];

// function for the menu btn , when click open else close
menuBtn.addEventListener("click", () => {
  if (navLinks.classList.contains("acitve")) {
    menuImg.src = "./assets/openm.png";
    navLinks.classList.remove("acitve");
  } else {
    menuImg.src = "./assets/closem.png";
    navLinks.classList.add("acitve");
  }
});
