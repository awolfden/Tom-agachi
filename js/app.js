console.log('Tom-agachi');

const playGame = () => {



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

// Animation Functions
const goTomGo = () => {
    for(let i = 0; i < 10000; i++){
        $('#arena img').animate({
            'left': '990px',    
            }, 3000);
            
        $('#arena img').animate({
            'left': '0px'    
            }, 3000);
    }
};

const goTommyTwo = () => {
    for(let i = 0; i < 10000; i++){        
        $('#upgrade').animate({
            'left': '495px',
            'top': '140px'    
            }, 1500);
        $('#upgrade').animate({
            'left': '990px',
            'top': '50px'  
            }, 1500);
        $('#upgrade').animate({
            'left': '495px',
            'top': '-40px'  
            }, 1500);
        $('#upgrade').animate({
            'left': '0px',
            'top': '50px'  
            }, 1500);
    }
};

const goTommyThree = () => {
    for(let i = 0; i < 10000; i++){        
        $('#upgrade').animate({
            'left': '247.5px',
            'top': '140px'    
            }, 1000);
        $('#upgrade').animate({
            'left': '247.5px',
            'top': '-40px'  
            }, 1000);
        $('#upgrade').animate({
            'left': '495px',
            'top': '140px'  
            }, 1000);
        $('#upgrade').animate({
            'left': '495px',
            'top': '-40px'  
            }, 1000);
        $('#upgrade').animate({
            'left': '742.5px',
            'top': '140px'  
            }, 1000);
        $('#upgrade').animate({
            'left': '742.5px',
            'top': '-40px'  
            }, 1000);
        $('#upgrade').animate({
            'left': '990px',
            'top': '140px'  
            }, 1000);
        $('#upgrade').animate({
            'left': '990px',
            'top': '-40px'  
            }, 1000);
        $('#upgrade').animate({
            'left': '0px',
            'top': '50px'  
            }, 1000);
    }
};

const goTommyFour = () => {
    for(let i = 0; i < 10000; i++){        
        $('#upgrade').animate({
            'left': '247.5px',
            'top': '140px',
            'height': '150',
            'width': '140'    
            }, 1000);
        $('#upgrade').animate({
            'left': '247.5px',
            'top': '-40px',
            'height': '300',
            'width': '280'    
            }, 1000);
        $('#upgrade').animate({
            'left': '495px',
            'top': '140px',
            'height': '150',
            'width': '140'    
            }, 1000);
        $('#upgrade').animate({
            'left': '495px',
            'top': '-40px',
            'height': '300',
            'width': '280'     
            }, 1000);
        $('#upgrade').animate({
            'left': '742.5px',
            'top': '140px',
            'height': '150',
            'width': '140'   
            }, 1000);
        $('#upgrade').animate({
            'left': '742.5px',
            'top': '-40px',
            'height': '300',
            'width': '280'    
            }, 1000);
        $('#upgrade').animate({
            'left': '990px',
            'top': '140px',
            'height': '150',
            'width': '140'    
            }, 1000);
        $('#upgrade').animate({
            'left': '990px',
            'top': '-40px',    
            }, 1000);
        $('#upgrade').animate({
            'left': '0px',
            'top': '50px',
            'height': '150',
            'width': '140'    
            }, 1000);
    }
};

// Keeps track of the seconds
let seconds = 0;

// instantiates the Tom
tomFactory.makeTom('Tommy-gochi', 'https://i.pinimg.com/originals/a8/a0/b1/a8a0b1f02925966d3bcd341f9fe929fc.png');

//function to put Tom on screen
const makeTommy = () => {
    $('#arena').append(`<img src="${tomFactory.tomArr[0].imgFile}" height="150" width="140">`);
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

const refreshStats = () => {
    $('#stats').remove();
    $('#stat-container').append('<div id="stats"><h1>Stats</h1><ul class="statList"></ul></div>');
    makeStats()
}

// makeButtons puts the buttons on the screen
const makeButtons = () => {
    $('#buttons').append('<div id="feed">Treat Yo Self!</div><div id="lightsOff">Tommy Go Night Night</div><div id="play">Hit the Snakehole Lounge</div>');
}

// Render function clears board and reloads current stats, links to listenToStuff
const render = () => {

    makeBoard();
    makeStats();
    makeButtons();
    makeTommy();
    listenToStuff();

    goTomGo();

}

// Function checks if its time for tom to morph
const morphinTime = () => { 
    if (seconds === 159){ 
        $('#arena img').remove();
        tomFactory.tomArr.pop();
        tomFactory.makeTom('Tommy-gochi', 'http://www.nebeep.com/wp-content/uploads/2018/02/TomHaverford.jpg');
        makeTommy();
        $('#arena img').attr('id', 'upgrade');
        goTommyTwo();
    } else if (seconds === 318){
        $('#upgrade').remove();
        tomFactory.tomArr.pop();
        tomFactory.makeTom('Tommy-gochi', 'https://nypdecider.files.wordpress.com/2018/01/aziz-golden-globes.png?w=646&h=431&crop=1');
        makeTommy();
        $('#arena img').attr('id', 'upgrade');
        goTommyThree();
    } else if (seconds === 636){
        $('#upgrade').remove();
        tomFactory.tomArr.pop();
        tomFactory.makeTom('Tommy-gochi', 'https://media.giphy.com/media/xb8zoHFCKU0Ra/giphy.gif');
        makeTommy();
        $('#arena img').attr('id', 'upgrade');
        goTommyFour();
    }
};

// Function checks if stats need updating based on time and udates them through render()
const statTracker = () => {
    if (seconds % 43 === 0){
        currentTom.hunger++;
        refreshStats();
    } else if (seconds % 67 === 0) {
        currentTom.sleepiness++;
        currentTom.lightsOn = true;
        $('#arena').css('background-image', 'url("https://www.cambridgema.gov/~/media/Images/sharedphotos/departmentphotos/City-COuncil.jpg?mw=767")');
        refreshStats();
    } else if (seconds % 71 === 0) {
        currentTom.boredom++;
        refreshStats();
    } else if(seconds % 53 === 0){
        currentTom.age++;
        refreshStats();
    } 
};

const deathRattle = () => {
        $('#arena img').remove();
        $('#arena').append('<img id="skull" src="https://media3.giphy.com/media/wVcNP3TnXbl84/giphy.gif?cid=790b76115ca42e934e766c726f404fb7" height="150" width="128">');
        $('#arena').css('display', 'flex');
        $('#arena img').css({'display': 'flex', 'left': '0', 'border': '10px solid black', 'border-radius': '100px', 'object-fit': 'stretch'});
        $('#skull').animate({
            'height': '300',
            'width': '280',
            'top': '-30px' 
            }, 2000);
        $('body').append('<audio autoplay><source src="ron-tom-faint.mp3" type="audio/mpeg"></audio>');
}

// Function checks if it's time for tom to die
const isTomDead = () => {
    if (currentTom.hunger < 0 || currentTom.sleepiness < 0 || currentTom.boredom < 0){
        currentTom.alive = false;
        clearInterval(timer);
        $('#arena').append('<div id="death"><h1>YOU KILLED TOMMY!<br>YOU <span>MONSTER!</span></h1></div>');
        deathRattle();
        //$('body').append('<audio autoplay><source src="ron-tom-faint.mp3" type="audio/mpeg"></audio>');
        
    } else if (currentTom.hunger >= 10 || currentTom.sleepiness >= 10 || currentTom.boredom >= 10){
        currentTom.alive = false;
        clearInterval(timer);
        $('#arena').append('<div id="death"><h1>YOU KILLED TOMMY!<br>YOU <span>MONSTER!</span></h1></div>');
        deathRattle();
        //$('body').append('<audio autoplay><source src="ron-tom-faint.mp3" type="audio/mpeg"></audio>');
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
    refreshStats();
});

//function to listen to the buttons
const listenToStuff = () => {    
    $('#buttons').on('click', (e) => {
        if(e.target.id === 'feed'){
            currentTom.hunger = currentTom.hunger-=1;
            $('body').append('<audio autoplay><source src="treat-yo-self.mp3" type="audio/mpeg"></audio>');
            refreshStats();
        } else if (e.target.id === 'lightsOff'){
            if (currentTom.lightsOn){
                currentTom.sleepiness--;
                currentTom.lightsOn = false;
                refreshStats();
                $('#arena').css('background-image', 'url("https://townsquare.media/site/518/files/2017/11/Night-sky.jpg")');
                $('body').append('<audio autoplay><source src="date-song.mp3" type="audio/mpeg"></audio>');
            }
        } else if (e.target.id === 'play'){
            currentTom.boredom = currentTom.boredom-=1;
            refreshStats();
            $('body').append('<audio autoplay><source src="is-that-genuine.mp3" type="audio/mpeg"></audio>');
        }
    });
}

// Function adds to the seconds and call the other related functions
const secondsGoUp = () => {
    if(seconds < 318){
        seconds += 1;
    } else if(seconds < 636){
        seconds += 2;
    } else {
        seconds += 3;
    }
    
console.log(seconds);
    
    //calls to functions that do things based on time passing
    statTracker();
    morphinTime();
    isTomDead();
}
const timer = setInterval(secondsGoUp, 100);


// Loads the game board when the page loads
render();




// Extras
// Have your tomagotchi give birth to baby tomagotchi...
// ...with special powers (extend the class)!
// Add an excercise() method to your tomagotchi, that affects certain properties
// Add anything you can think of... use your imagination!


}

const welcomeScreen = () => {
    $('body').append('<div id="flex-container"><div id="welcome"><h2>Brought to you by Entertainment 720</h2><h3>Click on Tommy to get started!</h3></div></div>');
    $('#welcome').append('<button></button>');
    $('button').on('click', () => {
        playGame();
        $('#welcome').remove();
    })
}

welcomeScreen();