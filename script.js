const pokemonInfo = document.querySelector('#pokemonName')
const pokemonName = document.querySelector('#pokemonInfo')
const pokemonImage = document.querySelector('#pokemonImage')
const pokemonAbilites = document.querySelector('#pokemonAbilities')
const pokemonTypes = document.querySelector('#pokemonTypes')
const pokemonStats = document.querySelector('#pokemonStats')

// accessing API HTTP request:




let button = document.querySelector("#searchButton")

button.addEventListener('click', async () => {
    
    let pokemonName = document.querySelector("#pokemonName")
    let pokemonImage = document.querySelector("#pokemonImage")
    //where does this need to be scoped?
    let textInput = document.querySelector("#inputBar").value
    console.log(textInput)
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${textInput}`);
        const pokemonData = response.data;
    // } catch (error) {
    //     console.error('Error fetching Pokémon data:', error);
    // }
        pokemonName.textContent = pokemonData.name;

        const pokemonPic = pokemonData.sprites.front_default;
        pokemonImage.setAttribute('src', pokemonPic);
        console.log(pokemonData);
        
        pokemonAbilites.innerHTML = '';
        
        for(let i = 0; i < pokemonData.abilities.length; i++){
            console.log(pokemonData.abilities[i])
            let abilityElement = document.createElement('li');
            abilityElement.innerText = pokemonData.abilities[i].ability.name;
            pokemonAbilites.appendChild(abilityElement);
        }

        pokemonTypes.innerHTML = ""

        for(let i = 0; i < pokemonData.types.length; i++){
            console.log(pokemonData.types[i])
        let typeElement = document.createElement('li');
        typeElement.innerText = pokemonData.types[i].type.name;
        pokemonTypes.appendChild(typeElement);
        }
    
        pokemonStats.innerHTML = ""

        for(let i = 0; i < pokemonData.stats.length; i++){
            console.log(pokemonData.stats[i])
            let statsElement = document.createElement('li');
            statsElement.innerText = pokemonData.stats[i].stat.name;
            pokemonStats.appendChild(statsElement);
        }



    } catch (error) {
        console.error('Error fetching Pokémon data:', error);
        // Handle errors appropriately, e.g., display an error message to the user
    }
}
)
