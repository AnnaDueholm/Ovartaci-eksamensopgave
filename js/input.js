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

/////////////////// TASTATUR /////////////////////////

//Keyboard gøres funktionelt 
//her tager jeg fat i mine html elementer 
const textBox = document.querySelector("#story-input");
const keys = document.querySelectorAll(".key");

//Virtuel keyboard 

//if sætning indsættes, så koden stopper hvis keys eller tekstfeltet ikke kan findes 
//forEach bruges til at gennemløbe alle knapperne, og der sættes en addListener på, som lytter på knapper og kører koden når der trykkes, og teksten bliver skrevet i tekstboksen. 
if (textBox && keys.length > 0) {
  keys.forEach(key => {
    key.addEventListener("click", () => {
      textBox.value += key.innerText;
      });
      });
    }

//Fysisk keyboard 
//lytter efter om en tast bliver trykket ned
//if sætning indsættes, så koden stopper hvis keys eller tekstfeltet ikke kan findes 
document.addEventListener("keydown", (event) => {     
  if (!textBox) return;

//sørger for at kun "almindelige taster" kan trykkes ned 
  if (event.key.length === 1) {
    textBox.value += event.key;
    }
    });