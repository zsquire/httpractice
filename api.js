async function pokemon() {
    const data = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    const usabledata = await data.json()
    console.log(usabledata)
}
