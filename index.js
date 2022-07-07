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
        
        <div class="a-pokemon-stat1">${aPokemon.base.HP}</div>
        <div class="a-pokemon-stat2">${aPokemon.base.Attack}</div>
        <div class="a-pokemon-stat3">${aPokemon.base.Defense}</div>
        <div class="a-pokemon-stat4">${aPokemon.base.Speed}</div>
    </div>
    `
}

getData().then(allPokemon => {
    document.getElementById("gridbox").innerHTML = allPokemon.map(pokemon => getHtml(pokemon)).join("")
})

