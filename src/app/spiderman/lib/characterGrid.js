// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image"; // Assuming you're using Next.js

// export default function CharacterGrid() {
//   const [selectedCharacter, setSelectedCharacter] = useState(null);
//   const [isMobile, setIsMobile] = useState(false);

//   // Determine if the device is mobile
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768); // Mobile if screen width <= 768px
//     };

//     handleResize(); // Initial check
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleClick = (character) => {
//     setSelectedCharacter(character);
//   };

//   const closeModal = () => {
//     setSelectedCharacter(null);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen">
//       <h1 className="text-5xl font-bold text-white mb-8">Spider-Man Characters</h1>
//       <div className="flex overflow-x-auto space-x-4 p-4">
//         {spiderManCharacters.map((character, index) => (
//           <div
//             key={index}
//             className="relative bg-gray-700 rounded-lg shadow-lg transition-transform transform hover:scale-110 cursor-pointer w-64"
//             onClick={() => handleClick(character)}
//           >
//             <Image
//               src={character.imageUrl}
//               alt={character.name}
//               width={300}
//               height={300}
//               className="rounded-lg"
//             />
//             <div className="p-4">
//               <h2 className="text-xl font-bold text-white">{character.alias}</h2>
//               <p className="text-gray-300">{character.name}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {selectedCharacter && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
//           <div className="bg-gray-800 rounded-lg p-6 max-w-md w-full">
//             <button onClick={closeModal} className="absolute top-2 right-2 text-white text-2xl">
//               &times;
//             </button>
//             <h2 className="text-3xl font-bold text-white">{selectedCharacter.name}</h2>
//             <h3 className="text-lg text-gray-400">Alias: <span className="font-semibold">{selectedCharacter.alias}</span></h3>
//             <h4 className="font-semibold text-lg text-white">Abilities:</h4>
//             <ul className="list-disc list-inside space-y-1 mb-4 text-gray-300">
//               {selectedCharacter.abilities.map((ability, i) => (
//                 <li key={i}>{ability}</li>
//               ))}
//             </ul>
//             <h4 className="font-semibold text-lg text-white">Backstory:</h4>
//             <p className="leading-relaxed text-base text-gray-300">{selectedCharacter.backstory}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }