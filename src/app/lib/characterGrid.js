"use client";
import { useState } from "react";
import { spiderManCharacters } from "../lib/data";
import Image from "next/image";

export default function CharacterGrid() {
    const [selectedCharacter, setSelectedCharacter] = useState(null);
  
    const handleClick = (character) => {
      setSelectedCharacter(character === selectedCharacter ? null : character);
    };
  
    return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-6">
      {spiderManCharacters
        .map((character, index) => (
          <div
            key={index}
            className={`relative p-4 transition-all duration-300 transform ${
              selectedCharacter === character
                ? "col-span-2 md:col-span-3 row-span-2 md:row-span-3 scale-105 z-10"
                : "hover:scale-105"
            } ${selectedCharacter === character ? "order-first" : ""}`}
            onClick={() => handleClick(character)}
          >
            <div className="relative group">
              <Image
                src={character.imageUrl}
                alt={character.name}
                width={500}
                height={500}
                priority
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h2 className="text-2xl font-bold text-white">{character.alias}</h2>
              </div>
            </div>
            {selectedCharacter === character && (
              <div className="absolute inset-0 p-6 bg-gray-900 bg-opacity-90 rounded-lg text-white overflow-auto transition-all duration-300">
                <button
                  onClick={() => setSelectedCharacter(null)}
                  className="absolute top-4 right-4 text-white text-2xl font-bold"
                >
                  &times;
                </button>
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                  <div className="w-full md:w-1/2">
                    <Image
                      src={character.imageUrl}
                      alt={character.name}
                      width={500}
                      height={500}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <h2 className="text-4xl font-bold mb-4">{character.name}</h2>
                    <h3 className="text-2xl mb-4">
                      Alias: <span className="font-semibold">{character.alias}</span>
                    </h3>
                    <h4 className="text-xl font-semibold mb-2">Abilities:</h4>
                    <ul className="list-disc list-inside mb-4 space-y-1">
                      {character.abilities.map((ability, i) => (
                        <li key={i}>{ability}</li>
                      ))}
                    </ul>
                    <h4 className="text-xl font-semibold mb-2">Backstory:</h4>
                    <p className="leading-relaxed">{character.backstory}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))
        .sort((a, b) => (a.props.className.includes("order-first") ? -1 : 0))}
    </div>
  );
}