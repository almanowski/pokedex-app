//Wrapped pList in IIFE to avoid accidentally accessing the global state
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

    //Adding Buttons/Listitems for HTML <ul> - Exercise 1.6
    function addListPokemon(pokemon) {
        const list = document.querySelector('.pokemonlist');
        const listPokemon = document.createElement('li');
        const button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('pokemonlist__item');
        listPokemon.appendChild(button);
        list.appendChild(listPokemon);
        //Show Pokemondtails on click
        button.addEventListener('click', function() {
            showDetails(pokemon);
        });
    }

    //Show Pokemon attributes in console
    function showDetails(pokemon) {
        console.log(pokemon);
    }

    //Access the above functions outside of pokemonRepository
    return {
        add: add,
        getAll: getAll,
        addListPokemon: addListPokemon
    };
}());


//Add new Pokemon
pokemonRepository.add({
    name: 'Pikachu',
    height: 0.4,
    types: ['electric']
});


//Change from for to forEach() Loop - Exercise 1.5
pokemonRepository.getAll().forEach(function (pokemon) {
    //Displays addListPokemon - Exercise 1.6
    pokemonRepository.addListPokemon(pokemon);
});
