"use strict";

// Her henter jeg inputfeltet fra html
const input = document.querySelector("#story-input");

// Her henter jeg knappen fra html
const button = document.querySelector("#send-btn");

// Her henter jeg fejlbeskeden fra html
const errorMessage = document.querySelector("#error-message");

/////////////////// INDSEND KNAP /////////////////////////

// Her lytter jeg efter klik på knappen
button.addEventListener("click", () => {
  // Her gemmes brugerens input i en variabel
  const userText = input.value.trim();

  // Hvis inputfeltet er tomt,
  // vises en fejlbesked
  if (userText === "") {
    errorMessage.textContent = "Inputfeltet er tomt.";
    return;
  }

  // Her fjernes fejlbeskeden igen
  errorMessage.textContent = "";

  // Her gemmes brugerens besked midlertidigt i localStorage
  localStorage.setItem("pendingStory", userText);

  // Her sendes brugeren videre til confirm-siden
  window.location.href = "confirm.html";
});

/////////////////// TILBAGE KNAP /////////////////////////
// Her henter jeg tilbage-knappen fra html
const backButton = document.querySelector("#input-back-btn");

// Her lytter jeg efter klik på tilbage-knappen
backButton.addEventListener("click", () => {
  // Her sendes brugeren tilbage til input-siden
  window.location.href = "start.html";
});
