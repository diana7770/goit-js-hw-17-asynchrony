const items = document.querySelectorAll(".item");

setInterval(() => {
  items.forEach((item) => {
    item.style.transform = scale(`${Math.random() * (0.5 + 1)}`);
  });
}, 500);
