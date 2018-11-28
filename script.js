//Lecture: Variables
/*
console.log('Hello World!');
var name = 'Doro';
console.log(name);

var fullName = 'Zabi';
console.log(fullName);

var age = 30;
console.log(age);

var isWoman = true;
console.log(isWoman);
*/
// Lecture: Variables 2
/*
var name = 'John';
var age = 26;

console.log(name + age); //tu będzie koercja do stringa
console.log(age+age); //tu liczby się dodadzą

var job, isMarried;
console.log(job); //undefined

job = 'teacher'; // można je zdefiniować później bez 'var'
isMarried = false;

console.log(name + ' is ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.' );

age = 'twenty six'; // tutaj zmieniam typ i wartość zmiennej
job = 'driver'; //tutaj zmieniam wartość zmiennej

console.log(name + ' is ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.' );

var lastName = prompt('What is Johns last name?');

alert('His last name is ' + lastName + '.');

console.log(name + ' ' + lastName + ' is ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.' );
*/



// Lecture: Operators
/*
var now = 2018
var birthYear = now - 26;
birthYear = now - 26 * 2;
console.log(birthYear);

birthYear = (now - 26) * 2;
console.log(birthYear);

var markAge, johnAge;
markAge = johnAge = 30;
console.log(markAge + ' ' + johnAge);

johnAge *= 2; //johnAge = johnAge * 2
console.log(johnAge);

markAge ++; // markAge + 1
console.log(markAge);

markAge --; // markAge - 1
console.log(markAge);
*/


// Challenge 1
/*
var markMass, markHeigh, johnMass, johnHeigh;

markMass = 70;
markHeigh = 1.90;
johnMass = 120;
johnHeigh = 1.75;

console.log(markMass, markHeigh, johnMass, johnHeigh);

var markBMI, johnBMI;
markBMI = markMass / (markHeigh * markHeigh);
johnBMI = johnMass / (johnHeigh * johnHeigh);

console.log(markBMI + ' ' + johnBMI);

markFat = markBMI > johnBMI;

console.log('Mark\'s BMI is grater than John\'s? That\'s ' + markFat +'!');

*/



//Lecture 2.14: If Else statement 

/*
var name = 'John';
var age = 26;
var isMarried = 'yes';


if (isMarried === 'yes') {
    console.log(name + ' is married.');
}
else{
    console.log(name + ' isn\'t married.')
}


isMarried = false;

if(isMarried){
    console.log('YES!');
}else {
    console.log('NO!');
    
}

//Skrócony if/else kiedy chcemy tylko rezultat od TRUE:

isMarried = true;
if(isMarried) {
    console.log('Tak, właśnie tylko TRUE potrzebujemy');
}

// różnica między === a == 
// == robi koercję
if(23 == '23'){
    console.log('== przekształca numer w string : \'23\' \=\= \'23\' -> TRUE');
}

// === nie robi koercji
if(23 === '23'){
    console.log('=== jest na twardo - i się nie wyświetli');
}

*/


//Challenge 1 +  if/else statement
/*
var markMass, markHeigh, johnMass, johnHeigh;

markMass = 70;
markHeigh = 1.90;
johnMass = 120;
johnHeigh = 1.75;

console.log(markMass, markHeigh, johnMass, johnHeigh);

var markBMI, johnBMI;
markBMI = markMass / (markHeigh * markHeigh);
johnBMI = johnMass / (johnHeigh * johnHeigh);

console.log(markBMI, johnBMI);


if(markBMI > johnBMI){
    console.log('Mark\'s BMI is grater than John\'s!');    
}else{
    console.log('John\'s BMI is grater than Mark\'s!');  
}
*/



// Lecture 2.15: Boolean logic & switch && || ! 
/*
var age = 20
if (age < 12){
    console.log('John is a boy');
}else if (age >=12 && age < 20) {
    console.log('John is a teenager');
} else if (age >= 20 && age < 30) {
    console.log('John is a young man');
}else {
    console.log('John is a middle age man');
}
*/


/*
// Lecture 2.16: Ternary operator and switch statements


// Ternary: 3 parts: 1.statement >=<, 2.if ?, 3.else : //

var age = 15
age > 18 ? console.log('You can drink beer.')
: console.log('You drink juice');


var drink = age > 18 ? 'beer' : 'juice';
console.log(drink);


// Switch: case: break: default

var job;
job = prompt('What is his job?');
switch (job) {
    case 'teacher':
    case 'instructor':
    case 'mentor':    
        console.log('John teaches people.');
        break;
    case 'singer':
        console.log('John sings.');
        break;
    case 'cop':
        console.log('John fights crime.');
        break;
    default:
        console.log('John does nothing interesting ;)');
}


// Switch with boolean / logical expression


age = 20

switch (true){
    case age < 12:
        console.log('John is a boy');
        break;
    case age >=12 && age < 20:
        console.log('John is a teenager');
        break;
    case age >= 20 && age < 30:
        console.log('John is a young man');
        break;
    default:
        console.log('John is a middle age man');    
}
*/



// Lecture 2.17 
// Thuthy and Falsy 


/*
alert('Falsy are: undefined, null, 0, \' \', Nan.');


// What to do with zero 0 ? 

var height = 0
if (height) {
    console.log('You know how to deal with zero. :)');
}else {
    console.log('Your var is zero and is falsy now. :(');
}


if (height || height === 0) {
    console.log('You know how to deal with zero now. :)');
}else {
    console.log('Your var is zero and is falsy. :(');
}


// Equality operator:


height = 23 //number
if(height == '23'){ //str*
var johnScore, miceScore;
johnScore = (89 + 120 + 103) / 3;
markScore = (116 + 94 + 123) /3;

console.log('John: ' + johnScore);
console.log('Mark: ' + markScore);


if (johnScore > markScore){
    console.log('John wins with score ' + johnScore );
}else if (markScore > johnScore) {
    console.log('Mark wins with score ' + markScore);
//} else if (age >= 20 && age < 30) {
 //   console.log('John is a young man');
}else {
    console.log('It\'s a tie with ' + johnScore, markScore);
}


var maryScore;
maryScore = (97 + 134 + 102) /3;
console.log('Mary: ' + maryScore);


if (johnScore > markScore && johnScore > maryScore){
    console.log('John wins with the score ' + johnScore );
}else if (markScore > johnScore && markScore > markScore) {
    console.log('Mark wins with the score ' + markScore);
}else if (maryScore > johnScore && maryScore > markScore ) {
    console.log('Marry wins with the score ' + maryScore);
}else {
    console.log('It\'s a tie!');
}
*/




// Challenge 1 (OLD,2016) 

/* var johnHeight, johnAge, friendHeight, friendAge, thirdHeight, thirdAge;

johnHeight = 170;
johnAge = 20;
friendHeight = 170;
friendAge = 20; 
thirdHeight = 170;
thirdAge = 20; */

// to parse string to intiger
/* 
var x = parseInt(prompt("Enter a Value", "0"), 10);
var y = parseInt(prompt("Enter a Value", "0"), 10);*/

/*
johnHeight = parseInt(prompt('Insert Johns height in cm', '0'), 10);
johnAge = parseInt(prompt('Insert Johns age in years', '0'), 10);
friendHeight = parseInt(prompt('Insert Friend\'s height in cm', '0'), 10);
friendAge = parseInt(prompt('Insert Friend\'s age in years', '0'),10);
thirdHeight = parseInt(prompt('Insert third player\'s height in cm', '0'), 10);
thirdAge = parseInt(prompt('Insert third player\'s age in years', '0'),10); 


console.log(johnHeight);
console.log(johnAge);
console.log(friendHeight);
console.log(friendAge);
console.log(thirdHeight);
console.log(thirdAge);


var johnScore, friendScore, thirdScore;
johnScore = johnHeight + (johnAge * 5);
friendScore = friendHeight + (friendAge * 5);
thirdScore = thirdHeight + (thirdAge * 5);

alert('John: ' + johnScore + '; Friend: ' + friendScore + '; Player3: ' + thirdScore);
console.log('John: ' + johnScore + '; Friend: ' + friendScore + '; Player3: ' + thirdScore);

if (johnScore > friendScore && johnScore > thirdScore) {
    alert('John wins!');
} else if (johnScore === friendScore && friendScore === thirdScore){
    alert('Ultimate Tie!');
} else if (thirdScore > johnScore && thirdScore > friendScore) {
    alert('Player3 wins!');
} else if (friendScore > johnScore && friendScore > thirdScore) {
    alert('Friens wins!');
} else {
    alert('Unresolved');
}
*/

// ******************************************



// Function


// Structure:
/*
function nameOfThisFunction(anArgument){ // also zero argument() or many (x, y, z)
    return 2018 - anArgument; // nameOfThisFunction is returned, anArgument will be provided
}
//nameOfThisFunction(1987); // here argument is provided in the brackets it has to be stored somewhere, so:
var varToStoreResultOfFunction = nameOfThisFunction(1990); //this var stores the result 
console.log('example 0 ' + varToStoreResultOfFunction);
*/

// Example 1:
 /*
function calculateAge(yearOfBirth){
    return 2018 - yearOfBirth;
}
var ageJohn = calculateAge(1990); // in this line we 'call' the function
console.log('John\'s age is ' + ageJohn);
// now I can use function many times:
var ageMike = calculateAge(1948);
var ageMary = calculateAge(1960);
console.log(ageJohn, ageMike, ageMary); */


//Examle 2:
// Comment Example 1! Or see what hapened when we use the same name of function.
// In this example we didn't use "return" but we use "var"
/*
function calculateAge(yearOfBirth){
    var ageOfPerson = 2018 - yearOfBirth; // return stops functon immediatelly
    console.log('Person\'s age is ' + ageOfPerson);
}
//calling function
calculateAge(1990);
calculateAge(1987);
calculateAge(1988); 
*/

//Example 3:
// Comment Example 1 & Example 2.
/*
function calculateAge(yearOfBirth) {
    age = 2018 - yearOfBirth;
    return age;
    // efektem tej funkcji jest obliczenie age, return. ta funkcja zadziałała bez var, bo użyliśmy return.
}

// console.log(age); //to wywłanie age nie zadziała, bo nigdzie nie wywołaliśmy jeszcze funkcji
console.log(calculateAge(1987) + ' to wywołanie funkcji'); //wywołanie funkcji w console log.
console.log(age);
console.log(calculateAge(2018) + ' to drugie wywołanie')
console.log(age); // age się zmieniło przez ostatnie wywołanie funkcji.
*/

//Example 4:
// Function with 2 parameters. Var, no return
/*
function ageOfPerson(year, name) {
    var age = 2018 - year;
    console.log(name + ' is ' + age + ' years old.')
}
ageOfPerson(1987, 'Doro');
ageOfPerson(1988, 'Sali');
ageOfPerson(1986, 'Karo'); */


// Example 5:
// Comment Examples above
// Copy and paste function Example 1 here and then reuse this function in another function


/*
function calculateAge(yearOfBirth){
    return 2018 - yearOfBirth;
}

 
function yearsToRetirement(year, firstName ) { 
    var age = calculateAge(year);
    var years = 65 - age;
    
    if (year >= 0){
        console.log('Years to retirement for ' + firstName + ' is ' + year);
    } else {
        console.log(name + ' is already retirement.')
    }
        
    //efekten tej funkcji jest console.log ze zmiennymi z argumentami i var w funkcji
}

// Wywołanie funkcji:
yearsToRetirement(1990, 'John');
yearsToRetirement(1948, 'Mike');
yearsToRetirement(1969, 'Jane');
*/



// Lecture 2.21 Function Statements and Expressions 
// Expressions:
// produce a value or outcome or product, eg
/* var someFun = function(par);
3 + 4;
var x = 5; */

// Statements
// perform action but doesn't produce value, eg
/* function someFun(par) {
    //code
}

if(x===5){
    //do something
} */


// Expression example
/*
var whatDoYouDo = function(job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids';
        case 'driver':
            return firstName + ' drives';
        case 'designer':
            return firstName + ' designs UX';
        default: 
            return firstName + ' does something else';
    }
}
console.log(whatDoYouDo('designer', 'Jakub'));
console.log(whatDoYouDo('actor', 'Olivier'));
*/


// Lecture 2.22 Arays
// [0, 1, 2]
/*
var names = ['Doro', 'John', 'Kuba']; // we use brackets [,] 
var years = new Array(30, 26, 31); // this is Array function
console.log(names[0]); // first element has 0 
console.log(names);
console.log(names.length) // shows how many elements there is in array

// mutacja określonego elementu
names[1] = 'Kasia';
names[5] = 'Andrzej'; // in this case add 6th element
console.log(names);

// mutacja arraya
var doro = ['Doro', 30, false];
console.log(doro);
doro.push('QA engineer'); //dodaje na końcu
console.log(doro);
doro.unshift('Ms'); // dodaje na początku
console.log(doro);
doro.pop(); // usuwa ostatni
console.log(doro);
doro.shift(); // usuwa pierwszy
console.log(doro);

doro.indexOf(30); // pokaż pozycję elementu
console.log(doro.indexOf(30));
console.log(doro.indexOf('singer')); // shows -1 because element isn't in array
// sprawdzenie czy elemntu nie ma w array'u
if (doro.indexOf('singer') === -1) {
    console.log('Doro isn\'t a singer');
}else{
    console.log('Doro is a singer');
}
*/

// ***********************************************************************************
// Lecture 2.23
// Coding Challenge 3 

/* The bills were $124; $48, $268.
Tip calculator as a function
rules: 
20% if bill <$50
15% if bill <&50; &200>
10% if bill > $200

End results has to be in arrays:
1) [tip1, tip2, tip3] bill * %
2) [total1, total2, total3] tip + bill

Formula for percentege: bill*20/100 === bill*0.2
*/

// My solution: 
/*
var percentage = function(bill){
    if (bill < 50){
        var tip = bill*0.2;
    }else if (bill >= 50 && bill <=200){
        var tip = bill*0.15;
    }else{
        var tip = bill*0.1;
    }
    return tip
}
console.log(percentage(124));

var total = function(bill) {
    var tip = percentage(bill);
    var totalSpend = tip + bill
    return totalSpend
}

console.log(total(124));

var tips = [percentage(124), percentage(48), percentage(268)];
var totalBills = [total(124), total(48), total(268)];

console.log(tips);
console.log(totalBills);
*/

// Lecture 2.24 - Trainer solution





//*********************************************************************************
// Lecture 2.25 Objects and properties

/*
//Example
var objectName = {
    key: 'value',
    key1: 'value1'
};
// Example 2
var newObjectName = new Object();

// object literal - pierwszy sposób tworzenia obiektu
var john = {
    name: 'John',
    surname: 'Smith',
    yearOfBirth: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john); // wywołanie całego obiektu

console.log(john.name); // wywołanie klucza
console.log(john['name']); // wywołanie klucza drugi sposób

var x = 'name';
console.log(john[x]); // zagmatwany sposób na to samo


// ******** Mutacje *****
john.surname = 'Miller';    // .key =
john['job'] = 'progammer';  // ['key'] =
console.log(john);



//  ********** Inny sposób tworzenia obiektu ********* 
// new Object syntax
var jane = new Object(); // pusty obiekt
// teraz można go wypełnić key=value

jane.name = 'Jane';
jane.surname = 'Smith';
jane['yearOfBirth'] = 1991;
jane['job'] = 'Actress';
jane['isMarried'] = true;

console.log(jane); 
*/

// Lecture 2.26 
// objects continue + function inside 

//Intr to Examples:

/*
// I use the john object, but only with yearOfBirth, 
//because I dont need any other key for calculation:
var john = {    
    yearOfBirth: 1990,
};
console.log(john);
*/


// Example1
// comment Intro

//Object:
/*
var john = {    
    yearOfBirth: 1990,
};
// Mutation: new key to this object, calcAge is function:

john.calcAge = function(birthYear){
    return 2018 - birthYear;
}
console.log(john.calcAge(1990)); // I have to call it here with year
console.log(john); // calcAge:f (no number)
*/

//Example 2: using function() and THIS:
// comment above
/*
var john = {    
    yearOfBirth: 1990,
};
 
john.calcAge = function(){
    return 2018 - this.yearOfBirth;
}
console.log(john.calcAge()); // now can call it without a year
console.log(john); // calcAge:f (no number
*/

// Example 3: I add the new key with outcome of function (number)
// comment above

/*
var john = {    
    yearOfBirth: 1990
};
 
john.calcAge = function(){
    return 2018 - this.yearOfBirth;
}
var age = john.calcAge();  // hey I want a new var with number
console.log(age);
john.age = age; // and here I put this var to john Object
// nobody tells you, but john.age = john.calcAge(); /next Example

console.log(john); // look this is object john with his age
*/

// Example 4. I don't want to declare new var for age
// I want it just right into object
// And I want it all in object without mutation

/*
var john = {    
    yearOfBirth: 1990,
    calcAge: function(){
        return 2018 - this.yearOfBirth;
},
};

john.age = john.calcAge(); // nobody tells you Ex3
console.log(john);
*/

// Example 5 - putting age into function calculation as this.age
// comment above
/*
var john = {    
    yearOfBirth: 1990,
    calcAge: function(){
        this.age = 2018 - this.yearOfBirth; // john.age = ~john.calcAge();~ = calculation itself
},
};
console.log(john); // no age?????

john.calcAge(); // call this function
console.log(john); // and now there is AGE
*/


//****************************************************************
//Lecture 2.27
// Coding Challenge 4
// create objects mark and john and add method to calc BMI
/*
var markMass, markHeigh, johnMass, johnHeigh;
markMass = 70;
markHeigh = 1.90;
johnMass = 120;
johnHeigh = 1.75;
console.log(markMass, markHeigh, johnMass, johnHeigh);

var markBMI, johnBMI;
markBMI = markMass / (markHeigh * markHeigh);
johnBMI = johnMass / (johnHeigh * johnHeigh);

console.log(markBMI + ' ' + johnBMI);
markFat = markBMI > johnBMI;
console.log('Mark\'s BMI is grater than John\'s? That\'s ' + markFat +'!');
*/
// My solution

function calculateBMI(mass, height){
    BMI = mass / (height*height);
    return BMI;
};
console.log(calculateBMI(63,1.65));


var mark = {
    mass:70, //kg
    height: 1.90, //m
    calcBMI: function(){
        this.BMI = this.mass / (this.height * this.height);
}
};
mark.calcBMI();

var john = {
    mass:120,
    height: 1.75,
};

// using outside function
john.BMI = calculateBMI(john.mass,john.height);

console.log(mark);
console.log(john);





