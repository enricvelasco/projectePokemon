// objetiu: montar el pokemonCustomList amb cada pokemon amb nom, weight i order

// API_URL: https://pokeapi.co/


const originalPokemonsURL = 'https://pokeapi.co/api/v2/pokemon?limit=150&offset=0';
const pikachuDataURL = 'https://pokeapi.co/api/v2/pokemon/25/';
const pikachuImageURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png';


const pokemonCustomList = []

function getAllPokemons () {
	return new Promise(function (resolve, reject) {
		fetch('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0')
			.then(function (res) { return res.json() })
			.then(function(response) {
				resolve(response)

			})
	})
}


function getPikachuData () {
	return new Promise(function (resolve){
		fetch('https://pokeapi.co/api/v2/pokemon/25/')
			.then(function(res) {return res.json()})
			.then(function(response) {
				resolve(response)
			})
	})
}


function getPokemonData (pokemonURL) {
	return new Promise(function (resolve){
		fetch(pokemonURL)
			.then(function(res) {return res.json()})
			.then(function(response) {
				resolve(response)
			})
	})
}




getAllPokemons().then(function(response) {
	const allPokemonList = response.results

	for (var i = 0; i < allPokemonList.length; i++) {
		const pokemon = allPokemonList[i]
		getPokemonData(pokemon.url).then(function (pokemonData) {
			console.log('POKEMON_DATA', pokemonData)
			pokemonCustomList.push(pokemonData.name)
			pokemonCustomList.push(pokemonData.order)
			pokemonCustomList.push(pokemonData.weight)
		})
	}
})
console.log(pokemonCustomList)

/* getPikachuData().then(function(response) {
	console.log('PIKACHU_DATA', response)
}) */
