const popUp = document.querySelector("button");
// const popup = document.getElementById("popup");
popUp.addEventListener("click", function () {
  alertLatihan.style.display = "block";

  popUp.style.display = "none";
});

function showPopup(popupid) {
  const popup = document.getElementById("popupid");
  popup.style.display = "block";

  setTimeout(function () {
    popup.style.display = "none";
  }, 2000);
}
