//Wrapped pokemonList in an IIFE to avoid accidentally accessing the global state
const pokemonRepository = (function () {
const pokemonList = [{
        name: 'Bulbasaur',
        height: 0.7,
        types: ['grass', 'poison']
    },
    {
        name: 'Butterfree',
        height: 1.1,
        types: ['bug', 'flying']
    },
    {
        name: 'Eevee',
        height: 0.3,
        types: ['normal']
    }
];

//Access pokemonList
function getAll() {
  return pokemonList;
}

//Add pokemon to the pokemonList
function add(pokemon) {
  pokemonList.push(pokemon);
}

//Access the above functions outside of pokemonRepository
return {
  add: add,
  getAll: getAll(),
};
})();


//Add new Pokemon
pokemonRepository.add({
    name: 'Pikachu',
    height: 0.4,
    types: ['electric']
});


//Change from for to forEach() Loop - Exercise 1.5
pokemonRepository.getAll().forEach(function(pokemon) {
    const pName = '<h2>' + pokemon.name + '</h2>';
    const pHeight = 'Height: ' + pokemon.height;
    const pHeightAdd = ' - Wow, that\'s big!!';
    const pType = 'Type: ' + pokemon.types;

    //if-else - adding comments about pokemon height
    if (pokemon.height > 1.0) {
        document.getElementById("pokemonlist").innerHTML +=
            '<li class="pokemonlist__item">' +
            pName + pHeight + pHeightAdd + '<br>' + pType +
            '</li>';
    } else {
        document.getElementById("pokemonlist").innerHTML +=
            '<li class="pokemonlist__item">' +
            pName + pHeight + '<br>' + pType +
            '</li>';
    }
});
