async function getData() {
    let response = await fetch("pokemon.json")
    let data = await response.json()
    return data
}

function getHtml (aPokemon) {
    return `
    <div class="a-pokemon">
        <div class="a-pokemon-id">${aPokemon.id}</div>
        <div class="a-pokemon-name">${aPokemon.name.english}</div>
        <div class="a-pokemon-type">${aPokemon.type.join(' / ')}</div>
        
        <div class="a-pokemon-stat">${aPokemon.base.HP}</div>
        <div class="a-pokemon-stat">${aPokemon.base.Attack}</div>
        <div class="a-pokemon-stat">${aPokemon.base.Defense}</div>
        <div class="a-pokemon-stat">${aPokemon.base.Speed}</div>

        <div class="a-pokemon-lang">${aPokemon.name.japanese}</div>
        <div class="a-pokemon-lang">${aPokemon.name.chinese}</div>
        <div class="a-pokemon-lang">${aPokemon.name.french}</div>
    </div>
    `
}

function displayAllPokemon(allPokemon) {
    document.getElementById("gridbox").innerHTML = allPokemon.map(pokemon => getHtml(pokemon)).join("")
}

getData().then(allPokemon => displayAllPokemon(allPokemon))

