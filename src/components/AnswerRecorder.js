import React, { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

const AnswerRecorder = ({ onSubmit }) => {
  const [text, setText] = useState("");
  const { transcript, resetTranscript } = useSpeechRecognition();

  const handleStart = () => {
    SpeechRecognition.startListening({ continuous: true });
  };

  const handleStop = () => {
    SpeechRecognition.stopListening();
    setText(transcript);
  };

  const handleSubmit = () => {
    onSubmit(text);
    resetTranscript();
  };

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <p>Your browser does not support Speech-to-Text.</p>;
  }

  return (
    <div>
      <h2>Answer:</h2>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleStart}>Start Speaking</button>
      <button onClick={handleStop}>Stop Speaking</button>
      <button onClick={handleSubmit}>Submit Answer</button>
    </div>
  );
};

export default AnswerRecorder;
