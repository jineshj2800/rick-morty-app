import { useEffect, useState } from "react";

const useEpisodesByApi = (episodeApis) => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    if (!episodeApis) return;
    const promises = [];
    episodeApis.forEach((api) =>
      promises.push(fetch(api).then((res) => res.json()))
    );

    Promise.all(promises)
      .then((responseArr) => {
        setEpisodes(responseArr);
      })
      .catch((error) => {
        throw error;
      });
  }, [episodeApis]);

  return { episodes };
};

export { useEpisodesByApi };
