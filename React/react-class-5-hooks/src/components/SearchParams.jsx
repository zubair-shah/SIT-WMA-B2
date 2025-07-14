import { useState } from "react";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

function SearchParams() {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  console.log("Location:", location);
  console.log("animal:", animal);
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
    </div>
  )
}

export default SearchParams