import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
document.querySelector("h1").addEventListener("click", function (e) {
  alert("Bana tıkladın!");
});

const container = document.getElementsByClassName("main-navigation");
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  console.log("event >", e);
  container.style.top = e.pageY + "px";
  container.style.left = e.pageX + "px";
  container.classList.remove("hide");
});
document.addEventListener("click", function (e) {
  container.classList.add("hide");
});

const baslik = document.querySelector(".logo-heading");
window.addEventListener("click", function (event) {
  baslik.style.color = "brown";
});

document.querySelectorAll("nav a").forEach((metin) => {
  metin.addEventListener("mouseover", (event) => {
    metin.style.color = "red";
  });
});

document.querySelectorAll("nav a").forEach((metin) => {
  metin.addEventListener("mouseout", (event) => {
    metin.style.color = "orange";
  });
});
document.querySelectorAll("h2").forEach((metin) => {
  metin.addEventListener("mouseover", (event) => {
    metin.style.color = "orange";
  });
});

document.querySelectorAll("h2").forEach((metin) => {
  metin.addEventListener("mouseout", (event) => {
    metin.style.color = "black";
  });
});

window.addEventListener("doubleClick", (e) => {
  h1.textContent = window.resizeBy;
});

document.querySelectorAll("img").forEach((photo) => {
  photo.addEventListener("dblclick", (event) => {
    photo.style.filter = "blur(5px)";
  });
});
const input = document.createElement("input");
const footer = document.querySelector(".footer");
input.type = "text";
input.placeholder = "text";
input.height = "506px";

footer.appendChild(input);

document.querySelectorAll("input").forEach((metin) => {
  metin.addEventListener("focus", (event) => {
    event.target.style.background = "orange";
  });
});
