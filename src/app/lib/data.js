export function getCharacterInfo(characterName) {

  const spiderManCharacters = [
    {
      name: "Peter Parker",
      alias: "Spider-Man",
      abilities: [
        "Wall-crawling",
        "Super strength",
        "Spider-sense",
        "Web-shooting",
        "Enhanced agility",
        "Symbiote powers"
      ],
      backstory: "Peter Parker continues his role as Spider-Man, protecting New York City. In this game, Peter gains access to new symbiote powers, which enhance his abilities but also introduce new challenges, both physically and emotionally. Peter must balance these new powers with the responsibilities of being a hero and maintaining his personal relationships."
    },
    {
      name: "Miles Morales",
      alias: "Spin",
      abilities: [
        "Invisibility",
        "Bio-electric venom strike",
        "Wall-crawling",
        "Spider-sense",
        "Web-shooting",
        "Enhanced agility"
      ],
      backstory: "Miles Morales, the second Spider-Man, is still growing into his role as a superhero. He possesses unique abilities such as invisibility and bio-electric venom strikes. Miles faces the challenge of living up to the legacy of Peter Parker while also carving out his own identity as a hero."
    },
    {
      name: "Harry Osborn",
      alias: "Venom",
      abilities: [
        "Super strength",
        "Shape-shifting",
        "Web generation",
        "Symbiote healing",
        "Camouflage",
        "Enhanced agility"
      ],
      backstory: "In *Spider-Man 2*, Harry Osborn becomes Venom after bonding with the alien symbiote. This transformation creates a deep and emotional storyline, particularly due to Harry's close friendship with Peter Parker. As Venom, Harry possesses superhuman strength, rapid healing, and the ability to shape-shift. He struggles with the duality of his personality, torn between his humanity and the influence of the symbiote."
    },
    {
      name: "Sergei Kravinoff",
      alias: "Kraven the Hunter",
      abilities: [
        "Expert tracker",
        "Enhanced strength",
        "Master hunter",
        "Hand-to-hand combat",
        "Use of poisons and traps"
      ],
      backstory: "Kraven the Hunter is one of the primary antagonists in the game. Obsessed with proving himself as the world's greatest hunter, Kraven sets his sights on Spider-Man. His enhanced physical abilities, mastery of various weapons, and expert tracking skills make him a formidable opponent who relentlessly pursues both Peter and Miles."
    },
    {
      name: "Flint Marko",
      alias: "Sandman",
      abilities: [
        "Sand manipulation",
        "Shape-shifting",
        "Super strength",
        "Size alteration",
        "Density control"
      ],
      backstory: "Flint Marko, also known as Sandman, is another antagonist in *Spider-Man 2*. After an experiment gone wrong, Flint gained the ability to transform his body into sand, allowing him to shape-shift, alter his size, and control his density. Sandman’s powers make him a difficult and unpredictable foe."
    },
    {
      name: "Norman Osborn",
      alias: "Green Goblin",
      abilities: [
        "Genius intellect",
        "Goblin serum-enhanced strength",
        "Advanced technology and weapons",
        "Combat skills",
        "Glider flight"
      ],
      backstory: "Norman Osborn's presence looms large over the events of *Spider-Man 2*. Although he may not be a direct antagonist in this installment, his actions and decisions have a significant impact on the storyline, especially regarding his son Harry's transformation into Venom. Norman's history as the Green Goblin and his use of advanced technology continue to influence the narrative."
    },
    {
      name: "Martin Li",
      alias: "Mister Negative",
      abilities: [
        "Energy manipulation",
        "Corruption touch",
        "Dual personalities",
        "Healing powers"
      ],
      backstory: "Martin Li, also known as Mister Negative, is a complex character with dual personalities. He has the ability to manipulate Darkforce and Lightforce energy, which he uses to corrupt others or heal himself. His internal struggle between good and evil reflects in his actions and decisions, making him a morally gray character in the game."
    },
    {
      name: "Curt Connors",
      alias: "Lizard Man",
      abilities: [
        "Super strength",
        "Enhanced durability",
        "Regenerative healing",
        "Lizard physiology"
      ],
      backstory: "Dr. Curt Connors, after experimenting to regrow his lost arm, transforms into the Lizard, a monstrous being with superhuman strength, durability, and regenerative abilities. His transformation is tragic, as it leads him to lose control and become a threat to those he once sought to protect."
    },
    {
      name: "Felicia Hardy",
      alias: "Black Cat",
      abilities: [
        "Expert Thief",
        "Enhanced Agility",
        "Martial Arts",
        "Reflexes",
        "Use of Gadgets and Traps",
        "Probability Manipulation (Bad Luck Aura)"
      ],
      backstory: "Felicia Hardy, the daughter of renowned cat burglar Walter Hardy, was raised in a life of wealth and privilege. However, after experiencing a traumatic event during her college years, Felicia dedicated herself to becoming as strong and skilled as possible. She trained in various forms of martial arts, gymnastics, and acrobatics, and eventually followed in her father's footsteps to become the notorious thief known as Black Cat.\n\nBlack Cat initially crossed paths with Spider-Man as an adversary, but over time, their relationship became more complex, shifting between romance, rivalry, and uneasy alliance. Felicia's moral compass is often ambiguous; she is driven by her own code of honor rather than societal norms, which sometimes puts her at odds with both heroes and villains.\n\nDespite her criminal career, Black Cat has a complicated relationship with Spider-Man. She deeply cares for him and has, at times, fought alongside him against common enemies. However, her desire for independence and her unwillingness to conform to the role of a traditional hero often leads her down a more self-serving path."
    },
    {
      name: "Nox Anthony Hermesmeyer",
      alias: "Cheesy Weiner",
      abilities: [
        "Super whiny",
        "Enhanced farts",
        "Tantrum throwing",
        "Little wiener",
      ],
      backstory: "Born in Panama City Beach, Nox now lives in Texas with his dad, Mimi and Popo. He is the smartest, bravest, kindest, and most loving boy there ever was. He is my bestfriend in the world and I love Him more than anything."
    }
  ];
  const character = spiderManCharacters.find((char) =>
    char.name.toLowerCase() === characterName.toLowerCase() ||
    char.alias.toLowerCase() === characterName.toLowerCase()
  );

  if (character) {
    const textContent = `
      Name: ${character.name}
      Alias: ${character.alias}
      Abilities: ${character.abilities.join(", ")}
      Backstory: ${character.backstory}
    `;

    const renderedComponent = (
      <div className="p-6 bg-gray-800 bg-opacity-60 rounded-xl shadow-lg">
      <div className="flex flex-col md:flex-row md:space-x-8">
        {/* Left Column: Character Name, Alias, and Abilities */}
        <div className="md:w-1/2">
          <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-4 mb-6">
            <div>
              <h2 className="text-3xl pl-0 md:pl-12 font-bold text-white">{character.name}</h2>
              <h3 className="text-lg text-gray-300">
                Alias: <span className="font-semibold text-white">{character.alias}</span>
              </h3>
            </div>
          </div>
    
          <div className="pl-0 md:pl-12">
            <h4 className="text-xl text-blue-400 font-semibold mb-2">Abilities:</h4>
            <ul className="list-disc text-lg pl-6 md:pl-12 text-left list-inside text-gray-300 space-y-1">
              {character.abilities.map((ability, index) => (
                <li key={index}>{ability}</li>
              ))}
            </ul>
          </div>
        </div>
    
        {/* Right Column: Backstory */}
        <div className="md:w-1/2 pb-6 md:pb-32 pt-4 md:pt-20 pr-0 md:pr-12">
          <h4 className="text-xl text-blue-400 font-semibold mb-2">Backstory:</h4>
          <p className="text-gray-300 text-lg leading-relaxed">{character.backstory}</p>
        </div>
      </div>
    </div>
    
    );

    return { textContent, renderedComponent };
  } else {
    const textContent = `Character ${characterName} not found.`;
    const renderedComponent = (
      <div class="w-96 p-4 bg-red-100 text-red-700 rounded-lg shadow-md">
        Character {characterName} not found.
      </div>
    );

    return { textContent, renderedComponent };
  }
}
  