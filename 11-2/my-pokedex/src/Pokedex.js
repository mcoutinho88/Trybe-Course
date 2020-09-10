import React, { Component } from 'react'
import Pokemon from './Pokemon'
import data from './data'

export class Pokedex extends Component {
  render() {
    return (
      <>
        <h1 className='title' >Pokedex</h1>
        <div className='pokemon-container'>
          {data.map(pokemon => (
            <Pokemon data={pokemon} key={pokemon.id} />
          ))}
        </div>
      </>
    )
  }
}

export default Pokedex
