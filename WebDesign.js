// Liste de tes projets Web Design
const webDesigns = [
  { title: "Projet 1", file: "webdesign/projet1.jpg" },
  { title: "Projet 2", file: "webdesign/projet2.jpg" },
  { title: "Projet 3", file: "webdesign/projet3.jpg" },
  { title: "Projet 4", file: "webdesign/projet4.jpg" },
  { title: "Projet 5", file: "webdesign/projet5.jpg" },
  { title: "Projet 6", file: "webdesign/projet6.jpg" },
];

// Récupère la div où afficher les projets
const webLibrary = document.getElementById("web-library");

// Crée une carte pour chaque projet
webDesigns.forEach(project => {
  const card = document.createElement("div");
  card.classList.add("web-card");

  card.innerHTML = `
    <h3>${project.title}</h3>
    <img src="${project.file}" alt="${project.title}">
  `;

  webLibrary.appendChild(card);
});
