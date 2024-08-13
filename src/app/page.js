"use client";

import { useState } from "react";
import { getCharacterInfo } from "./lib/data";
import { motion } from 'framer-motion';
import CharacterGrid from "./lib/characterGrid";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleQuestion = () => {
    const { textContent, renderedComponent } = getCharacterInfo(question);
    setAnswer(renderedComponent);
    speak(textContent);
  };

  const speak = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 overflow-hidden">
      
      <section className="p-6 bg-gray-800 bg-opacity-60  rounded-xl shadow-lg mb-8">
        <CharacterGrid />
      </section>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[380px] before:-translate-x-1/2 before:rounded-full "></div>
      <div className="flex flex-col items-center justify-center text-center mb-32">
        <input
          className="mb-5 w-96 h-10 px-3 py-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline cursor-pointer focus:outline-none sm:w-90 overflow-hidden"
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask a question about Spider-Man..."
        ></input>

        <button
          type="submit"
          onClick={handleQuestion}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-96 sm:w-96"
        >
          Submit
        </button>
        <p className="z-10  pt-10 max-w-5xl w-auto items-center justify-between font-mono text-sm lg:flex">
          {answer}
        </p>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
    </main>
  );
}
