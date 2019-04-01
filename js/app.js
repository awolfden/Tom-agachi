console.log('Tom-agachi');

// Creates Tamagachi class
class Tomagachi {
    constructor(name, imgFile){
        this.name = name,
        this.hunger = 0,
        this.sleepiness = 0,
        this.boredom = 0,
        this.age = 0,
        this.imgFile = imgFile,
        this.lightsOn = true
    }
}

// Creates tomFactory object to make the tom and hold the tom
const tomFactory = {
    tomArr: [],
    makeTom(name, imgFile){
        const newTom = new Tomagachi(name, imgFile);
        this.tomArr.push(newTom);
        return newTom;
    }
};

// instantiates the Tom
tomFactory.makeTom('Tommy-gochi', 'https://i.pinimg.com/originals/a8/a0/b1/a8a0b1f02925966d3bcd341f9fe929fc.png');

//function to put Tom on screen
const makeTom = () => {
    $('#arena').append(`<img src="${tomFactory.tomArr[0].imgFile}" height="150" width="128">`);
}

//lets user name their pet
$('#heading').append('<form><input type="text" id="userName"><button type="submit">Name your pet!</button></form>');


const currentTom = tomFactory.tomArr[0];

//function to create the board area
const makeBoard = () => {
    $('#title').text(`${currentTom.name}`);
    $('#tomagachi').append('<div id="arena"></div>');
    $('#stat-container').append('<div id="stats"><h1>Stats</h1><ul class="statList"></ul></div>');
    $('#button-container').append('<div id="buttons"><h1>Tommy Needs Attention</h1></div>');
    
}

// makeStats puts the stats on the screen
const makeStats = () => {
    $('.statList').append(`<li>Name: ${currentTom.name}</li><li>Hunger: ${currentTom.hunger}</li><li>Sleepiness: ${currentTom.sleepiness}</li><li>Boredom: ${currentTom.boredom}</li><li>Age: ${currentTom.age}</li>`)

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
            if (currentTom.lightsOn){
                currentTom.sleepiness--;
                render();
                $('#arena').css('background-image', 'url("https://townsquare.media/site/518/files/2017/11/Night-sky.jpg")');
                currentTom.lightsOn = !currentTom.lightsOn;
            } else {
                render();
                currentTom.lightsOn = !currentTom.lightsOn;
            }
            
        } else if (e.target.id === 'play'){
            currentTom.boredom = currentTom.boredom-=1;
            render();
        }
    });

    $('form').on('submit', (e) => {
        e.preventDefault();
    
        //retreiving the users input
        const inputValue = $('#userName').val();
        //add the value to the array
        currentTom.name = inputValue;
    
        //clear the input
        $('#userName').val('');
        $('form').remove();
        render();
    })
}


render();





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


let seconds = 0;



const secondsGoUp = () => {
    seconds ++;
    console.log(seconds);
    if(seconds % 600 === 0){
        currentTom.age++;
        render();
    } else if (seconds % 75 === 0){
        currentTom.hunger++;
        render();
    } else if (seconds % 100 === 0) {
        currentTom.sleepiness++;
        render();
    } else if (seconds % 110 === 0) {
        currentTom.boredom++;
        render();
    } else if (currentTom.hunger >= 10 || currentTom.sleepiness >= 10 || currentTom.boredom >= 10){
        clearInterval(timer);
        currentTom.imgFile = 'http://66.media.tumblr.com/tumblr_m8ich6yKbz1r0n9bmo3_250.gif';
        render();
        alert('YOU KILLED TOMMY! YOU MONSTER!!!');
    }
}

const timer = setInterval(secondsGoUp, 10);





