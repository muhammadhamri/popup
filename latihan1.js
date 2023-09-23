const latihanSatu = document.querySelector(".container");
const p = document.querySelector(" p");
const button = document.querySelector("button");
button.addEventListener("click", function () {
  latihanSatu.classList.toggle("warna");
  p.innerHTML = "test";
});
