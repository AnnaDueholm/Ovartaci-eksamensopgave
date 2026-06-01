"use strict";

document.addEventListener("click", () => {
  window.location.href = "input.html";
});

/////////////////// TILBAGE KNAP /////////////////////////
// Her henter jeg tilbage-knappen fra html
const backButton = document.querySelector("#choice-back-btn");

// Her lytter jeg efter klik på tilbage-knappen
backButton.addEventListener("click", () => {
  // Her sendes brugeren tilbage til input-siden
  window.location.href = "start.html";
});
