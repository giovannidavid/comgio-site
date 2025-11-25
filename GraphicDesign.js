// Liste de tes créations Graphic Design
const graphics = [
  { title: "Création 1", file: "graphic/creation1.jpg" },
  { title: "Création 2", file: "graphic/creation2.jpg" },
  { title: "Création 3", file: "graphic/creation3.jpg" },
  { title: "Création 4", file: "graphic/creation4.jpg" },
  { title: "Création 5", file: "graphic/creation5.jpg" },
  { title: "Création 6", file: "graphic/creation6.jpg" },
];

// Récupère la div où afficher les créations
const graphicLibrary = document.getElementById("graphic-library");

// Crée une carte pour chaque création
graphics.forEach(graphic => {
  const card = document.createElement("div");
  card.classList.add("graphic-card");

  card.innerHTML = `
    <h3>${graphic.title}</h3>
    <img src="${graphic.file}" alt="${graphic.title}">
  `;

  graphicLibrary.appendChild(card);
});
