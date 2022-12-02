// JavaScript Document
console.log("hi");









// // Open menu javascript

var openButton = document.querySelector("header section:last-of-type article button");

openButton.addEventListener("click", openMenu);

function openMenu() {
    var deNav = document.querySelector("header section:last-of-type article nav");

    deNav.classList.add("toonMenu")

    console.log("Ik ben open :)")
}

var sluitButton = document.querySelector("header section:last-of-type article nav button");

sluitButton.addEventListener("click", sluitMenu);

function sluitMenu() {
    var deNav = document.querySelector("header section:last-of-type article nav");
    deNav.classList.remove("toonMenu");

    console.log("Ik ben dicht :(")
}