"use strict";

// Her opretter jeg et array med standard-historier.
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

  // Tomme pladser til gæster

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

// Her forsøger jeg at hente stories fra localStorage.
// Hvis der ikke findes noget gemt endnu,
// bruges defaultStories i stedet.
let stories = JSON.parse(localStorage.getItem("stories")) || defaultStories;

// Her henter jeg den midlertidige besked fra localStorage
const pendingStory = localStorage.getItem("pendingStory");

// Her henter jeg preview-teksten fra html
const previewText = document.querySelector("#preview-text");

// Her henter jeg confirm-knappen fra html
const confirmButton = document.querySelector("#confirm-btn");

// Her vises brugerens besked på siden
previewText.textContent = pendingStory;

// Her lytter jeg efter klik på confirm-knappen
confirmButton.addEventListener("click", () => {
  // Her finder jeg det første objekt
  // hvor text er tom
  const emptyStory = stories.find((story) => {
    return story.text === "";
  });

  // Hvis der findes en tom plads,
  // indsættes brugerens tekst
  if (emptyStory) {
    emptyStory.text = pendingStory;
  }

  // Her gemmes det opdaterede array i localStorage
  localStorage.setItem("stories", JSON.stringify(stories));

  // Her fjernes den midlertidige besked fra localStorage
  localStorage.removeItem("pendingStory");

  // Her sendes brugeren videre til wall-siden
  window.location.href = "wall.html";
});
