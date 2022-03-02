import Pokemon from "../../components/Pokemon";

const PokemonsSSG = ({ pokemons }) => {
  return (
    <>
      {pokemons.map((pokemon) => (
        <Pokemon pokemon={pokemon} key={pokemon.id} />
      ))}
    </>
  );
};

export const getStaticProps = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_HEROKU_URL);
  const pokemons = await response.json();

  return {
    props: { pokemons },
  };
};

export default PokemonsSSG;
