/* jshint esversion: 6 */
"use strict";

//Skifter automatisk siden, når der er gået 10 sekunder
setTimeout(() => {
  window.location.href = "index.html";
}, 10000);

//Skifter siden til startsiden ved click
document.addEventListener("click", () => {
  // Sender brugeren videre til næste side
  window.location.href = "index.html";
});
