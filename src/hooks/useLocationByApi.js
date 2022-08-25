import { useEffect, useState } from "react";

const useLocationByApi = (locationApis) => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    if (!locationApis) return;
    const promises = [];
    locationApis.forEach((api) =>
      promises.push(fetch(api).then((res) => res.json()))
    );

    Promise.all(promises)
      .then((responseArr) => {
        setLocations(responseArr);
      })
      .catch((error) => {
        throw error;
      });
  }, [locationApis]);

  return { locations };
};

export { useLocationByApi };
