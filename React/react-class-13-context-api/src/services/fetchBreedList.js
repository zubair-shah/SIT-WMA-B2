

export default async function requestBreedList({ queryKey }) {
  const animal = queryKey[1];
  const res = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  )
  return res.json();
  // console.log("json:", json);

}