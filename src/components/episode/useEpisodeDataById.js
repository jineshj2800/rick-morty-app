import { useState, useEffect } from "react";

const useEpisodeDataById = (episodeId) => {
  const [episode, setEpisode] = useState();
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode/" + episodeId)
      .then((response) => response.ok && response.json())
      .then((data) => setEpisode(data))
      .catch((error) => {
        throw error;
      });
  }, [episodeId]);

  return { episode };
};

export { useEpisodeDataById };
