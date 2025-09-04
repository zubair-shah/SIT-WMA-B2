async function fetchSearch({ queryKey }) {
  const { animal, location, breed } = queryKey[1];
  console.log('env', import.meta.env);
  let apiUrl = import.meta.env.VITE_API_URL_PRODUCTION;

  if (import.meta.env.DEV) {
    apiUrl = import.meta.env.VITE_API_URL_DEVELOPMENT;
  }
  const res = await fetch(
    `${apiUrl}/pets?animal=${animal}&location=${location}&breed=${breed}`
  );

  if (!res.ok)
    throw new Error(`pet search not okay: ${animal}, ${location}, ${breed}`);

  return res.json();
}

export default fetchSearch;