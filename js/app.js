const items = document.querySelectorAll(".items");
const cars = document.querySelectorAll(".cars");
const colors = ["#4a4a4a", "#4B798C", "#8E413F"];

cars.forEach((car) => {
  car.addEventListener("click", (e) => {
    let id = e.currentTarget.dataset.id;
    let src = e.currentTarget.children[0].src;
    items[id].querySelector(".image img").src = src;
    items.forEach((item) => item.classList.remove("active"));
    items[id].classList.add("active");
    document.querySelector(".container").style.backgroundColor = colors[id];
  });
});
