//
// // function apiCall(pokemon){
// axios.get
// ("http://fizal.me/pokeapi/api/v2/name/.json")
// // +pokemon+
//
//   .then(function (response){
//     console.log(response);
//    // })
// }
// //
// // let test = apiCall("bulbasaur");
//
// // console.log(test);




// jigglypuff
axios.get("http://fizal.me/pokeapi/api/v2/name/jigglypuff.json")
 .then(function insertJiggly(response){
   //this console logs the value for defense
   console.log(response.data.stats[5].base_stat);
    let ab = document.getElementById("jigglypuff");
      ab.innerHTML = "Abilities: " + response.data.abilities[0].ability.name +", " + response.data.abilities[1].ability.name+", " +  response.data.abilities[2].ability.name + " <br> Defense: " + response.data.stats[3].base_stat + "<br> Attack: " + response.data.stats[4].base_stat + "<br> HP: " + response.data.stats[5].base_stat;



 })


//teddiursa
 axios.get("http://fizal.me/pokeapi/api/v2/name/teddiursa.json")
  .then(function insertTeddi(response){
    //this console logs the value for defense
    console.log(response.data.stats[5].base_stat);
 let ac = document.getElementById("teddiursa");
   ac.innerHTML = "Abilities: " + response.data.abilities[0].ability.name +", " + response.data.abilities[1].ability.name + ", " +  response.data.abilities[2].ability.name + " <br> Defense: " + response.data.stats[3].base_stat + "<br> Attack: " + response.data.stats[4].base_stat + "<br> HP: " + response.data.stats[5].base_stat;

})

//bellossom
axios.get("http://fizal.me/pokeapi/api/v2/name/bellossom.json")
 .then(function insertBello(response){
   //this console logs the value for defense
   console.log(response.data.stats[5].base_stat);
let ac = document.getElementById("bellossom");
  ac.innerHTML = "Abilities: " + response.data.abilities[0].ability.name +", " + response.data.abilities[1].ability.name + " <br> Defense: " + response.data.stats[3].base_stat + "<br> Attack: " + response.data.stats[4].base_stat + "<br> HP: " + response.data.stats[5].base_stat;
})

// this is wrong but keep for the information
// function insertPokemonStats() {
//   let pokemon = {};
//   pokemon.name
//   pokemon.abilities
//   pokemon.attack
//   pokemon.defense
//   pokemon.hp
//
//   = function() {
//     innerHTML("Hi! I\'m " + pokemon.name + ". <br> Abilities: "+ pokemon.abilities+"<br> Attack: " + pokemon.attack+"<br> Defense: " + pokemon.defense"<br> HP: " + pokemon.hp);
//
//   return pokemon;
//     };


//this is correct
class Pokemon {
  constructor(hp, name, attack, defense){
    this.hp = hp;
    this.name=name;
    this.attack=attack;
    this.defense=defense;
    this.ability=ability
  }
}

let jiggly = new Pokemon()

something.innerHTML = jiggly.name, jiggly.ability, jiggly.defense, jiggly.attack, jiggly.hp

let bello = new Pokemon()

something.innerHTML = bello.name, bello.ability, bello.defense, bello.attack, bello.hp

let teddi = new Pokemon()

something.innerHTML = teddi.name, teddi.ability, teddi.defense, teddi.attack, teddi.hp
