function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let dayNight = "AM";

  if (hours > 12) {
    hours -= 12;
    dayNight = "PM";
  }

  hours = hours.toString().padStart(2, "0");
  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");

  const timeString = `${hours}:${minutes}:${seconds} ${dayNight}`;
  document.getElementById("time").textContent = timeString;
}

setInterval(updateTime, 1000);
