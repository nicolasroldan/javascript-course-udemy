// JavaScript Fundamentals – Part 1

// 1 Values and Variables

// const country = 'Argentina';
// const continent = 'America';
// let population = 40;

// console.log(country, continent, population)

// 2 Data Types

// const isIsland = false;
// let language;

// console.log(isIsland);
// console.log(population);
// console.log(country);
// console.log(language)

// 3 let, const and var

// const country = 'Argentina';
// const continent = 'America';
// let population = 40;
// const isIsland = false;
// const language = 'Spanish';

// population = 11111;
// language = 'irish'


// console.log(isIsland);
// console.log(population);
// console.log(country);
// console.log(language)

// 4 Basic Operators

// const country = 'Argentina';
// const continent = 'America';
// let population = 45;
// const isIsland = false;
// const language = 'Spanish';

// const halfPopulation = population / 2;
// const finlandPopulation = 6;
// const averagePopulation = 33;
// const description1 = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;

// console.log('half population ', halfPopulation);
// console.log('Population plus 1', population++);
// console.log('Does my country have more people than Finland? ', population > finlandPopulation)
// console.log('Does my country have less people than the average country? ', population > averagePopulation);
// console.log(description1)

// Coding Challenge #1

// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;

// const markBmi = markMass / markHeight ** 2;
// const johnBmi = johnMass / johnHeight ** 2;
// const markHigherBMI = markBmi > johnBmi;
// // const markBmi = markMass / (markHeight * markHeight)
// console.log('Mark´s BMI ', markBmi);
// console.log('John´s BMI ', johnBmi);
// console.log('Mark´s BMI is higher than John´s BMI? ', markHigherBMI);

// const markMass = 95;
// const markHeight = 1.88;
// const johnMass = 85;
// const johnHeight = 1.76;

// const markBmi = markMass / markHeight ** 2;
// const johnBmi = johnMass / johnHeight ** 2;
// const markHigherBMI = markBmi > johnBmi;
// // const markBmi = markMass / (markHeight * markHeight)
// console.log('Mark´s BMI ', markBmi);
// console.log('John´s BMI ', johnBmi);
// console.log('Mark´s BMI is higher than John´s BMI? ', markHigherBMI);


// Strings and template literals

// const country = 'Argentina';
// const continent = 'America';
// let population = 45;
// const isIsland = false;
// const language = 'Spanish';

// const halfPopulation = population / 2;
// const finlandPopulation = 6;
// const averagePopulation = 33;
// const description1 = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
// const description2 = `${country} is in ${continent}, and its ${population} million people speak ${language}`
// // console.log('La primera ', description1)
// // console.log('La segunda ', description2)

// // Taking decisions: if / else statements
// if (population > 33) {
//     console.log(`${country}'s population is above average 🔫`);
// } else {
//     console.log(`${country}'s population is ${33 - population} million below average.`);
// }

// Coding Challenge #2

// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;
// const markMass = 95;
// const markHeight = 1.88;
// const johnMass = 85;
// const johnHeight = 1.76;

// const markBmi = markMass / markHeight ** 2;
// const johnBmi = johnMass / johnHeight ** 2;
// // const markBmi = markMass / (markHeight * markHeight)
// if (markBmi > johnBmi) {
//     console.log(`Marks's BMI (${markBmi}) is higher than John's!`)
// } else {
//     console.log(`John's BMI (${johnBmi}) is higher than Mark's!`)
// }

// Type conversion and Coercion

// console.log('9' - '5'); //4
// console.log('19' - '13' + '17'); // '617'
// console.log('19' - '13' + 17); // 23
// console.log('123' < 57); // false
// console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143

// Truthy ans falsy values
// console.log('holaa')

// 25. Coding Challenge #3
// const dolphinsScore = [97, 112, 101];
// const koalasScore = [109, 95, 106];

// function calculateAverageScore(scores) {
//     return (scores.reduce((acum, score) => acum + score, 0)) / scores.length;
// }

// const dolphinsAverage = calculateAverageScore(dolphinsScore);
// const koalasAverage = calculateAverageScore(koalasScore);

// if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
//     console.log('Dolphins is the winner team!🍭');
// } else if (dolphinsAverage < koalasAverage && koalasAverage >= 100) {
//     console.log('Koalas is the winner team!')
// } else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100 && koalasAverage >= 100) {
//     console.log('There has been a draw...')
// } else {
//     console.log('No one wins the trophy')
// }

// 26. The Switch Statement

// const day = 'tuesday'

// if(day === 'monday') {
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//     console.log('Prepare theory videos');
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('Write code examples');
// } else if (day === ' friday') {
//     console.log('Record videos')
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log('Enjoy the weekend :D')
// } else {
//     console.log('Not a valid day...')
// }

// 29. Coding Challenge #4

const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);
