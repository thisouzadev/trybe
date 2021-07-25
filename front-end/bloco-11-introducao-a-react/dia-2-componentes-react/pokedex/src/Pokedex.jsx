import React from 'react';
import Pokemon from './Pokemon';

export class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;

    return (
      <div className="pokedex">
        {pokemons.map(pokemon => <Pokemon key={pokemons.id} pokemon={pokemon} />)}
      </div>
    )
  }
}

export default Pokedex

