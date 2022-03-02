import react from "react";
import Pokemon from "../../components/Pokemon";

const PokemonCSR = () => {
  const [pokemons, setPokemons] = react.useState([]);

  react.useEffect(async () => {
    const response = await fetch(process.env.NEXT_PUBLIC_POKEAPI_URL);
    const { results } = await response.json();

    const pokeList = results.map(async (pokemon) => {
      const pokelink = await fetch(pokemon.url);
      const { id, name, sprites } = await pokelink.json();
      return { id, name, sprites };
    });
    setPokemons(await Promise.all(pokeList));
  }, []);

  return (
    <>
      {pokemons.map((pokemon) => (
        <Pokemon pokemon={pokemon} key={pokemon.id} />
      ))}
    </>
  );
};

export default PokemonCSR;
