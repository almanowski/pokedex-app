//Wrapped pList in IIFE to avoid accidentally accessing the global state
const pokemonRepository = (function () {
    const pokemonList = [];

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



//Change from for to forEach() Loop - Exercise 1.5
pokemonRepository.getAll().forEach(function (pokemon) {
    //Displays addListPokemon - Exercise 1.6
    pokemonRepository.addListPokemon(pokemon);
});
