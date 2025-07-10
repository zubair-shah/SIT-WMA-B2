import Breed from './Breed';

function Pet({ name, age, breed }) {
  // console.log(props);
  return (
    <div>
      <h2>My name is {name} and My age is {age}</h2>

      <Breed breed={breed} />
    </div>
  );
}

export default Pet;