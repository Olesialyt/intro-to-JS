const dropdownItems = document.querySelectorAll(".dropdown-item");

dropdownItems.forEach((el, i) => {
  el.addEventListener("click", function (e) {
    let index = e.target.getAttribute("id");
    let elToRemove = document.getElementById(`${index}`);
    elToRemove?.remove();
  });
  el.setAttribute("id", `${i}`);
  ++i;
});
