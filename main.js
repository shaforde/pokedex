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


class Pokemon {
  constructor(hp, name, attack, defense,ability){
    this.name=name;
    this.attack=attack;
    this.defense=defense;
    this.ability=ability;
    this.hp = hp;
    this.stats= this.name+"<br> Attack: " + this.attack + "<br> Defense: " + this.defense + "<br> Ability: "+ this.ability+ "<br> HP: "+this.hp
  }
  display(){
     let ab = document.getElementById(this.name);
       ab.innerHTML = this.stats

}
}




// jigglypuff


axios.get("http://fizal.me/pokeapi/api/v2/name/jigglypuff.json")
 .then(function (response){
   //this console logs the value for defense
   console.log(response.data.stats);
   let jigglypuff = new Pokemon(response.data.stats[5].base_stat,"jigglypuff", response.data.stats[4].base_stat, response.data.stats[3].base_stat,  response.data.abilities[0].ability.name +", " + response.data.abilities[1].ability.name + ", " +  response.data.abilities[2].ability.name);
   jigglypuff.display()
   //this is to make the object appear on the page after clicking the div
   // let nameofPokemon= document.getElementById("jigglypuff");
   // nameofPokemon.addEventListener("click", display());
 });




// teddiursa
//  axios.get("http://fizal.me/pokeapi/api/v2/name/teddiursa.json")
//   .then(function insertTeddi(response){
//     //this console logs the value for defense
//     console.log(response.data.stats[5].base_stat);
//  let ac = document.getElementById("teddiursa");
//    ac.innerHTML = "Abilities: " + response.data.abilities[0].ability.name +", " + response.data.abilities[1].ability.name + ", " +  response.data.abilities[2].ability.name + " <br> Defense: " + response.data.stats[3].base_stat + "<br> Attack: " + response.data.stats[4].base_stat + "<br> HP: " + response.data.stats[5].base_stat;
//
// })
axios.get("http://fizal.me/pokeapi/api/v2/name/teddiursa.json")
 .then(function (response){
   //this console logs the value for defense
   console.log(response.data.stats);
   let jigglypuff = new Pokemon(response.data.stats[5].base_stat,"teddiursa", response.data.stats[4].base_stat, response.data.stats[3].base_stat,  response.data.abilities[0].ability.name +", " + response.data.abilities[1].ability.name + ", " +  response.data.abilities[2].ability.name);
   jigglypuff.display()


 })

// //bellossom
// axios.get("http://fizal.me/pokeapi/api/v2/name/bellossom.json")
//  .then(function insertBello(response){
//    //this console logs the value for defense
//    console.log(response.data.stats[5].base_stat);
// let ac = document.getElementById("bellossom");
//   ac.innerHTML = "Abilities: " + response.data.abilities[0].ability.name +", " + response.data.abilities[1].ability.name + " <br> Defense: " + response.data.stats[3].base_stat + "<br> Attack: " + response.data.stats[4].base_stat + "<br> HP: " + response.data.stats[5].base_stat;
// })
axios.get("http://fizal.me/pokeapi/api/v2/name/bellossom.json")
 .then(function (response){
   //this console logs the value for defense
   console.log(response.data.stats);
   let jigglypuff = new Pokemon(response.data.stats[5].base_stat,"bellossom", response.data.stats[4].base_stat, response.data.stats[3].base_stat,  response.data.abilities[0].ability.name +", " + response.data.abilities[1].ability.name );
   jigglypuff.display()


 })




 class Trainer{
   constructor(){
     this.pokemon= []
   }

   all (){

   }
   get(name){

   }
 }
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
// //     };
//
//
// //this is correct
// class Pokemon {
//   constructor(hp, name, attack, defense,ability){
//     this.name=name;
//     this.attack=attack;
//     this.defense=defense;
//     this.ability=ability;
//     this.hp = hp;
//     this.stats= function(){this.name+"<br> Attack: " + this.attack + "<br> Defense: " + this.defense + "<br> Ability: "+ this.ability+ "<br> HP: "+this.hp
//     }
//   }
//
//   display(){
//     let ab = document.getElementById("jigglypuff");
//       ab.innerHTML = "Abilities: " + response.data.abilities[0].ability.name +", " + response.data.abilities[1].ability.name+", " +  response.data.abilities[2].ability.name + " <br> Defense: " + response.data.stats[3].base_stat + "<br> Attack: " + response.data.stats[4].base_stat + "<br> HP: " + response.data.stats[5].base_stat;
//
//   }
//
// }
// let jiggly = new Pokemon(){
//   axios.get("http://fizal.me/pokeapi/api/v2/name/jigglypuff.json")
//    .then(function insertJiggly(response){
//      //this console logs the value for defense
//      // console.log(response.data.stats[5].base_stat);
//      let jigg = new Pokemon(response.data.name)
//      jigg.display()
//
//
//
//    })
//
// jiggly.innerHTML = jiggly.name, jiggly.ability, jiggly.defense, jiggly.attack, jiggly.hp}

// let bello = new Pokemon()
//
// bello.innerHTML = bello.name, bello.ability, bello.defense, bello.attack, bello.hp
//
// let teddi = new Pokemon()
//
// teddi.innerHTML = teddi.name, teddi.ability, teddi.defense, teddi.attack, teddi.hp
