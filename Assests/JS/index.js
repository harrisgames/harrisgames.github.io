var says = [
  "Curry Muncher Kumail",
  "Harris Games The Goat",
  "harrisgames.github.io, NO. aboutblank, goat",
  "Your one and only Unbl0cked Working Site",
  "I hate working on railin",
  "Kumail Is Annoying",
  "New site",
  "yowoodTodd",
  "Bot",
  "RAILIN 2.0!",
  "kumkum cucumber",
  "Kumail loves fornite",
  "so was secrets",
  "Tempus fugit ⏰",
  "best site",
  "u should do aboutblank",
  "what do i add?",
  "*you're* 👆🤓",
  "i have the power to shutdown the site",
  "Kumail Is Not 🔛🔝",
  "i need ads on this site cuz i need money 😮",
  "uh",
  "Kumail keeps copying me",
  "hide this site bruh", 
  "hotline bling", 
  "fortnite battl pass", 
  "i made this on the weekend :((((",
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
      says.push(`umm your ip: ${ipAddress}`);
      splashText();
    });
});
