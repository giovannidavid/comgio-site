const videos = [
  { title: "Sajja", file: "video/BEATRICE VALLAT 2412 872.mp4" },
  { title: "RocheNgame", file: "video/Oryon nantes RNG 2407.mp4" },
  { title: "Fete de la musique", file: "video/mairie de thouars fete de la musique aperçu 2424 .mp4" },
  { title: "Fete des meres", file: "video/Auto promo fete des meres 854 .mp4" },
  { title: "Fete des peres", file: "video/Auto promo fete des peres 854x480.mp4" },
  { title: "autosphere", file: "video/autosphere 2346_1.MP4" },
  { title: "Sajja dedicace", file: "video/BEATRICE VALLAT 2414 .MP4" },
  { title: "Fusee", file: "video/fusee.Mp4" },

];



const library = document.getElementById("video-library");


videos.forEach(video => {
  const card = document.createElement("div");
  card.classList.add("video-card");

  card.innerHTML = `
    <h3>${video.title}</h3>
    <video src="${video.file}" controls></video>
  `;

  library.appendChild(card);
});
