'use server';
import axios from 'axios';

const key = process.env.MARVEL_PUBLIC_KEY
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
    console.log(response);
  };
export default class Button extends React.Component {
    
    render(){
        return (
            <button type='submit' onClick={handleQuestion} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
        )
    }
}