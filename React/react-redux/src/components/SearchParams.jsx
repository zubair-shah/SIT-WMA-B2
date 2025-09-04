import { useState, useEffect, useContext } from "react";
import Pet from "./Pet";
import useBreedList from "../hooks/useBreedList";
import Results from "./Results";
import Button from '@mui/material/Button';
import { useQuery } from "@tanstack/react-query";
import fetchSearch from "../services/fetchSearch";
import AdoptedPetContext from "../context/AdoptedPetContext";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

function SearchParams() {
  // const [location, setLocation] = useState("");
  const [animalForBreed, setAnimal] = useState("");
  // add at top of SearchParams render function
  const [adoptedPet] = useContext(AdoptedPetContext);
  // const [breed, setBreed] = useState("");
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  const [breeds, status] = useBreedList(animalForBreed || requestParams.animal);
  // const [pets, setPets] = useState([]);
  const results = useQuery(["search", requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];

  return (
    <div className="search-params">
      <form onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const obj = {
          animal: formData.get("animal") ?? "",
          breed: formData.get("breed") ?? "",
          location: formData.get("location") ?? "",
        };
        setRequestParams(obj);
        console.log("formData:", formData.get("animal"));
        console.log("formData:", formData.get("location"));
        console.log("formData:", formData.get("breed"));
      }}>


        {
          adoptedPet ? (
            <div className="pet image-container">
              <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
            </div>
          ) : null // you have to remove this semi-colon, my auto-formatter adds it back if I delete it
        }


        <label htmlFor="location">
          Location
          <input id="location" name="location"
            // value={requestParams.location}
            placeholder="Location" />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animalForBreed}
            name="animal"
            onChange={(e) => setAnimal(e.target.value)}
          >

            <option value="">Select an option</option>
            {/* <option value="dog">Dog</option>
            <option value="cat">Cat</option> */}
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            // value={requestParams.breed}
            name="breed"
          // onChange={(e) => setRequestParams({})}
          // disabled={!requestParams.breed}
          >

            <option value="">{status === "loading" ? "Loading..." : "Select an option"}</option>
            {/* <option value="dog">Dog</option>
            <option value="cat">Cat</option> */}
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
        {/* <Button variant="contained" color="error">Submit</Button> */}
      </form>
      <Results pets={pets} />
    </div>
  )
}

export default SearchParams