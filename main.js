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
 .then(function insertinfo(response){
   //this console logs the value for defense
   console.log(response.data.stats[4].base_stat);
    let ab = document.getElementById("jigglypuff");
      ab.innerHTML = "Abilities: " + response.data.abilities[0].ability.name +", " + response.data.abilities[1].ability.name+", " +  response.data.abilities[2].ability.name; + "Defense: "+ response.data.stats[4].base_stat


 })
