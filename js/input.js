/* jshint esversion: 6 */
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
  window.location.href = "choice.html";
});

/////////////////// TASTATUR /////////////////////////

//Keyboard gøres funktionelt
//her tager jeg fat i mine html elementer
const textBox = document.querySelector("#story-input");
const keys = document.querySelectorAll(".key");
let capsLock = false;

//forEach bruges til at gennemløbe alle knapperne, og der sættes en addListener på, som lytter på knapper og kører koden når der trykkes, og teksten bliver skrevet i tekstboksen.
keys.forEach((key) => {
  key.addEventListener("click", () => {
    const keyType = key.dataset.key;
    const value = key.innerText;

    // SPACE
    if (keyType === "space") {
      textBox.value += " ";
      return;
    }

    // ENTER
    if (keyType === "enter") {
      textBox.value += "\n";
      return;
    }

    // DELETE
    if (keyType === "delete") {
      textBox.value = textBox.value.slice(0, -1);
      return;
    }

    // STORE / små bogstaver
    let finalValue;

    if (capsLock) {
      finalValue = value.toUpperCase();
    } else {
      finalValue = value.toLowerCase();
    }

    textBox.value += finalValue;
  });
});
