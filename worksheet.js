"scrict";

/*let dayOfTheWeek = "monday"
console.log(dayOfTheWeek)
dayOfTheWeek = "friday"
console.log(`I can't wait for ${dayOfTheWeek}`);*/

/*2 
let animalInput = prompt("What is your favorite animal")
let colorInput = prompt("What is your favorite color")
console.log(`I've never seen a ${colorInput} ${animalInput}!`)*/

/*3 breakfast:sausage lunch: steak Dinner: eggs */
let timeOfDay = 1700;
let mealChoosen = ''
if (timeOfDay < 1200){
    mealChoosen ='sausage'
}else if (timeOfDay >= 1200 && timeOfDay <=1700){
    mealChoosen = 'steak '
}else if (timeOfDay > 1700){
    mealChoosen = 'eggs'
}
console.log(mealChoosen)