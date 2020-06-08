const menu = document.getElementById("menu");
const navList = document.getElementById("navList");
menu.onclick = () => {
  navList.classList.toggle("navActive");
};
