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

// Her henter jeg den midlertidige besked fra localStorage
const pendingStory = localStorage.getItem("pendingStory");

// Her henter jeg preview-teksten fra html
const previewText = document.querySelector("#preview-text");

// Her henter jeg confirm-knappen fra html
const confirmButton = document.querySelector("#confirm-btn");

// Her vises brugerens besked på siden
previewText.textContent = pendingStory;

/////////////////// CONFIRM KNAP /////////////////////////

// Her lytter jeg efter klik på confirm-knappen
// Her sørger jeg for at når alle 20 historier er fyldt ud, så vil den begynde at erstatte historier fra id 6
confirmButton.addEventListener("click", () => {
  // Her henter vi tallet for, hvilken plads næste besked skal indsættes på. Hvis der ikke findes et tal endnu, starter den ved 6, fordi id 1-5 er faste historier.
  let currentIndex = Number(localStorage.getItem("currentIndex")) || 6;

  // Her indsætter vi brugerens besked i arrayet. Vi skriver currentIndex - 1, fordi arrays starter på 0, men vores id’er starter på 1. Så id 6 ligger på plads 5 i arrayet
  stories[currentIndex - 1].text = pendingStory;

  // Her tæller vi én op, så næste bruger ikke overskriver samme plads, men går videre til næste.
  currentIndex++;

  // Hvis currentIndex bliver større end 20
  // starter den forfra ved plads 6
  if (currentIndex > 20) {
    currentIndex = 6;
  }

  // Her gemmer vi den nye plads i localStorage, så browseren husker, hvor næste besked skal placeres.
  localStorage.setItem("currentIndex", currentIndex);

  // Her gemmer vi hele det opdaterede stories array i localStorage. JSON.stringify bruges, fordi localStorage kun kan gemme tekst.
  localStorage.setItem("stories", JSON.stringify(stories));

  // Her fjerner vi den midlertidige besked, fordi den nu er blevet gemt rigtigt i stories.
  localStorage.removeItem("pendingStory");

  // Her sendes brugeren videre til wall-siden
  window.location.href = "wall.html";
});

/////////////////// TILBAGE KNAP /////////////////////////
// Her henter jeg tilbage-knappen fra html
const backButton = document.querySelector("#confirm-back-btn");

// Her lytter jeg efter klik på tilbage-knappen
backButton.addEventListener("click", () => {
  // Her sendes brugeren tilbage til input-siden
  window.location.href = "input.html";
});
