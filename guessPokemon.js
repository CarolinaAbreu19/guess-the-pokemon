/* As soon as you initialize the page, choose a random image */
window.onload = choosePic;
let index;

/* Array that receives all Pokemons in the game. You can greatly improve this array */
const allPokemons = new Array(charmander, charmeleon, charizard, beedrill, scyther, arbok, igglybuff, jigglypuff,
    wigglytuff, zubat, golbat, crobat, pichu, pikachu, raichu, meowth, persian, abra, kadabra, alakazam, groudon,
    dialga, arceus, pupitar, haunter, gengar, onix, starly, eevee, vaporeon, jolteon, flareon, espeon, umbreon,
    leafeon, glaceon, mewtwo, rhydon, magikarp, gyarados, articuno, treecko, minccino, kirlia, chimecho, sealeo,
    shinx, oshawott, zekrom, dragonair, wooper);

function randomNumber() {
    let num = Math.floor(Math.random() * allPokemons.length);
    return num;
}

/* Choose a random Pokemon */
function choosePic() {
    index = randomNumber();
    document.getElementById("canvas").src = allPokemons[index].source;
}

function clearInput() {
    document.getElementById("guessInput").value = "";
}

function showAlert(num) {
    if (num == 1) {
        alert("Yeah! You did it! It's " + allPokemons[index].name + "!");
    } else {
        alert("Oh no! Wrong answer!");
    }
}

function tryGuess() {
    if (document.getElementById("guessInput").value.trim().toLowerCase() === allPokemons[index].name) {

        showAlert(1);
        document.getElementById("canvas").style.filter = "brightness(100%)";
        allPokemons.splice(index, 1);

        if (allPokemons.length >= 1){
            setTimeout(function () {

                document.getElementById("canvas").style.filter = "brightness(0%)";
                choosePic();
                clearInput();
    
            }, 2000);
        } else {
            alert("You managed to guess all the Pokemons! You are awesome! Thanks for playing, I hope you had fun ^~^ ")
            document.getElementById("title").innerHTML = "You win! Yay!";
        }
        
    } else {
        showAlert(0);
        choosePic();
        clearInput();
    }
}