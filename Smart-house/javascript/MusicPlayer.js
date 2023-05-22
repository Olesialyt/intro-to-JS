const url =
  "https://api.jamendo.com/v3.0/tracks/?client_id=3002e3f9&format=jsonpretty&limit=50";

fetch(url)
  .then(response => response.json())
  .then(data => {
    const tracksCount = data.results.length;
    const currentIndex = Math.floor(Math.random() * tracksCount);
    const displayAudio = index => {
      const title = data.results[index].name;
      const audio = data.results[index].audio;
      const img = data.results[index].album_image;
      const alt = data.results[index].album_name;
      $("#audio-title1").html(title);
      $("#audio").attr("src", audio);
      $("audio")[0].pause();
      $("audio")[0].load();
      $("#audio-img1").attr("src", img);
      $("#audio-img1").attr("alt", alt);
    };
    displayAudio(currentIndex);
    const handleSkipStart = () => {
      let previousIndex = currentIndex - 1;
      while (previousIndex < 0){
        previousIndex = previousIndex + tracksCount; //adding playlist length is num is negative => continue from the end
      };
      displayAudio(previousIndex);
    };

    const handleSkipEnd = () => {
      let nextIndex = currentIndex + 1;
      if (nextIndex >= tracksCount) {
        nextIndex = tracksCount % nextIndex;
        //if index is more than my playlist length
        //i with modulo divide it wich gives me a number left => wich is similar like beging from the start again
      }
      displayAudio(nextIndex);
    };

    $("#skip-end").on("click", handleSkipEnd);
    $("#skip-start").on("click", handleSkipStart);

    console.log(data.results);
  })
  .catch(error => {
    console.error("Error retrieving tracks:", error);
  });

