import { useState, useEffect } from "react";

import { useEpisodesByApi } from "../../hooks/useEpisodeByApi";

const useCharacterDataById = (characterId) => {
  const [character, setCharacter] = useState();
  // const { episodes } = useEpisodesByApi(character && character.episode);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/" + characterId)
      .then((response) => response.ok && response.json())
      .then((data) => setCharacter(data))
      .catch((error) => {
        throw error;
      });
  }, [characterId]);

  return { character };
};

export { useCharacterDataById };
