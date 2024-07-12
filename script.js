let isPlaying = false;
const music = document.getElementById("lofiMusic");
const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");
const trackInfo = document.getElementById("trackInfo");

function toggleMusic() {
    if (!isPlaying) {
        music.play();
        playButton.style.display = "none";
        pauseButton.style.display = "inline";
        trackInfo.style.display = "block";
    } else {
        music.pause();
        playButton.style.display = "inline";
        pauseButton.style.display = "none";
    }
    isPlaying = !isPlaying;
}

function pauseResumeMusic() {
    if (isPlaying) {
        music.pause();
        playButton.style.display = "inline";
        pauseButton.style.display = "none";
    } else {
        music.play();
        playButton.style.display = "none";
        pauseButton.style.display = "inline";
    }
    isPlaying = !isPlaying;
}

// Dark/Light mode toggle
const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
});

// Home button functionality
document.getElementById("homeButton").addEventListener("click", () => {
    window.location.reload();
});

// Google Maps initialization
 // Initialize Google Map
 let map;
 const brooklyn = { lat: 40.67949, lng: -73.99727 };

 async function initMap() {
     const { Map } = await google.maps.importLibrary("maps");

     map = new Map(document.getElementById("map"), {
         center: brooklyn,
         zoom: 16,
     });

     const marker = new google.maps.Marker({
         position: brooklyn,
         label: "Brooklyn Stoop Sale",
         map: map,
     });
 }

 initMap();

  // Social media share functions
  window.shareTweet = function () {
      const url = "https://twitter.com/intent/tweet?text=Can't wait for the Brooklyn Treasures Stoop Sale! Discover hidden gems with us on August 15, 2024. #BrooklynTreasures #StoopSale";
      window.open(url, "_blank");
  };

  window.shareFacebook = function () {
      const url = "https://www.facebook.com/sharer/sharer.php?u=your-url";
      window.open(url, "_blank");
  };

  window.shareLinkedIn = function () {
      const url = "https://www.linkedin.com/shareArticle?mini=true&url=your-url&title=Brooklyn Treasures Stoop Sale&summary=Join me at the Brooklyn Treasures Stoop Sale on August 15, 2024! Discover unique finds and enjoy a day in the heart of Brooklyn. #BrooklynTreasures #StoopSale";
      window.open(url, "_blank");
  };

