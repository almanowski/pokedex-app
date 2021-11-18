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
        button.classList.add('pokemonlist__item', 'list-group-item','list-group-item-action');
        button.setAttribute('data-toggle', 'modal');
        button.setAttribute('data-target', '#exampleModal');
        //Show Pokemondtails on click
        listPokemon.appendChild(button);
        list.appendChild(listPokemon);
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
            item.order = details.order;
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
        //bootstrap modal - Exercise 1.9
        const modalBody = document.querySelector('.modal-body');
        const modalTitle = document.querySelector('.modal-title');
        //add map/join for display purpose
        const mapAblities = pokemon.abilities.map(function(ability) {
          return ability.ability.name}).join(', ');

        modalBody.innerHTML = '';
        modalTitle.innerHTML = '';

        const pokemonOrder = document.createElement('h2');
        pokemonOrder.innerText = ('#') + pokemon.order;

        const pokemonName = document.createElement('h2');
        pokemonName.innerText = pokemon.name;
        pokemonName.classList.add('pokemonNanme');

        const pokemonImg = document.createElement('img');
        pokemonImg.src = pokemon.imageURL;

        const pokemonHeight = document.createElement('p');
        pokemonHeight.innerText = ('Height: ') + pokemon.height/10 + ('m');

        const pokemonWeight = document.createElement('p');
        pokemonWeight.innerText = ('Weight: ') + pokemon.weight/10 + ('kg');

        const pokemonAbilities = document.createElement('p');
        pokemonAbilities.innerText = ('Abilities: ') + mapAblities;

        modalTitle.appendChild(pokemonOrder);
        modalTitle.appendChild(pokemonName);
        modalBody.appendChild(pokemonImg);

        pokemon.types.forEach(function(pokemon) {
            //add paragraphs to display types of pokemon
            const pokemonType = document.createElement('p');
            pokemonType.innerText = pokemon.type.name;
            pokemonType.classList.add('type', pokemon.type.name);
            modalBody.appendChild(pokemonType);
        });

        modalBody.appendChild(pokemonHeight);
        modalBody.appendChild(pokemonWeight);
        modalBody.appendChild(pokemonAbilities);
    }

    //Add searchbar
    let pokemonSearchBar = document.querySelector('#searchbar');

    pokemonSearchBar.addEventListener('input', function() {
        let pokemonItem = document.querySelectorAll('li');
        let filter = pokemonSearchBar.value.toUpperCase();

        pokemonItem.forEach(function(pokemon) {
            if (pokemon.innerText.toUpperCase().indexOf(filter) < 0) {
                pokemon.style.display = 'none';
            } else {
                pokemon.style.display = '';
            }
        });
    });

    //Access the above functions outside of pokemonRepository
    return {
        add: add,
        getAll: getAll,
        addListPokemon: addListPokemon,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
    };
})();



//Change from for to forEach() Loop - Exercise 1.5
pokemonRepository.loadList().then(function() {
    //Now the API data is loaded - Exercise 1.7
    pokemonRepository.getAll().forEach(function(pokemon) {
        //Displays addListPokemon - Exercise 1.6
        pokemonRepository.addListPokemon(pokemon);
    });
});



//Add scroll to top Button
const scrollButton = document.querySelector('.top-button');

//When the user scrolls down 20px from the top of the document, show the Button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = 'block';
  } else {
    scrollButton.style.display = 'none';
  }
}

//When the user clicks on the button, scroll to the top of the documentElement
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

scrollButton.addEventListener('click', function() {
    topFunction();
});
