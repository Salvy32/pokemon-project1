//Example fetch using pokemonapi.co

document.getElementById("btn1").addEventListener("click", getFetch);
document.getElementById("btn2").addEventListener("click", poke2);

function getFetch() {
  const choice = document.getElementById("in1").value.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${choice}`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);

      //uppercase the first letter
      const upperCaseName =
        data.name.charAt(0).toUpperCase() + data.name.slice(1);

      document.getElementById("pokeName1").innerText = upperCaseName;
      document.getElementById("picture1").src = data.sprites.front_default;

      //make ul into variables
      const list1 = document.getElementById("list1");
      //remove past li
      list1.innerHTML = "";
      data.types.forEach((type) => {
        console.log(data.types);
        //uppercase the first letter
        const upperCaseType =
          type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1);
        document.querySelector("#type1").innerText = upperCaseType;
      });
      //then run a forEach to loop through arrays
      data.abilities.forEach((type) => {
        // console.log(data.types);
        const li1 = document.createElement("li");
        li1.textContent = type.ability.name;
        list1.appendChild(li1);
      });
      //create an li
      //put text into li
      //append the li
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

/******* Second Function for second pokemon *************/

function poke2() {
  const choice = document.getElementById("in2").value.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${choice}`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);

      //uppercase the first letter
      const upperCaseName =
        data.name.charAt(0).toUpperCase() + data.name.slice(1);

      document.getElementById("pokeName2").innerText = upperCaseName;
      document.getElementById("picture2").src = data.sprites.back_default;

      //make ul into variables
      const list2 = document.getElementById("list2");
      //remove past li
      list2.innerHTML = "";
      data.types.forEach((type) => {
        console.log(data.types);
        //uppercase the first letter
        const upperCaseType =
          type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1);
        document.querySelector("#type2").innerText = upperCaseType;
      });
      //then run a forEach to loop through arrays
      data.moves.forEach((type) => {
        // console.log(data.types);
        const li2 = document.createElement("li");
        li2.textContent = type.move.name;
        list2.appendChild(li2);
      });
      //create an li
      //put text into li
      //append the li
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
