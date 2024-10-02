const body = document.querySelector("body");

for (let i = 0; i < 100; i++) {
  const p = document.createElement("p");
  p.style = `color: ${getRandomColor()}`;
  p.textContent = getRandomArabicColor();
  body.appendChild(p);
}

function getRandomArabicColor() {
  const randomArabicColors = ["ازرق", "احمر", "اخضر", "اصفر"];

  return randomArabicColors[
    Math.floor(Math.random() * randomArabicColors.length)
  ];
}

function getRandomColor() {
  const randomColors = ["blue", "red", "green", "goldenrod"];

  return randomColors[Math.floor(Math.random() * randomColors.length)];
}
