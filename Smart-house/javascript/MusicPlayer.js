const url =
  "https://api.jamendo.com/v3.0/tracks/?client_id=3002e3f9&format=jsonpretty&limit=50";

fetch(url)
  .then(response => response.json())
  .then(data => {
    const songsCount = data.results.length;
    let currentIndex = Math.floor(Math.random() * songsCount);

    const displayAudio = index => {
      const title = data.results[index].name;
      const audio = data.results[index].audio;
      const img = data.results[index].album_image;
      const alt = data.results[index].album_name;
      $("#audio-title1").html(title);
      $("#music-title").html(title);
      $("#audio").attr("src", audio);
      $("audio")[0].pause();
      $("audio")[0].load();
      $("#audio-img1").attr("src", img);
      $("#audio-img1").attr("alt", alt);
    };

    displayAudio(currentIndex);

    const handleSkipStart = () => {
      let previousIndex = currentIndex - 1;
      while (previousIndex < 0) {
        previousIndex = previousIndex + songsCount; //adding playlist length is num is negative => continue from the end
      }
      currentIndex = previousIndex;
      displayAudio(previousIndex);
    };

    const handleSkipEnd = () => {
      let nextIndex = currentIndex + 1;
      if (nextIndex >= songsCount) {
        nextIndex = songsCount % nextIndex; //if index is more than my playlist length i with modulo divide it wich gives me a number left => wich is similar like beging from the start again
      }
      currentIndex = nextIndex;
      displayAudio(nextIndex);
    };

    $("#skip-end").on("click", handleSkipEnd);
    $("#skip-start").on("click", handleSkipStart);
  })
  .catch(error => {
    console.error("Error retrieving tracks:", error);
  });

const btnMusic = $(".btn-music");
let arr = [];
arr[0] = $(".btn-music")[0];
arr[1] = $(".btn-music")[1];

let isPlaying = false;

const handlePlay = () => {
  $(arr[0]).addClass("hidden-btn");
  $(arr[1]).removeClass("hidden-btn");

  if (isPlaying) {
    $("audio")[0].play();
  } else {
    $("audio")[0].pause();
  }
  isPlaying = !isPlaying;

  arr = arr.reverse();
};
$("#music-btn").on("click", handlePlay);
