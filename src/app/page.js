"use client";

import { useState } from "react";
import { getCharacterInfo } from "./lib/data";
import { motion } from 'framer-motion';
import CharacterGrid from "./lib/characterGrid";




export default function Home(getPsnAccess) {
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
    <main className="flex min-h-screen flex-col items-center justify-start p-4 md:p-12 overflow-visible">
    <section className="p-4 md:p-0 sm:p-0 bg-gray-800 bg-opacity-60 rounded-xl shadow-lg mb-8">
      <CharacterGrid />
    </section>
  
    <div className="w-full max-w-4xl relative flex place-items-center">
    
    </div>
  
    <div className="flex flex-col items-center justify-center text-center max-w-7xl w-full  mb-16 md:mb-32">
      <input
        className="mb-5 w-96 h-10 px-3 py-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline cursor-pointer focus:outline-none"
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask a question about Spider-Man..."
      />
  
      <button
        type="submit"
        onClick={handleQuestion}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-96 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <p className="z-10 pt-10 max-w-7xl w-full font-mono text-sm lg:flex">
        {answer}
      </p>
      </div>
    </div>
  
  </main>
    );
}
