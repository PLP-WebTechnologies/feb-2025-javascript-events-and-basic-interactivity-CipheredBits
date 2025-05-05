// Button click to change color
document.getElementById("colorBtn").addEventListener("click", function () {
  this.style.backgroundColor = "hotpink";
  this.textContent = "Clicked!";
});

// Secret action: double click
document.getElementById("secretBtn").addEventListener("dblclick", function () {
  alert("You found the secret!");
});

// Hover effect
const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseover", () => hoverBox.style.backgroundColor = "#90ee90");
hoverBox.addEventListener("mouseout", () => hoverBox.style.backgroundColor = "lightgray");

// Keypress detection
document.addEventListener("keydown", function (e) {
  document.getElementById("keypressOutput").textContent = `You pressed: ${e.key}`;
});

// Tabs
const tabBtns = document.querySelectorAll(".tabBtn");
const tabContents = document.querySelectorAll(".tabContent");

tabBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.tab;
    tabContents.forEach(tc => tc.classList.remove("active"));
    document.getElementById(target).classList.add("active");
  });
});

// Image gallery
const images = [
  "https://via.placeholder.com/200?text=Image+1",
  "https://via.placeholder.com/200?text=Image+2",
  "https://via.placeholder.com/200?text=Image+3"
];
let currentImg = 0;

document.getElementById("nextImg").addEventListener("click", () => {
  currentImg = (currentImg + 1) % images.length;
  document.getElementById("galleryImg").src = images[currentImg];
});

// Form validation
const form = document.getElementById("myForm");
const password = document.getElementById("password");
const feedback = document.getElementById("passwordFeedback");

password.addEventListener("input", () => {
  if (password.value.length < 8) {
    feedback.textContent = "Password must be at least 8 characters.";
  } else {
    feedback.textContent = "";
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const pass = password.value;

  if (!name || !email || !pass) {
    alert("Please fill out all fields.");
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (pass.length < 8) {
    alert("Password must be at least 8 characters.");
    return;
  }

  alert("Form submitted successfully!");
});
