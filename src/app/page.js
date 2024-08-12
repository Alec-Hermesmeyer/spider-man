"use client";
import Image from "next/image";
import { useState } from "react";
import axios from 'axios';


export default function Home() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const key = process.env.MARVEL_PRIVATE_KEY

     const fetchMarvelData = async (characterName) => {
        try {
          const response = await axios.get(`https://gateway.marvel.com/v1/public/characters`, {
            params: {
              name: characterName,
              apikey: key, // Replace with your actual Marvel API key
            },
          });
    
          const character = response.data.data.results[0];
          if (character) {
            return character.description || 'No description available for this character.';
          } else {
            return 'Character not found.';
          }
        } catch (error) {
          console.error('Error fetching data from Marvel API:', error);
          return 'Failed to retrieve data. Please try again later.';
        }
      };
    
      const handleQuestion = async () => {
        const characterName = 'Spider-Man'; // You can customize this based on the question
        const response = await fetchMarvelData(characterName);
        setAnswer(response);
        speak(response);
      };
    
      const speak = (text) => {
        const speech = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(speech);
      };
   
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center  lg:static lg:h-auto lg:w-auto lg:bg-none">
         
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full ">
        
      </div>
      <div className="flex flex-col items-center justify-center text-center">
        <input className="mb-5"
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask a question about Spider-Man..."
        >
        
        </input>
        <button type='submit' onClick={handleQuestion} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        
      </div>
    </main>
  );
}
