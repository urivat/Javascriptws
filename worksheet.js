"scrict";

/*let dayOfTheWeek = "monday"
console.log(dayOfTheWeek)
dayOfTheWeek = "friday"
console.log(`I can't wait for ${dayOfTheWeek}`);*/

/*2 
let animalInput = prompt("What is your favorite animal")
let colorInput = prompt("What is your favorite color")
console.log(`I've never seen a ${colorInput} ${animalInput}!`)*/

/*3 breakfast:sausage lunch: steak Dinner: eggs 
let timeOfDay = 1700;
let mealChoosen = ''
if (timeOfDay < 1200){
    mealChoosen ='sausage'
}else if (timeOfDay >= 1200 && timeOfDay <=1700){
    mealChoosen = 'steak '
}else if (timeOfDay > 1700){
    mealChoosen = 'eggs'
}
console.log(mealChoosen)*/
/*2 random number
let randomNumber = 10;
let random = Math.random() * randomNumber;
console.log(Math.floor(random));
let randoms = Math.floor(random)
if (randoms > 0 && randoms <= 2){
    console.log("Beatles")
}else if (randoms >=3 && randoms <=5){
    console.log("Stones")
} else if (randoms >= 6 && randoms <=8){
    console.log("Floyd")
} else if ( randoms >= 9 && randoms <= 10){
    console.log("Hendrix")
}*/
/* loops
for (let h = 0; h < 7; h++){
    console.log("JavaScript is cool!")
}

for ( let n =0; n < 11; n++){
    console.log(n)
}


for (i = 0; i < 6; i++){
    console.log('hello\ngoodbye')
}*/
/**functions.favorite movie 

function printMovieName(){
    let favoriteMovie = 'Matrix';
    return favoriteMovie
}
 let results = printMovieName();
 console.log(results)

 function pickYourFavoriteBand(){
     let pick = prompt('whats your favorite band ')
     return pick 
 }
 let result = pickYourFavoriteBand();
 let userPick= result
 console.log(userPick)*/
 /**Favorite Band(return functions) 
function favoriteBand(userInput){
    return userInput
    }


let isBestBand = favoriteBand(
    prompt('please enter a band: ')
);
console.log(isBestBand)*/
/**concert(parameters) 
function concertDisplay(musicalAct){
    myStreet = prompt('Whats the name of your street');{
    console.log(`It would be great if ${musicalAct} played a show on ${myStreet}`);
    }
}
concertDisplay(isBestBand)*/
/**Desktop Items 
let desktopItems = ['notebook','waterbottle','modem']
console.log(desktopItems[1]);
desktopItems.push('InfinityGauntlet');
for (let index = 0; index < desktopItems.length; index++) {
    console.log(desktopItems[index])
    
}*/
let magicNumber = 50;
let guess = 0;
let guessedNumber=(prompt('guess which number is the magic number'));
while (guess != magicNumber){
    console.log(guessedNumber)
        guess+= guessedNumber
        if (guess < magicNumber){
            console.log('Too low')}
        else if (guess > magicNumber){
        }console.log('Too high')
}    
    
    
    

