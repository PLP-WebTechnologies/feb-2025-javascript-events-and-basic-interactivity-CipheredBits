document.getElementById("colorBtn").addEventListener("click", function () {
  this.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  this.textContent = "🌼 Bloomed!";
});

document.getElementById("secretBtn").addEventListener("dblclick", () => {
  alert("🌹 Secret garden unlocked!");
});

const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseover", () => {
  hoverBox.style.backgroundColor = "#ff69b4";
});
hoverBox.addEventListener("mouseout", () => {
  hoverBox.style.backgroundColor = "#444";
});

document.addEventListener("keydown", (e) => {
  document.getElementById("keypressOutput").textContent = `You typed: ${e.key}`;
});

const tabs = document.querySelectorAll(".tabBtn");
const contents = document.querySelectorAll(".tabContent");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    contents.forEach((content) => content.classList.remove("active"));
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

// 🌼 Flower image slideshow from local images
const galleryImg = document.getElementById("galleryImg");
const imageUrls = [
  "images/flower1.jpg",
  "images/flower2.jpg",
  "images/flower3.jpg",
  "images/flower4.jpg"
];
let currentImg = 0;

document.getElementById("nextImg").addEventListener("click", () => {
  currentImg = (currentImg + 1) % imageUrls.length;
  galleryImg.src = imageUrls[currentImg];
});

const form = document.getElementById("myForm");
const passwordInput = document.getElementById("password");
const feedback = document.getElementById("passwordFeedback");

passwordInput.addEventListener("input", () => {
  if (passwordInput.value.length < 8) {
    feedback.textContent = "Password must be at least 8 characters.";
  } else {
    feedback.textContent = "";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = passwordInput.value;

  if (!name || !email || !password) {
    alert("🚫 All fields are required.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("📧 Please enter a valid email.");
    return;
  }

  if (password.length < 8) {
    alert("🔒 Password must be at least 8 characters.");
    return;
  }

  alert("✅ Form submitted successfully!");
});





