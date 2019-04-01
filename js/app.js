console.log('Tom-agachi');

// Requirements
// Create a repo for your tomagotchi pet
// make a commit after you finish each one of the following

// Create a Class (JS Class, look at your notes if your forget) for your tomagotchi
class Tomagachi {
    constructor(name, imgFile){
        this.name = name,
        this.hunger = 0,
        this.sleepiness = 0,
        this.boredom = 0,
        this.age = 0,
        this.imgFile = imgFile
    }
}

const tomFactory = {
    tomArr: [],
    makeTom(name, imgFile){
        const newTom = new Tomagachi(name, imgFile);
        this.tomArr.push(newTom);
        return newTom;
    }
};

// instantiate Tom
tomFactory.makeTom('Tommy Fresh', 'https://i.pinimg.com/originals/a8/a0/b1/a8a0b1f02925966d3bcd341f9fe929fc.png');

//function to put Tom on screen
const makeTom = () => {
    $('#arena').append(`<img src="${tomFactory.tomArr[0].imgFile}" height="100" width="85">`);
}

console.log(tomFactory.tomArr[0].name)



// Display the following metrics for your pet:
// Hunger (1-10 scale)
// Sleepiness (1-10 scale)
// Boredom (1-10 scale)
// Age

const currentTom = tomFactory.tomArr[0];

//function to create the board area
const makeBoard = () => {
    $('#tomagachi').append('<div id="arena"><h1>"Tom"-agachi</h1></div>');
    $('#tomagachi').append('<div id="stats"><h1>stats</h1><ul class="statList"></ul></div>');
    $('#tomagachi').append('<div id="buttons"><h1>buttons</h1></div>')
}

// makeStats puts the stats on the screen
const makeStats = () => {
    $('.statList').append(`<p>Name: ${currentTom.name}</p><br><p>Hunger: ${currentTom.hunger}</p><br><p>Sleepiness: ${currentTom.sleepiness}</p><br><p>Boredom: ${currentTom.boredom}</p><br><p>Age: ${currentTom.age}</p>`)

}

// makeButtons puts the buttons on the screen
const makeButtons = () => {
    $('#buttons').append('<div id="feed">Feed</div><div id="lightsOff">Turn Off Lights</div><div id="play">Play</div>');
}

// Render function clears board and reloads current stats, links to listenToStuff
const render = () => {
   $('#stats').remove();
   $('#buttons').remove();
   $('#arena').remove();

    makeBoard();
    makeStats();
    makeButtons();
    makeTom();
    listenToStuff();
}

//function to listen to the buttons
const listenToStuff = () => {
    $('#buttons').on('click', (e) => {
        if(e.target.id === 'feed'){
            currentTom.hunger = currentTom.hunger-=1;
            render();
        } else if (e.target.id === 'lightsOff'){
            // code to turn arena id background to black
            render();
        } else if (e.target.id === 'play'){
            currentTom.boredom = currentTom.boredom-=1;
            render();
        }
        console.log(e.target);
    });
}

render();






// Add the ability to name your pet.
// Style the page.
// Increase your pet's age every x minutes
// Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
// You pet should die if Hunger, Boredom, or Sleepiness hits 10.
// Morph your pet at certain ages.
// Animate your pet across the screen while it's alive.
// Extras
// Have your tomagotchi give birth to baby tomagotchi...
// ...with special powers (extend the class)!
// Add an excercise() method to your tomagotchi, that affects certain properties
// Add anything you can think of... use your imagination!

