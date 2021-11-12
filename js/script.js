//Wrapped pList in IIFE to avoid accidentally accessing the global state
const pokemonRepository = (function () {
    const pokemonList = [];
    //Call pokemon API - Exercise 1.7
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

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
        button.classList.add('pokemonlist__item', 'row', 'btn', 'btn-primary', 'list-group-item', 'list-group-item-action');
        button.setAttribute('data-toggle', 'modal');
        button.setAttribute('data-target', '#exampleModal');
        listPokemon.appendChild(button);
        list.appendChild(listPokemon);
        //Show Pokemondtails on click
        button.addEventListener('click', function() {
            showDetails(pokemon);
        });
    }

    //Calls pokemon name to add to button - Exercise 1.7
    function loadList() {
        return fetch(apiUrl).then(function (response){
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                const pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        });
    }

    //Calls details to show after click - Exercise 1.7
    function loadDetails(item) {
        const url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            item.imageURL = details.sprites.other['official-artwork']['front_default'];
            item.height = details.height;
            item.weight = details.weight;
            item.abilities = details.abilities;
            item.types = details.types;
        }).catch(function (e) {
            console.error(e);
        });
    }

    //Show Pokemon attributes in modal - Exercise 1.8
    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            showModal(pokemon);
        });
    }

    //Add modalContainer
    function showModal(pokemon) {
        modalContainer.innerHTML = '';

        const titleElement = document.createElement('h1');
        titleElement.innerText = pokemon.name;

        const imgElement = document.createElement('img');
        imgElement.src = pokemon.imageURL;

        const contentElementH = document.createElement('p');
        contentElementH.innerText = ('Height: ') + pokemon.height + ('cm');

        const contentElementW = document.createElement('p');
        contentElementW.innerText = ('Weight: ') + pokemon.weight + ('00g');

        modal.appendChild(closeButtonElement);
        modal.appendChild(titleElement);
        modal.appendChild(imgElement);

        pokemon.types.forEach(pokemon => {
            //add paragraphs to display types of pokemon
            const contentElementsT = document.createElement('p');
            contentElementsT.innerText = pokemon.type.name;
            contentElementsT.classList.add('type');
            modal.appendChild(contentElementsT);
        })

        modal.appendChild(contentElementH);
        modal.appendChild(contentElementW);

        //add abilites with comma
        const contentElementsA = document.createElement('p');
        contentElementsA.innerText = ('Abilities: ') +
        pokemon.abilities.map((ability) => ability.ability.name).join(', ')

    }


    //Access the above functions outside of pokemonRepository
    return {
        add: add,
        getAll: getAll,
        addListPokemon: addListPokemon,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
    };
}());



//Change from for to forEach() Loop - Exercise 1.5
pokemonRepository.loadList().then(function() {
    //Now the API data is loaded - Exercise 1.7
    pokemonRepository.getAll().forEach(function(pokemon) {
        //Displays addListPokemon - Exercise 1.6
        pokemonRepository.addListPokemon(pokemon);
    });
});
