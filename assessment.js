//#1 Create a var called hello that says goodbye
var hello = "goodbye";


//#2 Use iLove to create a new var called iLoveCode that says "I love code"
var iLove = "I love code"

var iLoveCode = iLove;

//#3  Make an object called bob
// bob has a height of 6ft (string)
// bob has an age of 24 (Number)
// bob has hair, that has style spikey, and color brown (object)
// bob is not presidentOfTheUnitedStates (boolean)
// bob likes apples, bananas, and cherries (array of strings)

var bob = {
  height: "6ft",
  age: 24,
  hair: {
    style: "spikey",
    color: "brown"
  },
  presidentOfTheUnitedStates: false,
  likes: ["apples", "bananas", "cherries"]
}

//#4 Change my shirt color to pink using dot notation
var myShirt = {
  type: "polo",
  color: "red"
}

myShirt.color = "pink";
// Change my shirt type to spandex using square bracket notation
var myOtherShirt = {
  type: "polo",
  color: "red"
}

myOtherShirt["type"] = "spandex";
//#5 Create an object that tracks a count of animals in a zoo.  Call it 'zoo'
// The key should be the animal name(string) and the value should be how many there are.
// Our zoo has 8 monkeys, 4 giraffe’s and 2 elephants
var zoo = {
  monkeys: 8,
  giraffes: 4,
  elephants: 2
}


//#6 Loop through this object and change all properties that start with the letter s to have a value of 's'
var snake = {
  sliters: 'sideways',
  eats: 'rodents',
  says: 'ssss',
  smells: 'heat',
  runs: 'legless'
}

for(var prop in snake) {
  if(prop.charAt(0) === "s"){
  	snake[prop] = "s";
  }
}


//#7 Create an array of strings that are the 6 primary colors (lower-case). Call your array primaryColors
var primaryColors = ["red", "blue", "yellow", "green", "violet", "orange", "indigo"];
//#8 Using this array do the following
var heroes = ['superman', 'batman', 'flash'];
//add 'wonderwoman' to the end
heroes.push("wonderwoman");
//remove 'superman' and store him in a var called firstHero
var firstHero = heroes[heroes.indexOf('superman')];
heroes.splice(heroes.indexOf('superman'), 1);
//add 'spongebob' to the start of the array
heroes.unshift("spongebob");
//remove 'flash' from the array and store him in a var called secondHero
var secondHero = heroes[heroes.indexOf('flash')];
heroes.splice(heroes.indexOf('flash'), 1);
//leave batman in the array but put a copy of him on a var called thirdHero
var thirdHero = heroes.slice(heroes.indexOf('batman'), heroes.indexOf('batman') + 1).join();

//#9 Write a function called addItem, that takes in an array, and adds the item to
// the array.
function addItem(arr, item){
  arr.push(item);
  return arr;
}

//#10 Write a function called removeItem, that takes in an array of strings, and a string.
// Removes all instances of that string from the array. And return the modified array.
// The order of the array should not be changed
function removeItem(arr, str) {
	var newArray = [];
  for(var i = 0; i < arr.length; i++){
    if(arr[i] !== str) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

//#11 Write a function doubleTheFun that takes 1 parameter it doubles numbers, and
// repeats strings example 4->8, 2.5->5, 'Awesome'->'AwesomeAwesome'
function doubleTheFun(thing) {
	if(typeof thing === 'number'){
		return thing * 2;
	}
	else if(typeof thing === 'string'){
		parseInt(thing);
		if(thing / 2) {
			return thing * 2;
		}else {
			return thing + thing;
		}
	}
}

//#12 Write function getValueOfProperty that takes in an object, and the name of a property on the object
// return the value from the object that corresponds to the property
function getValueOfProperty(obj, propertyName){
  return obj[propertyName];
}
//#13 Write a function called makeChatMessage that takes in a message and author parameter
// and returns an object with a message, author, and timestamp, that is
// the current time as a Date object
function makeChatMessage(message, author) {
  var date = new Date();
  var someObject = {
    message: message,
    author: author,
    timestamp: date
  }

  return someObject;
}
//#14 Create a function called coderTest that takes in an object that is a person, it looks to see if the person’s name is Jeremy and changes the person object to have a property called lovesCode with a value of 10.  If their name is Brack set lovesCode to 0.  otherwise set lovesCode to 5.
function coderTest(person) {
  if(person.name === "Jeremy"){
    person.lovesCode = 10;
  }
  else if(person.name === "Brack"){
    person.lovesCode = 0;
  }else{
    person.lovesCode = 5;
  }
  return person;
}
//#15 Create a function called outside that takes in a temperature (number), a humidity(number), and a cloudiness(number), in that order. Using the following to return the correct values
/*
    temperature over 80 and humidity over 40 - return "I'm all sweat"
    temperature under 40 and cloudiness over 60 - return "I have icecicles"
    temperature over 80 and humidity under 40 and cloudiness under 20 - return "I'm literally in the desert"
    temperature over 80 or humidity over 50 or cloudiness over 50 - return "Hmm, probably not"
    Otherwise - return "I love outside"
*/
function outside(temperature, humidity, cloudiness){
  if(temperature > 80 && humidity > 40){
    return "I'm all sweat";
  }
  else if(temperature < 40 && cloudiness > 60){
    return "I have icecicles";
  }
  else if(temperature > 80 && humidity < 40 && cloudiness < 20){
    return "I'm literally in the desert";
  }
  else if(temperature > 80 || humidity > 50 || cloudiness > 50){
    return "Hmm, probably not";
  }else {
    return "I love outside";
  }
}
//#16 Create a function called callerBack that takes in a function (holla) and a string parameter(back) and invokes it(holla) with the string(back) + ' back'.
//IE - If I call you with 'Give it' you should invoke holla with 'Give it back'

function callerBack(fnc, str) {
  str = str + ' back';
  return fnc(str);
}
