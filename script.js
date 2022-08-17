const sideMenu = document.querySelector(".sidemenu");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const sideLink = document.querySelector(".sidelink");

window.addEventListener("resize", () => {
  sideMenu.style.right = "-300px";

  sideMenu.style.boxShadow = "none";
});
sideLink.addEventListener("click", (e) => {
  sideMenu.style.right = "-300px";
  sideMenu.style.boxShadow = "none";
});
menu.addEventListener("click", (e) => {
  // sideMenu.style.width='300px';
  sideMenu.style.right = "0px";
  sideMenu.style.boxShadow = "0 0 1000px 50px  black";
});
close.addEventListener("click", (e) => {
  sideMenu.style.right = "-300px";
  // sideMenu.style.width='0px';
  sideMenu.style.boxShadow = "none";
});
