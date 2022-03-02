import Image from "next/image";

const Pokemon = (pokemon) => {
  return (
    <>
      <div>
        <h2>{pokemon.name}</h2>
      </div>
      <div>
        <Image
          src={pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.name}
          layout="fill"
        />
      </div>
      <div>
        <h2>{pokemon.name}</h2>
      </div>
    </>
  );
};

export default Pokemon;
