import React from "react";
import { speak } from "react-text-to-speech";

const QuestionDisplay = ({ question }) => {
  const handleSpeak = () => {
    if (question) {
      speak({ text: question });
    }
  };

  return (
    <div>
      <h2>Question:</h2>
      <p>{question}</p>
      <button onClick={handleSpeak}>Listen to Question</button>
    </div>
  );
};

export default QuestionDisplay;
