"use client";
import { useEffect, useState } from "react";
import { spiderManCharacters } from "../lib/data";
import Image from "next/image";

export default function CharacterGrid() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the screen size is mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile if screen width <= 768px
    };

    // Initial check
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (character) => {
    setSelectedCharacter(character === selectedCharacter ? null : character);
  };

  const sortedCharacters = isMobile
    ? spiderManCharacters // Don't sort on mobile
    : spiderManCharacters.sort((a, b) => (a.name < b.name ? -1 : 1));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-2 sm:p-4 md:p-6">
      {sortedCharacters.map((character, index) => (
        <div
          key={index}
          className={`relative p-2 sm:p-4 transition-all duration-300 transform ${
            selectedCharacter === character
              ? "col-span-1 sm:col-span-2 md:col-span-3 scale-105 z-10"
              : "hover:scale-105"
          } ${selectedCharacter === character ? "order-first" : ""}`}
          style={{
            margin: selectedCharacter === character ? "20px 0" : "0",
            transform: selectedCharacter === character ? "scale(1.05)" : "scale(1)",
          }}
          onClick={() => handleClick(character)}
        >
          <div className="relative group">
            <Image
              src={character.imageUrl}
              alt={character.name}
              width={500}
              height={500}
              priority
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{character.alias}</h2>
            </div>
          </div>
          {selectedCharacter === character && (
            <div className="absolute inset-0 p-4 sm:p-6 bg-gray-900 bg-opacity-90 rounded-lg text-white overflow-y-auto transition-all duration-300 max-h-screen">
              <button
                onClick={() => setSelectedCharacter(null)}
                className="absolute top-2 right-2 md:top-4 md:right-4 text-white text-xl md:text-2xl font-bold z-20"
              >
                &times;
              </button>
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 h-full">
                <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                  <Image
                    src={character.imageUrl}
                    alt={character.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center p-4 sm:p-6 space-y-4">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">{character.name}</h2>
                  <h3 className="text-lg sm:text-xl md:text-2xl">
                    Alias: <span className="font-semibold">{character.alias}</span>
                  </h3>
                  <h4 className="text-md sm:text-lg md:text-xl font-semibold">Abilities:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {character.abilities.map((ability, i) => (
                      <li key={i}>{ability}</li>
                    ))}
                  </ul>
                  <h4 className="text-md sm:text-lg md:text-xl font-semibold">Backstory:</h4>
                  <p className="leading-relaxed">{character.backstory}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}