//Example fetch using pokemonapi.co

document.getElementById("btn1").addEventListener("click", getFetch);
document.getElementById("btn2").addEventListener("click", poke2);
const p1Abilities = document.getElementById("p1Abilities");
const p2Abilities = document.getElementById("p2Abilities");

function getFetch() {
  const choice = document.getElementById("in1").value.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${choice}`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      // console.log(data.moves);

      //uppercase the first letter
      const upperCaseName =
        data.name.charAt(0).toUpperCase() + data.name.slice(1);

      document.getElementById("pokeName1").innerText = upperCaseName;
      document.getElementById("picture1").src = data.sprites.front_default;

      data.types.forEach((type) => {
        console.log(data.types);
        const upperCaseType =
          type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1);
        document.querySelector("#type1").innerText = upperCaseType;
      });
      let options = p1Abilities.getElementsByTagName("option");
      let optionsArray = Array.from(options);
      for (let i = optionsArray.length; i--; ) {
        p1Abilities.removeChild(optionsArray[i]);
      }

      const moves = data.moves;
      moves.forEach((move) => {
        let moveOption = document.createElement("option");
        moveOption.textContent = move.move.name;
        moveOption.value = move.move.name;
        p1Abilities.appendChild(moveOption);
      });
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

      data.types.forEach((type) => {
        console.log(data.types);
        //uppercase the first letter
        const upperCaseType =
          type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1);
        document.querySelector("#type2").innerText = upperCaseType;
      });
      let options = p2Abilities.getElementsByTagName("option");
      let optionsArray = Array.from(options);
      for (let i = optionsArray.length; i--; ) {
        p2Abilities.removeChild(optionsArray[i]);
      }
      const moves = data.moves;
      moves.forEach((move) => {
        console.log(move.move.name);
        let moveOption = document.createElement("option");
        moveOption.textContent = move.move.name;
        moveOption.value = move.move.name;
        p2Abilities.appendChild(moveOption);
      });
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
