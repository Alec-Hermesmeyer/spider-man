"use client";

import { useState } from "react";
import { getCharacterInfo } from "./lib/data";

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
      <section className="mb-8 p-4 bg-blue-50 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-blue-600 mb-2 text-center">About the Spider-Man 2 Q&A App</h2>
        <p className="text-gray-700 mb-4">
          Welcome to the Spider-Man 2 Q&amp;A app! This app allows you to dive deep into the characters of the Spider-Man 2 video game. Whether you&apos;re curious about Peter Parker, Miles Morales, or any of their formidable foes, just type a question and get instant answers about their abilities, backstory, and more.
        </p>
        <p className="text-gray-700">
          Simply enter the name or alias of your favorite character in the input below, select whether you want to search by their real name or superhero identity, and click &quot;Submit&quot; to reveal the information. Enjoy exploring the Spider-Verse!
        </p>
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
        <p className="z-10  pt-10 max-w-5xl w-auto items-center justify-between font-mono text-sm lg:flex">{answer}</p>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
    </main>
  );
}
