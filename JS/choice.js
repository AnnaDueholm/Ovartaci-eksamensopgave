/* jshint esversion: 6 */
"use strict";

/////////////////// TILBAGE KNAP /////////////////////////
// Her henter jeg tilbage-knappen fra html
const backButton = document.querySelector("#choice-back-btn");

// Her lytter jeg efter klik på tilbage-knappen
backButton.addEventListener("click", () => {
  // Her sendes brugeren tilbage til input-siden
  window.location.href = "index.html";
});

/////////////////// VIDERE KNAP /////////////////////////
const tapScreen = document.querySelector("#tap");

tapScreen.addEventListener("click", () => {
  window.location.href = "input.html";
});
