import { useState } from "react";
import "./styles.css";
var emojiDictionary = {
  "😕": "Confused",
  "😞": "Disappointed",
  "😟": "Worried",
  "🤩": "Star-Struck",
  "😉": "Winking",
  "😊": "Smiling",
  "🤗": "Hugging",
  "👍": "Thumbs Up",
  "😴": "Sleeping",
  "❤️": "Love",
  "😑": "Annoyance",
  "😒": "Unamused"
};

var emojis = Object.keys(emojiDictionary);

export default function App() {
  function emojiInterpreterOnClick(emoji) {
    setInterpretation(emojiDictionary[emoji]);
  }
  function emojiInterpreter(event) {
    var input = event.target.value;
    if (emojiDictionary[input] === undefined) {
      setInterpretation("We don't have this emoji in our Database.");
    } else {
      setInterpretation(emojiDictionary[input]);
    }
  }

  var [interpretation, setInterpretation] = useState(
    "Meaning will be diplayed here"
  );

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input onChange={emojiInterpreter}></input>
      <div style={{ padding: "1rem", fontWeight: "bold" }}>
        {interpretation}
      </div>
      <h3>Emojis we have</h3>
      {emojis.map(function (emoji) {
        return (
          <div
            style={{
              padding: "0.5rem",
              fontSize: "2rem",
              cursor: "pointer",
              display: "inline-block"
            }}
            onClick={() => emojiInterpreterOnClick(emoji)}
          >
            {emoji}
          </div>
        );
      })}
      ;
    </div>
  );
}
