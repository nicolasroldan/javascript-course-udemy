'use strict '

// 38. Coding Challenge #1

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// avgDolphins = calcAverage(85, 54, 41);
// avgKoalas = calcAverage(23, 34, 27);

// const checkWinner = (avgDolphins, avgKoalas) => {
//     let message;
//     if (avgDolphins >= avgKoalas * 2) {
//         message = `Dolphins win (${avgDolphins} vs. ${avgKoalas})`; 
//     } else if (avgKoalas >= avgDolphins * 2) {
//         message = `Koalas win (${avgKoalas} vs. ${avgDolphins})`; 
//     } else {
//         message = 'No team wins'
//     }
//     console.log(message);
// }

// checkWinner(avgDolphins, avgKoalas);

// 41. Coding Challenge #2

// function calcTip(billValue) {
//     return billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.20;
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

// console.log(total)

// 44

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtman',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,
//     calcAge: function() {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function () {return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`}
// }

// console.log(jonas.getSummary())

// 45. Coding Challenge #3

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function() {
//         this.bmi = this.mass / (this.height ** 2);
//         return this.bmi;
//     }
// }

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function() {
//         this.bmi = this.mass / (this.height ** 2);
//         return this.bmi;
//     }
// }
// mark.calcBMI();
// john.calcBMI();

// if(mark.bmi > john.bmi) {
//     console.log(`${mark.fullName} BMI (${mark.bmi}) is higher than ${john.fullName} BMI (${john.bmi})!`)
// } else {
//     console.log(`${john.fullName} BMI (${john.bmi}) is higher than ${mark.fullName} BMI (${mark.bmi})!`)
// }

// 50. Coding Challenge #4

function calcTip(billValue) {
    return billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.20;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

for(let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    const total = bills[i] + tips[i];
    totals.push(total);
}

function calcAverage(arr) {
    let acum = 0;
    for(let i = 0; i < arr.length; i++) {
        acum += arr[i];
    }
    return acum / arr.length;
}

console.log(totals)
console.log(calcAverage(totals))