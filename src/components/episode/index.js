import React from "react";

import { useParams } from "react-router-dom";
import { useEpisodeDataById } from "./useEpisodeDataById";

const Episode = () => {
  const { episodeId } = useParams();
  const { episode } = useEpisodeDataById(episodeId);
  return (
    episode && (
      <div>
        <h1>{episode.name}</h1>
      </div>
    )
  );
};

export default Episode;
