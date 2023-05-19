const audio = document.querySelector("audio");

class MusicPlayer {
  constructor() {
    this.currentSong = currentSong;
    this.isPlaying = isPlaying;
    this.volume = volume;
  }
  play() {
    audio.play();
  }
  pause() {
    audio.pause();
  }
  skipToNextSong() {}
  volume() {}
}
