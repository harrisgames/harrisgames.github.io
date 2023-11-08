var says = [
  "Curry Muncher Kumail",
  "Harris Games The Goat",
  "harrisgames.github.io, NO. aboutblank, goat",
  "I hate working on railin",
  "Kumail Is Annoying",
  "kumkum cucumber",
  "Kumail loves fornite",
  "best site",
  "u should do aboutblank",
  "i have the power to shutdown the site",
  "Kumail Is Not 🔛🔝",
  "Kumail keeps copying me",
  "hide this site bruh", 
  "fortnite battl pass", 
];

function splashText() {
  document.querySelector(".Index-SplashText").innerHTML =
    says[Math.floor(Math.random() * says.length)];
}

document.addEventListener("DOMContentLoaded", (event) => {
  splashText();

  fetch("https://ipv4.wtfismyip.com/json")
    .then((response) => response.json())
    .then((data) => {
      ipAddress = data.YourFuckingIPAddress;
      says.push(`doxxed ez: ${ipAddress}`);
      splashText();
    });
});
