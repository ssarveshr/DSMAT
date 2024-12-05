import React, { useState } from "react";
import axios from "axios";
import QuestionDisplay from "./QuestionDisplay";
import AnswerRecorder from "./AnswerRecorder";
import FeedbackDisplay from "./FeedbackDisplay";

const InterviewPage = () => {
  const [question, setQuestion] = useState("");
  const [feedback, setFeedback] = useState("");

  const fetchQuestion = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/question");
      setQuestion(response.data.question);
    } catch (err) {
      console.error("Error fetching question:", err);
    }
  };

  const handleAnswerSubmit = async (answer) => {
    try {
      const response = await axios.post("http://localhost:5000/api/answer", { answer });
      setFeedback(response.data.feedback);
    } catch (err) {
      console.error("Error submitting answer:", err);
    }
  };

  return (
    <div>
      <h1>AI Interview</h1>
      <button onClick={fetchQuestion}>Start Interview</button>
      <QuestionDisplay question={question} />
      <AnswerRecorder onSubmit={handleAnswerSubmit} />
      <FeedbackDisplay feedback={feedback} />
    </div>
  );
};

export default InterviewPage;
