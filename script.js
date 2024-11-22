const searchBtn = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weightHtml = document.getElementById("weight");
const heightHtml = document.getElementById("height");
const typesHtml = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const imgPokemon = document.getElementById("sprite")

const fetchData = async () => {
  try {
    reset();

    const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchInput.value.toLowerCase()}`);
    const dataPokemon = await res.json();
    const { id, name, sprites, stats, weight, height, types } = dataPokemon;
    pokemonName.innerHTML = `<p>Name: ${name.toUpperCase()}</p>`;
    pokemonId.innerHTML = `<p>Id: ${id}</p>`
    weightHtml.innerHTML = `<p>Weight: ${weight} </p>`;
    heightHtml.innerHTML = `<p>Height: ${height}</p>`
    types.forEach((type) => {
      const typeName = type.type.name;
      let backgroundColor;
      const p = document.createElement("p");
      p.textContent = `${typeName}`;
      p.style.padding = "5px";
      p.style.borderRadius = "5px";

      switch (typeName) {
        case "grass":
          backgroundColor = "rgb(155, 204, 80)";
          break;
        case "fire":
          backgroundColor = "rgb(253, 125, 36)";
          p.style.color = "white";
          break;
        case "water":
          backgroundColor = "rgb(69, 146, 196)";
          p.style.color = "white";
          break;
        case "bug":
          backgroundColor = "rgb(114, 159, 63)";
          p.style.color = "white"
          break;
        case "fire":
          backgroundColor = "rgb(253, 125, 36)";
          p.style.color = "white"
          break;
        case "electric":
          backgroundColor = "rgb(238, 212, 52)";
          break;
        case "dark":
          backgroundColor = "rgb(112, 112, 112)";
          p.style.color = "white"
          break;
        default:
          backgroundColor = "gray";
      }
      p.style.backgroundColor = backgroundColor;
      typesHtml.appendChild(p); 
    });
    
    hp.innerHTML = `<p>HP: ${stats[0].base_stat}</p>`;
    attack.innerHTML = `<p>Attack: ${stats[1].base_stat}</p>`;
    defense.innerHTML = `<p>Defense: ${stats[2].base_stat}</p>`;
    specialAttack.innerHTML = `<p>Sp. Attack: ${stats[3].base_stat}</p>`;
    specialDefense.innerHTML = `<p>Sp. Defense: ${stats[4].base_stat}</p>`;
    speed.innerHTML = `<p>Speed: ${stats[5].base_stat}</p>`;
    imgPokemon.innerHTML = `<img src="${sprites.front_default}">`;
  } catch (err) {
    reset();
    alert("Pokémon not found");
  }
};

const reset = () => {
  pokemonName.innerHTML = "";
  pokemonId.innerHTML = "";
  weightHtml.innerHTML = "";
  heightHtml.innerHTML = "";
  typesHtml.innerHTML = "";
  hp.innerHTML = "";
  attack.innerHTML = "";
  defense.innerHTML = "";
  specialAttack.innerHTML = "";
  specialDefense.innerHTML = "";
  speed.innerHTML = "";
  imgPokemon.innerHTML = "";
}

searchBtn.addEventListener("click", fetchData);