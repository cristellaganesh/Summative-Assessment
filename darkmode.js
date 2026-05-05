


document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  if (!toggle) return;

  const icon = toggle.querySelector(".icon");
  const label = toggle.querySelector(".label");

  const isDark = document.documentElement.classList.contains("dark-mode"); // Dark/Light mode toggle JavaScript //

  
  if (isDark) {
    icon.textContent = "☀️";
    label.textContent = "Light Mode";
  } else {
    icon.textContent = "🌙";
    label.textContent = "Dark Mode"; // correct initial state
  }



  toggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-mode"); // toggle theme on click

    const nowDark = document.documentElement.classList.contains("dark-mode");



    if (nowDark) {
      localStorage.setItem("theme", "dark");
      icon.textContent = "☀️";
      label.textContent = "Light Mode";
    } else {
      localStorage.setItem("theme", "light");
      icon.textContent = "🌙";
      label.textContent = "Dark Mode"; // save preference and update toggle UI
    }
  });
});