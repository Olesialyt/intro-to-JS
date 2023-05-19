// speech recognition api
window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

function start() {
  if (!("SpeechRecognition" in window)) {
    console.log("Speech recognition is not supported");
    return;
  }

  console.log("Speech recognition is supported");

  const recognition = new window.SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;

  recognition.onresult = handleResult;
  recognition.start();
}
start();

function handleResult(e) {
  try {
    let command = e.results[e.results.length - 1][0].transcript;
    //reacting on words turn on/off
    if (/turn\soff/i.test(command)) {
      $(body).css("backgroundColor", "Black");
    } else if (/turn\son/i.test(command)) {
      $(body).css("backgroundColor", "White");
    }
  } catch (e) {
    console.log(e.error);
  }
}
