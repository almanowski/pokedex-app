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


//Loop for pokemonlist array
for (let i = 0; i < pokemonList.length; i++) {
    //if-else - adding comments about pokemon height
    if (pokemonList[i].height > 1.0) {
        //div, h2, p for css
        document.write('<div class="pokemonlist__item">' +
            '<h2>' + pokemonList[i].name + '</h2>' +
            '<ul>' + '<li>' + 'Height: ' + pokemonList[i].height +
            ' - Wow, that\'s big!! ' + '</li>' +
            '<li>' + 'Type: ' + pokemonList[i].types + '</li>' +
            '</ul>' + '</div>')
    } else if (pokemonList[i].height > 0.5 && pokemonList[i].height < 1.0) {
        document.write('<div class="pokemonlist__item">' +
            '<h2>' + pokemonList[i].name + '</h2>' +
            '<ul>' + '<li>' + 'Height: ' + pokemonList[i].height + '</li>' +
            '<li>' + 'Type: ' + pokemonList[i].types + '</li>' +
            '</ul>' + '</div>')
    } else {
        document.write('<div class="pokemonlist__item">' +
            '<h2>' + pokemonList[i].name + '</h2>' +
            '<ul>' + '<li>' + 'Height: ' + pokemonList[i].height +
            ' - Smoll baby! ' + '</li>' +
            '<li>' + 'Type: ' + pokemonList[i].types + '</li>' +
            '</ul>' + '</div>')
    }
}
