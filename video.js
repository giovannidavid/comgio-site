const videos = [
  { title: "Sajja", file: "video/BEATRICE VALLAT 2412 872.mp4" },
  { title: "RocheNgame", file: "video/Oryon nantes RNG 2407.mp4" },
  { title: "Fete de la musique", file: "video/mairie de thouars fete de la musique aperçu 2424 .mp4" },
  { title: "Fete des meres", file: "video/Auto promo fete des meres 854 .mp4" },
  { title: "Fete des peres", file: "video/Auto promo fete des peres 854x480.mp4" },
  { title: "autosphere", file: "video/autosphere 2346_1.MP4" },
  { title: "Sajja dedicace", file: "video/BEATRICE VALLAT 2414 .MP4" },
  { title: "Fusee", file: "video/fusee.Mp4" },
  { title: "buffalo grill lisieux", file: "video/buffalo grill lisieux.MP4" },
  { title: "loeil", file: "video/loeil.mp4" },
  { title: "lou", file: "video/lou.MP4" },
  { title: "fete foraine", file: "video/Mairie  fontenay le comte fete foraine 2410 apercu.MP4" },
  { title: "shopart S47 V2", file: "video/shopart S47 V2.MP4" },
  { title: "sprinoir", file: "video/sprinoir.mp4" },
  { title: "timer", file: "video/timer.MP4" }
];

const library = document.getElementById("video-library");

videos.forEach(video => {
  const card = document.createElement("div");
  card.classList.add("video-card");

  // Encode les espaces dans le chemin pour éviter les erreurs
  const filePath = encodeURI(video.file);

  card.innerHTML = `
    <h3>${video.title}</h3>
    <video src="${filePath}" controls></video>
  `;

  library.appendChild(card);
});
