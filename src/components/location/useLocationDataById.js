import { useState, useEffect } from "react";

const useLocationDataById = (locationId) => {
  const [location, setLocation] = useState();
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/location/" + locationId)
      .then((response) => response.ok && response.json())
      .then((data) => setLocation(data))
      .catch((error) => {
        throw error;
      });
  }, [locationId]);

  return { location };
};

export { useLocationDataById };
