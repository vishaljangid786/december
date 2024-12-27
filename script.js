function toggleFAQ(element) {
  const answer = element.nextElementSibling;
  const icon = element.querySelector("ion-icon");

  if (answer.classList.contains("hidden")) {
    answer.classList.remove("hidden");
    icon.name = "remove-circle-outline";
    icon.classList.add("rotate-180");
  } else {
    answer.classList.add("hidden");
    icon.name = "add-circle-outline";
    icon.classList.remove("rotate-180");
  }
}

const menuIcon = document.getElementById("menu-icon");
const list = document.getElementById("list");


menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-xmark");
  list.classList.toggle("hidden");
});

