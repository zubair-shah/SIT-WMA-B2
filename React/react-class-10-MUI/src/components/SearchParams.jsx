import { useState, useEffect } from "react";
import Pet from "./Pet";
import useBreedList from "../hooks/useBreedList";
import Results from "./Results";
import Button from '@mui/material/Button';

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

function SearchParams() {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [breeds, status] = useBreedList(animal);
  const [pets, setPets] = useState([]);

  // console.log("Location:", location);
  // console.log("animal:", animal);
  // console.log("breed:", breed);
  // console.log("pets:", pets);

  useEffect(() => {
    requestPets();
  }, [])





  async function requestPets() {
    // & breed=${ breed }
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    // console.log("json:", json);
    setPets(json.pets);
  }
  // console.log("breeds:", breeds);
  // const location = "Seattle, WA";
  console.log("status:", status);
  return (
    <div className="search-params">
      <form onSubmit={(e) => {
        e.preventDefault();
        requestPets();
      }}>
        <label htmlFor="location">
          Location
          <input id="location" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              // setBreed("");
            }}
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
            value={breed}
            disabled={!animal}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
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
        {/* <button>Submit</button> */}
        <Button variant="contained" color="error">Submit</Button>
      </form>
      <Results pets={pets} />
    </div>
  )
}

export default SearchParams