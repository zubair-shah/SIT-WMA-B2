import { useState, useEffect } from "react";
import Pet from "./Pet";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

function SearchParams() {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [pets, setPets] = useState([]);
  console.log("Location:", location);
  console.log("animal:", animal);
  console.log("pets:", pets);

  useEffect(() => {
    requestPets();
  }, [location, animal])


  async function requestPets() {
    // & breed=${ breed }
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}`
    );
    const json = await res.json();
    console.log("json:", json);
    setPets(json.pets);
  }

  // const location = "Seattle, WA";
  return (
    <div className="search-params">
      <form>
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
        <button>Submit</button>
      </form>
      {pets.length === 0 ? (
        <h1>No pets found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            key={pet.id}
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
          />
        ))
      )}
      {/* Example Pet */}
      {/* <Pet name="Luna" animal="Dog" breed="Havanese" /> */}
    </div>
  )
}

export default SearchParams