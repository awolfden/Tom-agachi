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
        this.lightsOn = true,
        this.alive = true
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

const goTomGo = () => {
    $('#arena img').animate({
        'left': '600px',
        'bottom': '20px'    
    }, 8000);
}

// Keeps track of the seconds
let seconds = 0;

// instantiates the Tom
tomFactory.makeTom('Tommy-gochi', 'https://i.pinimg.com/originals/a8/a0/b1/a8a0b1f02925966d3bcd341f9fe929fc.png');

//function to put Tom on screen
const makeTom = () => {
    $('#arena').append(`<img src="${tomFactory.tomArr[0].imgFile}" height="150" width="128">`);
}

//lets user name their pet
$('#heading').append('<form><input type="text" placeholder="Tommy Fresh" id="userName"><button id="submit" type="submit">Name your pet!</button></form>');


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

const refreshStats = () => {
    $('#stats').remove();
    $('#stat-container').append('<div id="stats"><h1>Stats</h1><ul class="statList"></ul></div>');
    makeStats()
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

    goTomGo();
}

// Function checks if its time for tom to morph
const morphinTime = () => { 
    if (currentTom.age > 3){ 
        currentTom.imgFile = 'http://i.imgur.com/vV0AA0q.jpg?1';
        $('#arena img').remove();
        makeTom();
        goTomGo();
    } 
};

// Function checks if stats need updating based on time and udates them through render()
const statTracker = () => {
    if (seconds % 53 === 0){
        currentTom.hunger++;
        refreshStats();
    } else if (seconds % 67 === 0) {
        currentTom.sleepiness++;
        refreshStats();
    } else if (seconds % 71 === 0) {
        currentTom.boredom++;
        refreshStats();
    } else if(seconds % 101 === 0){
        currentTom.age++;
        refreshStats();
    } 
};

// Function checks if it's time for tom to die
const isTomDead = () => {
    if (currentTom.hunger >= 10 || currentTom.sleepiness >= 10 || currentTom.boredom >= 10){
        currentTom['alive'] = false;
        clearInterval(timer);
        currentTom.imgFile = 'http://66.media.tumblr.com/tumblr_m8ich6yKbz1r0n9bmo3_250.gif';
        render();
        $('#heading').append('<div id="death"><h1>YOU KILLED TOMMY!<br>YOU MONSTER!</h1></div>');

    } else if (currentTom.hunger < 0 || currentTom.sleepiness < 0 || currentTom.boredom < 0){
        currentTom['alive'] = false;
        clearInterval(timer);
        currentTom.imgFile = 'http://66.media.tumblr.com/tumblr_m8ich6yKbz1r0n9bmo3_250.gif';
        render();
        $('#heading').append('<div id="death"><h1>YOU KILLED TOMMY!<br>YOU MONSTER!</h1></div>');
        
    } 
};


// Sets listener to the form input and button - above other stuff, below render
$('form').on('submit', (e) => {
    //prevents a server request from being sent and page reload
    e.preventDefault();
    //retreiving the users input
    const inputValue = $('#userName').val();
    //add the value to the currentTom object name property
    currentTom.name = inputValue;

    //clear the input
    $('#userName').val('');
    $('form').remove();
    render();
});

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
            } 

        } else if (e.target.id === 'play'){
            currentTom.boredom = currentTom.boredom-=1;
            render();
        }
    });
}



// Function adds to the seconds and call the other related functinos
const secondsGoUp = () => {
    seconds ++;
    console.log(seconds);
    

    morphinTime();
    statTracker();
    isTomDead();
}

const timer = setInterval(secondsGoUp, 100);
render();







// Morph your pet at certain ages. <-- BUTTONS STOP WORKING AFTER MORPH!! WTF!?!?


// Animate your pet across the screen while it's alive.


// Extras
// Have your tomagotchi give birth to baby tomagotchi...
// ...with special powers (extend the class)!
// Add an excercise() method to your tomagotchi, that affects certain properties
// Add anything you can think of... use your imagination!



