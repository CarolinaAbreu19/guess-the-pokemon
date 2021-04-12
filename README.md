# Guess the Pokemon
A simple game made with HTML, CSS and JavaScript.

![Alt text](./images/guess-the-pokemon.png?raw=true "Title")

After downloading, just run the `guessPokemon.html` file in the same directory to view the project.

## How to play

The game consists of guessing which Pokemon corresponds to the silhouette of the displayed image. Your guess must be typed in the text box in lowercase, and then you click on the "send" button.

* If you get it right, a message will be displayed confirming that you made it. The Pokemon will be displayed to you, then it is removed from the game and a new Pokemon is drawn.
* If you miss, a message will be displayed and a new pokemon will be drawn.
* If you don't know, you can click on the "I don't know!" button, and a new pokemon will be drawn.

The game ends after you have guessed all 50 Pokemons available.

## But how can I make my own game?

The structure of this game is very simple. You need to:

* A space to position the image
* An input type "text" to write your answer
* Two buttons - "send" and "I don't know!"

So let's create our html structure:

```
    <div class="image">
        <img src="" alt="some image here">
    </div>

    <div class="input">
        <input type="text">
    </div>

    <div class="buttons">
        <button>Send</button>
        <button>I don't know!</button>
    </div>
```

![Alt text](./images/html-structure.png?raw=true "Title")

Well, the basics are ready. Now let's build our functions!

## Game functions

Our program will have 2 javascript files. The first will define the variables for each of the 50 Pokemons, and the second will be the logic of the game.

### Getting the images

We obtained 50 images of Pokemons to be used in the code. It is important that the images have a transparent background. Each Pokemon will be an object with 2 values:  the Pokemon's name, and the directory in which the image is located. Let's see an example: 

```
    var cubchoo = {
        name: "cubchoo",
        source: "./pokemons/cubchoo.png"
    }   
```

With that in mind, let's ask our html to display the image and see if everything is ok.

```
    <div class="image">
        <img src="./pokemons/cubchoo.png" alt="some image here">
    </div>
```

![Alt text](./images/html-cubchoo.png?raw=true "Title")

It looks like everything is fine, but we need to hide our Pokemon. For that, we only need to change the "filter" attribute in the CSS, changing the "brightness" value to zero.

```
    img {
        filter: brightness(0%);
    }
```

With that, our Pokemon must be well hidden.

![Alt text](./images/hidden-cubchoo.png?raw=true "Title")

However, our image has a fixed value to show only this Pokemon in our html. We need to create something that shows other Pokémon as well. So, go back to the `<img>` tag and leave the `src` attribute empty.

### Game functions

Now the fun part will start! Our little game will have some main functions:

* `randomNumber()`: will randomly choose one of our Pokemon objects;
* `choosePic()`: will change the `src` attribute in our html, displaying the chosen Pokemon
* `clearInput()`: just clear the current value of the `input` tag in our html
* `showAlert()`: displays a message to the user indicating whether the chosen Pokemon is correct or not
* `tryGuess()`: checks if the name entered by the user matches the displayed Pokemon

And, of course, we need some variables as well:

* An array to store all of our Pokemons
* A variable to store a random number

In addition, each time you update the html page, a new Pokemon must be randomly chosen. Your code will look like this:

```
    /* As soon as you initialize the page, choose a random image */
    window.onload = choosePic;
    var index;

    /* Array that receives all Pokemons in the game. You can greatly improve this array */
    var allPokemons = new Array(cubchoo, mudkip, lotad);

    function randomNumber() {}
    function choosePic() {}
    function clearInput() {}
    function showAlert(num) {}
    function tryGuess() {}
```

To choose a random number, we use the `Math.floor()` function. It will cycle through the array with all of our Pokémon and choose a random index value:

```
    function randomNumber() {
        let num = Math.floor(Math.random() * allPokemons.length);
        return num;
    }   
```

With that, we can now choose our Pokemon. From the object chosen in the array, the function obtains the image directory and changes the `src` attribute of the `<img>` tag in our html:

```
    function choosePic() {
        index = randomNumber();
        document.getElementById("pokemonImage").src = allPokemons[index].source;
    }
```

To clear the `input` field, just change its value to empty:

```
    function clearInput() {
        document.getElementById("guessInput").value = "";
    }
```

Our function of displaying an alert will receive a value from the `tryGuess()` function. If it is 1, it means that the user has guessed correctly. Otherwise, the user made a mistake. Can you make the function receive a Boolean value?

```
    function showAlert(num) {
        if (num == 1) {
            alert("Yeah! You did it!");
        } else {
            alert("Oh no! Wrong answer!");
        }
    }
```

Finally, we have our function that checks whether the user is correct or not. For this function, we will create a conditional. First, it is necessary to compare whether the value entered by the user corresponds to the correct name of the Pokemon.

If so, the program will display the alert message with a value of 1, will change the value of the attribute "filter" in the css to display the image, remove that Pokemon from our array and check if there are still Pokemons to be guessed. The program displays the Pokemon for a few seconds. After that, change the attribute "filter" to hide the Pokemons, draw a new Pokemon and clear the text that the user typed.

Otherwise, the program displays the wrong answer alert, chooses a new Pokemon and clears the text that the user typed. That wrong Pokemon is still in the array.

```
    function tryGuess() {
        if (document.getElementById("guessInput").value == allPokemons[index].name) {

            showAlert(1);
            document.getElementById("pokemonImage").style.filter = "brightness(100%)";
            allPokemons.splice(index, 1);

            if (allPokemons.length >= 1){
                setTimeout(function () {

                    document.getElementById("pokemonImage").style.filter = "brightness(0%)";
                    choosePic();
                    clearInput();
        
                }, 2000);
            } else {
                alert("You managed to guess all the Pokemons!")
                document.getElementById("title").innerHTML = "You win!";
            }
            
        } else {
            showAlert(0);
            choosePic();
            clearInput();
        }
    }
```

After that, the main structure of your game will be ready. From here, you can implement your css and leave your game the way you want!


## Next steps

The game does not contain scores, maximum number of errors allowed, tips for each Pokemon, how many Pokemons are left in the game ... But these are simple things that you can improve in your code! There's a lot more. Instead of Pokemons, you can use the silhouette of other characters of your choice. Be creative and try to implement your own game!

## Disclaimer

All the Pokémon names and images are copyrighted by Nintendo. Pokemon Conquest sprites obtained from Bulbapedia. This was a personal project developed just for learning.

## Contact

Carolina Abreu - [Linkedin](https://www.linkedin.com/in/ana-carolina-silva-abreu-80325a195/) - anacarolinaks19@gmail.com
