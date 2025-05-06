// Event Handling
document.getElementById("changeBtn").addEventListener("click", () => {
  const btn = document.getElementById("changeBtn");
  btn.textContent = "You clicked me! 🌼";
  btn.style.backgroundColor = "#8bc34a";
});

document.getElementById("hoverBox").addEventListener("mouseover", () => {
  document.getElementById("hoverBox").style.background = "#e1bee7";
});

document.addEventListener("keydown", (e) => {
  document.getElementById("keyOutput").textContent = `You pressed: ${e.key} 🌸`;
});

document.getElementById("secretBtn").addEventListener("dblclick", () => {
  alert("🌟 Surprise blossom! You found the secret!");
});

// Slideshow
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

document.getElementById("nextSlide").addEventListener("click", () => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
});

// Tabs
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab-content").forEach(tc => tc.style.display = "none");
    document.getElementById(tab.dataset.tab).style.display = "block";
  });
});

// Form Validation
document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const msg = document.getElementById("formMessage");

  if (!name.value.trim() || !email.value.trim() || !password.value.trim()) {
    msg.textContent = "Please fill out all fields 🌸";
    msg.style.color = "red";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email.value)) {
    msg.textContent = "Invalid email format 🌷";
    msg.style.color = "red";
    return;
  }

  if (password.value.length < 8) {
    msg.textContent = "Password must be at least 8 characters 🌼";
    msg.style.color = "red";
    return;
  }

  msg.style.color = "green";
  msg.textContent = "Form submitted successfully! 🌺";
});

// Real-time password feedback
document.getElementById("password").addEventListener("input", (e) => {
  const msg = document.getElementById("formMessage");
  if (e.target.value.length < 8) {
    msg.style.color = "red";
    msg.textContent = "Password too short 🌸";
  } else {
    msg.style.color = "green";
    msg.textContent = "Password looks great! 🌷";
  }
});


  