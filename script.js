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














/*

//Lecture: If Else statement 

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
    console.log('== przekształca numer w string');
}

// === nie robi koercji
if(23 === '23'){
    console.log('=== jest na twardo - i się nie wyświetli');
}

*/

// Lecture: Boolean logic & switch && || ! 
/*
var age = 20
if (age <20) {
    console.log('John is a teenager');
} else if (age >= 20 && age <30) {
    console.log('John is a young man');
}else {
    console.log('John is a middle age man');
}

var job;
job = prompt('What is his job?');
switch (job) {
    case 'teacher':
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

*/















// Challenge 1

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

// Function
/*
function calculateAge(yearOfBirth) {
    var age = 2018 - yearOfBirth;
    return age;
    // efektem tej funkcji jest obliczenie var age, return. Nic nie zrobi bez podania var dalej
}

var ageRadek = calculateAge(1953);
var ageMaciej = calculateAge(1950);
var ageDoro = calculateAge(1987);

console.log(ageRadek);
console.log(ageMaciej);
console.log(ageDoro); /*

// Zapisać powyższą funkcję z dwoma parametrami: imię i lata.
// console.log w funkcji
// wywołać bez var
/*
function ageOfPerson(year, name) {
    var age = 2018 - year;
    console.log(name + ' is ' + age + ' years old.')
}

ageOfPerson(1987, 'Doro');
ageOfPerson(1988, 'Sali');
ageOfPerson(1986, 'Karo');
*/

/*
function yearsToRetirement(name, yearOfBirth ) { 
// argument ma taką samą nazwę, ale jest innym argumentem, bo w innej funkcji. Ha!
    var age = calculateAge(yearOfBirth);
    var years = 65 - age;
    
    if (years >= 0){
        console.log('Years to retirement for ' + name + ' is ' + years);
    } else {
        console.log(name + ' is already retirement.')
    }
        
    //efekten tej funkcji jest console.log ze zmiennymi z argumentami i var w funkcji
}

// Wywołanie funkcji:
yearsToRetirement('Maciej', 1950);
yearsToRetirement('Doro', 1987);
yearsToRetirement('Radosław', 1953);

*/

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


// Arays
// [0, 1, 2]
/* var names = ['Doro', 'John', 'Kuba'];
var years = new Array(30, 26, 31);
console.log(names[0]);
console.log(names);

// mutacja określonego elementu
names[1] = 'Kasia';
console.log(names[1]);

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

// sprawdzenie czy elemntu nie ma w array'u
if (doro.indexOf('singer') === -1) {
    console.log('Doro isn\'t a singer');
} */

// Objects = {} dwukropek przecinki

/*
var john = {
    name: 'John',
    surname: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false
};

console.log(john); // wywołanie całego obiektu
console.log(john.name); // wywołanie klucza
console.log(john['name']); // wywołanie klucza drugi sposób
var xyz = 'name';
console.log(john[xyz]); // zagmatwany sposób na to samo
// mutacje
john.surname = 'Miller';
john['job'] = 'progammer'

// Inny sposób tworzenia obiektu

var jane = new Object(); // pusty obiekt
// teraz można go wypełnić key=value
jane.name = 'Jane';
jane.surname = 'Smith';
jane['yearOfBirth'] = 1991;
jane['job'] = 'Actress';
jane['isMarried'] = true;

console.log(jane); */

// objects continue

/*

var john = {
    name: 'John',
    surname: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    //calculateAge: function(yearOfBirth) {
    //    return 2018 - yearOfBirth
    //}
    calculateAge: function() {
        return 2018 - this.yearOfBirth // john.yearOfBirth
    }
};

console.log(john.calculateAge());

*/










