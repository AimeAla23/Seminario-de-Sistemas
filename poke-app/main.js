/*import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
*/
import './style.css'
import fetchPokemon from './src/services/api.js';

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const pokemonDisplay = document.getElementById('pokemon-display');
const pokemonD = document.getElementById('ala');/*aum */

searchButton.addEventListener('click', async () => {
    const query = searchInput.value.trim();
    if (!query) return; // No buscar si el input está vacío.
    console.log('test');
    try {
        const pokemon = await fetchPokemon('https://pokeapi.co/api/v2/pokemon/', query);
        displayPokemon(pokemon);
        displayPokemonSprites(pokemon); /*aum */

    } catch (error) {
        console.error("Error al buscar el Pokémon:", error);
    }
});

const  displayPokemon = (pokemon) => {
    pokemonDisplay.innerHTML = '';
    const pokemonName = document.createElement('h2');
    pokemonName.textContent = pokemon.name;
    pokemonDisplay.appendChild(pokemonName);
}
const  displayPokemonSprites = (pokemon) => { /*aum.*/
  pokemonD.innerHTML = '';
  const pokemonName = document.createElement('img');
  pokemonName.src = pokemon.sprites.front_default; /*back:trasera front:delantera*/
  pokemonD.appendChild(pokemonName);
}