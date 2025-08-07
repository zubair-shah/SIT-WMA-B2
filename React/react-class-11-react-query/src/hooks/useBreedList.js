import { useState, useEffect } from "react";
import fetchBreedList from "../services/fetchBreedList";
import { useQuery } from "@tanstack/react-query";
function useBreedList(animal) {

  const results = useQuery(["breeds", animal], fetchBreedList);
  console.log("useBreedList results:", results);

  return [results?.data?.breeds ?? [], results.status];


  // console.log("useBreedList called with animal:", animal);
  // const [breedList, setBreedList] = useState([]);
  // const [status, setStatus] = useState("unloaded");
  // useEffect(() => {
  //   if (!animal) {
  //     setBreedList([]);
  //   } else {
  //     requestBreedList();
  //   }


  // }, [animal]);
  // console.log("breedList:", breedList);

  // return [breedList, status];
}

export default useBreedList