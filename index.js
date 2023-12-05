const mp3 = document.getElementById("radio");
const ovoz = document.getElementById("ovoz");
const on = document.getElementById("online");

ovoz.addEventListener("input", () => {
  radio.volume = ovoz.value / 100;
});

if (navigator.onLine) {
  on.textContent = "🟢Online";
  on.style.color = "green";
}

window.addEventListener("online", function () {
  on.textContent = "🟢Online";
  on.style.color = "green";
});

window.addEventListener("offline", function () {
  on.textContent = "🔴Offline";
  on.style.color = "red";
});
