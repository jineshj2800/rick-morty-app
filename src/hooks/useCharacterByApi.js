import { useEffect, useState } from "react";

const useCharacterByApi = (characterApis) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    if (!characterApis) return;
    const promises = [];
    characterApis.forEach((api) =>
      promises.push(fetch(api).then((res) => res.json()))
    );

    Promise.all(promises)
      .then((responseArr) => {
        setCharacters(responseArr);
      })
      .catch((error) => {
        throw error;
      });
  }, [characterApis]);

  return { characters };
};

export { useCharacterByApi };
