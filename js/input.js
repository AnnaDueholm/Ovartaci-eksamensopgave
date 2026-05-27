"use strict";

// Her opretter jeg et array med standard-historier. De første 5 historier er faste historier. Resten er tomme pladser til gæster.
const defaultStories = [
  {
    id: 1,
    text: "Min mor kæmpede med depression det meste af min barndom.",
  },

  {
    id: 2,
    text: "Jeg føler mig alene, selv når jeg er omgivet af mennesker.",
  },

  {
    id: 3,
    text: "Min bror fik skizofreni som teenager.",
  },

  {
    id: 4,
    text: "Jeg ville ønske folk forstod hvor trættende angst er.",
  },

  {
    id: 5,
    text: "Jeg lærte tidligt at skjule mine følelser.",
  },

  { id: 6, text: "" },
  { id: 7, text: "" },
  { id: 8, text: "" },
  { id: 9, text: "" },
  { id: 10, text: "" },
  { id: 11, text: "" },
  { id: 12, text: "" },
  { id: 13, text: "" },
  { id: 14, text: "" },
  { id: 15, text: "" },
  { id: 16, text: "" },
  { id: 17, text: "" },
  { id: 18, text: "" },
  { id: 19, text: "" },
  { id: 20, text: "" },
];

// Her forsøger jeg at hente stories fra localStorage. Hvis der ikke findes noget gemt endnu, bruges defaultStories i stedet.
let stories = JSON.parse(localStorage.getItem("stories")) || defaultStories;

// Her henter jeg inputfeltet fra html
const input = document.querySelector("#story-input");

// Her henter jeg knappen fra html
const button = document.querySelector("#send-btn");

// Her lytter jeg efter klik på knappen
button.addEventListener("click", () => {
  // Her gemmes brugerens input i en variabel
  const userText = input.value.trim();

  // Hvis inputfeltet er tomt, stopper funktionen
  if (userText === "") {
    return;
  }

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
