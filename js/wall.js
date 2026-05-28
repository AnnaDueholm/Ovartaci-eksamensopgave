"use strict";

// Her opretter jeg et array med historier.
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

  {
    id: 6,
    text: "",
  },

  {
    id: 7,
    text: "",
  },

  {
    id: 8,
    text: "",
  },

  {
    id: 9,
    text: "",
  },

  {
    id: 10,
    text: "",
  },

  {
    id: 11,
    text: "",
  },

  {
    id: 12,
    text: "",
  },

  {
    id: 13,
    text: "",
  },

  {
    id: 14,
    text: "",
  },

  {
    id: 15,
    text: "",
  },

  {
    id: 16,
    text: "",
  },

  {
    id: 17,
    text: "",
  },

  {
    id: 18,
    text: "",
  },

  {
    id: 19,
    text: "",
  },

  {
    id: 20,
    text: "",
  },
];

// Her henter jeg wall-containeren fra html
const wall = document.querySelector("#wall");

// Her forsøger jeg at hente stories fra localStorage.Hvis der ikke findes noget gemt endnu, bruges defaultStories i stedet.
const stories = JSON.parse(localStorage.getItem("stories")) || defaultStories;

// Her opretter jeg funktionen displayStories, som skal vise historierne på væggen
function displayStories() {
  // Her filtrerer jeg arrayet,
  // så kun historier med tekst bliver vist.
  const filledStories = stories.filter((story) => {
    return story.text !== "";
  });

  // Her laver jeg html ud fra historierne.
  const html = filledStories
    .map((story) => {
      // Her returnerer jeg et p-tag
      // med historien fra objektet.
      return `
        <p 
        class="story-text"

       style="
            left: ${Math.random() * 80}%;
            top: ${Math.random() * 80}%;

            max-width:
            ${200 + Math.random() * 500}px;

            animation-duration:
            ${30 + Math.random() * 30}s;
        "
        >
        ${story.text}
        </p>
      `;
    })

    // Her samles alle strings til én string.
    .join("");

  // Her indsætter jeg html'en i wall-containeren.
  wall.innerHTML = html;
}

// Her kalder jeg funktionen, så historierne vises på siden.
displayStories();
