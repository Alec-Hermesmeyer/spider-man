"use client";
import Link from "next/link";
import { getCharacterInfo } from "./lib/data";
import { spiderManCharacters } from "./lib/data";
import Image from "next/image";

function CharacterGrid() {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
      {spiderManCharacters.map((character, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out"
        >
          <Image
            src={character.imageUrl}
            alt={character.name}
            height="400"
            width="800"
             // Changed to fill to cover the div
            className="object-contain" // Added 'object-cover' to maintain aspect ratio
          />
          <div className="p-4 bg-blue-600">
            <h2 className="text-lg font-bold">{character.alias}</h2>
            <p className="text-gray-200">{character.name}</p>
            <p className="text-gray-200 gap-x-2">{character.abilities}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Component() {
  return (
    <section className="w-[100dvw] py-12 md:py-24 lg:py-32 flex items-center justify-center bg-red-600">
      <div className="container grid gap-12 px-4 md:px-6">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Characters
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Explore the diverse cast of characters from the Spider-Man 2 video
            game.
          </p>
        </div>
        <CharacterGrid />
      </div>
    </section>
  );
}
