


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
    console.log("HELLO")
     let ab = document.getElementById(this.name);
       ab.innerHTML = this.stats

}
}

// jigglypuff


axios.get("https://fizal.me/pokeapi/api/v2/name/jigglypuff.json")
 .then(function (response){
   //this console logs the value for defense
   console.log(response.data.stats);
   let jigglypuff = new Pokemon(response.data.stats[5].base_stat,"jigglypuff", response.data.stats[4].base_stat, response.data.stats[3].base_stat,  response.data.abilities[0].ability.name +", " + response.data.abilities[1].ability.name + ", " +  response.data.abilities[2].ability.name);
   // jigglypuff.display()
   //this is to make the object appear on the page after clicking the div
   let nameofPokemon= document.getElementById("jigglypic");
   nameofPokemon.addEventListener("click", jigglypuff.display.bind(jigglypuff));
   Makayla.pokemon.push(jigglypuff);
 });


axios.get("https://fizal.me/pokeapi/api/v2/name/teddiursa.json")
 .then(function (response){
   //this console logs the value for defenise
   console.log(response.data.stats);
   let teddiursa = new Pokemon(response.data.stats[5].base_stat,"teddiursa", response.data.stats[4].base_stat, response.data.stats[3].base_stat,  response.data.abilities[0].ability.name +", " + response.data.abilities[1].ability.name + ", " +  response.data.abilities[2].ability.name);
   // teddiursa.display()
   let nameofPokemon= document.getElementById("teddipic");
   nameofPokemon.addEventListener("click", teddiursa.display.bind(teddiursa));
   Makayla.pokemon.push(teddiursa);

 })


axios.get("https://fizal.me/pokeapi/api/v2/name/bellossom.json")
 .then(function (response){
   //this console logs the value for defense
   console.log(response.data.stats);
   let bellossom = new Pokemon(response.data.stats[5].base_stat,"bellossom", response.data.stats[4].base_stat, response.data.stats[3].base_stat,  response.data.abilities[0].ability.name +", " + response.data.abilities[1].ability.name );
   // jigglypuff.display()
   let nameofPokemon= document.getElementById("bellopic");
   nameofPokemon.addEventListener("click", bellossom.display.bind(bellossom));
   Makayla.pokemon.push(bellossom);
 })


// Trainer code is making stats not show up
// let pokemon=[teddiursa, jigglypuff, bellossom];

 class Trainer{
   constructor(){
     this.pokemon=[]
     console.log(this.pokemon);
   }

   all (){
     return this.pokemon;
   }
   store(){
     return
   }
   get(name){

     for (let i=0 ; i<this.pokemon.length; i++) {
     if(name === this.pokemon[i].name){
       return this.pokemon[i];
     }
    }
   }
 }
let Makayla = new Trainer();
let jigglypuff = new Pokemon(jigglypuff)
