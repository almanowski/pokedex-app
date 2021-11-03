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


//change from for to forEach() Loop - Exercise 1.5
pokemonList.forEach(function(pokemon){
  //if-else - adding comments about pokemon height
      if (pokemon.height > 1.0) {
          //div, h2, p for css
          document.write('<div class="pokemonlist__item">' +
              '<h2>' + pokemon.name + '</h2>' +
              '<ul>' + '<li>' + 'Height: ' + pokemon.height +
              ' - Wow, that\'s big!! ' + '</li>' +
              '<li>' + 'Type: ' + pokemon.types + '</li>' +
              '</ul>' + '</div>')
      } else if (pokemon.height > 0.5 && pokemon.height < 1.0) {
          document.write('<div class="pokemonlist__item">' +
              '<h2>' + pokemon.name + '</h2>' +
              '<ul>' + '<li>' + 'Height: ' + pokemon.height + '</li>' +
              '<li>' + 'Type: ' + pokemon.types + '</li>' +
              '</ul>' + '</div>')
      } else {
          document.write('<div class="pokemonlist__item">' +
              '<h2>' + pokemon.name + '</h2>' +
              '<ul>' + '<li>' + 'Height: ' + pokemon.height +
              ' - Smoll baby! ' + '</li>' +
              '<li>' + 'Type: ' + pokemon.types + '</li>' +
              '</ul>' + '</div>')
      }
});
