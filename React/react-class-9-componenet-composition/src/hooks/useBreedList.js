import { useState, useEffect } from "react";

function useBreedList(animal) {
  console.log("useBreedList called with animal:", animal);
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");
  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else {
      requestBreedList();
    }
    async function requestBreedList() {
      setStatus("loading");
      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      )
      const json = await res.json();
      // console.log("json:", json);
      const breedList = json.breeds || [];
      setBreedList(breedList);
      setStatus("loaded");
    }

  }, [animal]);
  console.log("breedList:", breedList);

  return [breedList, status];
}

export default useBreedList