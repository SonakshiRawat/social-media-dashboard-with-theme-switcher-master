const toggle = document.querySelector(".slider");
const num = document.querySelectorAll(".solid");
const block = document.querySelectorAll(".block");
const block2 = document.querySelectorAll(".block2");
const body = document.querySelector("body");
const main = document.querySelector("main");
const overview = document.querySelector(".overview");
const attri = document.querySelectorAll(".attribution a");
const attri2 = document.querySelector(".attribution");

let value = true;
display();
const hi = function (e) {
  if (value) {
    body.style.backgroundColor = "hsl(230, 17%, 14%)";
    main.style.backgroundColor = "hsl(232, 19%, 15%)";
    overview.style.color = "hsl(0, 0%, 100%)";
    num.forEach((n) => {
      n.style.color = "hsl(0, 0%, 100%)";
    });

    block.forEach((n) => {
      n.style.backgroundColor = "hsl(228, 28%, 20%)";
    });

    block2.forEach((n) => {
      n.style.backgroundColor = "hsl(228, 28%, 20%)";
    });
    attri2.style.color = "hsl(228, 45%, 44%)";
    attri.forEach((n) => {
      n.style.color = "white";
    });

    block.forEach((n) => {
      n.style.backgroundColor = " hsl(228, 28%, 20%)";
      n.addEventListener("mouseenter", function () {
        n.style.backgroundColor = "black";
      });
      n.addEventListener("mouseleave", function () {
        n.style.backgroundColor = " hsl(228, 28%, 20%)";
      });
    });
    block2.forEach((n) => {
      n.style.backgroundColor = " hsl(228, 28%, 20%)";
      n.addEventListener("mouseenter", function () {
        n.style.backgroundColor = "black";
      });
      n.addEventListener("mouseleave", function () {
        n.style.backgroundColor = " hsl(228, 28%, 20%)";
      });
    });

    value = false;
  } else {
    body.style.backgroundColor = " hsl(0, 0%, 100%)";
    main.style.backgroundColor = " hsl(225, 100%, 98%)";
    overview.style.color = "hsl(0, 0%, 100%)";
    num.forEach((n) => {
      n.style.color = " hsl(230, 17%, 14%)";
    });

    block.forEach((n) => {
      n.style.backgroundColor = "hsl(227, 47%, 96%)";
    });

    block2.forEach((n) => {
      n.style.backgroundColor = "hsl(227, 47%, 96%)";
    });
    attri2.style.color = "hsl(228, 45%, 44%)";
    attri.forEach((n) => {
      n.style.color = "black";
    });

    display();

    value = true;
  }
};
toggle.addEventListener("click", hi);
function display() {
  block.forEach((n) => {
    n.style.backgroundColor = " hsl(227, 47%, 96%)";
    n.addEventListener("mouseenter", function () {
      n.style.backgroundColor = "hsla(228, 50%, 91%)";
    });
    n.addEventListener("mouseleave", function () {
      n.style.backgroundColor = "  hsl(227, 47%, 96%)";
    });
  });
  block2.forEach((n) => {
    n.style.backgroundColor = "  hsl(227, 47%, 96%)";
    n.addEventListener("mouseenter", function () {
      n.style.backgroundColor = "hsla(228, 50%, 91%)";
    });
    n.addEventListener("mouseleave", function () {
      n.style.backgroundColor = "  hsl(227, 47%, 96%)";
    });
  });
}
