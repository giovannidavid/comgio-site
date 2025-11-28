const library = document.getElementById("video-library");

fetch("http://localhost:3000/videos")
  .then(res => res.json())
  .then(videos => {
    videos.forEach(video => {
      const card = document.createElement("div");
      card.classList.add("video-card");

      card.innerHTML = `
        <h3>${video.title}</h3>
        <video src="${video.url}" controls preload="metadata" width="640" height="360"></video>
      `;

      library.appendChild(card);
    });
  })
  .catch(err => console.error(err));
