hamburger = document.querySelector(".hamburger");
hiddenMenu = document.querySelector(".hidden-menu");

hamburger.addEventListener("click", () => {
  oldImg = hamburger.getAttribute("src");
  if (oldImg.includes("menu.svg")) {
    hiddenMenu.style.display = "flex";
    newImg = oldImg.replace("menu.svg", "cross.svg")
  } else {
    hiddenMenu.style.display = "none";
    newImg = oldImg.replace("cross.svg", "menu.svg")
  }
  hamburger.setAttribute("src", newImg)
})