const mysql = require("mysql2");

// Connexion à la base MySQL
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "", // ton mot de passe si tu en as un
  database: "comgio_site"
});

// Objet avec les titres et les nouveaux liens Dropbox
const videos = [
  { title: "Fete des meres", url: "https://dl.dropboxusercontent.com/s/6f89ramnapafqa2ncg673/Fete-des-meres.mp4?raw=1" },
  { title: "Fete des peres", url: "https://dl.dropboxusercontent.com/s/8c7js40wzuqoea4krdaqo/Fete-des-peres.mp4?raw=1" },
  { title: "Autosphere", url: "https://dl.dropboxusercontent.com/s/e2bz2tmg7xe8tssv1ahyu/Autosphere.mp4?raw=1" },
  { title: "Sajja", url: "https://dl.dropboxusercontent.com/s/k8rn4hw8zobtibbvqiw1f/Sajja.mp4?raw=1" },
  { title: "Sajja dedicace", url: "https://dl.dropboxusercontent.com/s/a3g5ptubv8mdy2yushqhh/Sajja-dedicace.mp4?raw=1" },
  { title: "RocheNgame", url: "https://dl.dropboxusercontent.com/s/g0g0bh4ulaa8nzl6m85xe/RocheNgame.mp4?raw=1" }
];

// Mettre à jour chaque vidéo dans la BDD
videos.forEach(video => {
  const sql = `UPDATE videos SET url = ? WHERE title = ?`;
  db.query(sql, [video.url, video.title], (err, results) => {
    if (err) {
      console.error(`Erreur pour ${video.title}:`, err);
    } else {
      console.log(`✅ ${video.title} mis à jour !`);
    }
  });
});

// Fermer la connexion après 1 sec pour laisser finir toutes les requêtes
setTimeout(() => db.end(), 1000);

