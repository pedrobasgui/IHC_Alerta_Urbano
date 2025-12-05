function show(screen) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(screen).classList.add("active");
}

const toggleBtn = document.getElementById("themeToggle");
toggleBtn.onclick = () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
};

function openCamera() {
  document.getElementById("cameraInput").click();
}

document.getElementById("cameraInput").addEventListener("change", function(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const img = document.createElement("img");
    img.src = e.target.result;

    const box = document.getElementById("photoBox");
    box.innerHTML = "";
    box.appendChild(img);
  };

  reader.readAsDataURL(file);
});
