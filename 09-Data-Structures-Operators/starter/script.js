'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// Challenge 1

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
//   printGoals: function(...players) {
//     for(let i = 0; i < players.length; i++) {
//       let goals = 0;
//       this.scored.forEach(el => {
//         if(el === players[i]) {
//           goals++;
//         }
//       })
//       console.log(`Player ${players[i]}, goals: ${goals}`);
//     }
//   }
// };
// // 1
// const [players1, players2] = game.players;

// // 2

// const [gp1, ...fieldPlayers1] = players1;
// const [gp2, ...fieldPlayers2] = players2;

// // 3
// const allPlayers = [...players1, ...players2];

// // 4

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']
// // 5
// const {odds: {team1, x: draw, team2}} = game;

// // 6
// game.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich')

// // 7
// console.log(team1, draw, team2);

// team1 < team2 && console.log('Team 1 is more likely to win'); 

// Challenge 2

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
//   printGoals: function(...players) {
//     for(let i = 0; i < players.length; i++) {
//       let goals = 0;
//       this.scored.forEach(el => {
//         if(el === players[i]) {
//           goals++;
//         }
//       })
//       console.log(`Player ${players[i]}, goals: ${goals}`);
//     }
//   }
// };

// // 1
// for (const [index, player] of game.scored.entries()) {
//   console.log(`Goal ${index + 1}: ${player}`);
// }

// // 2
// let acumm = 0;
// for (const odd of Object.values(game.odds)) {
//   acumm += odd;
// }
//  acumm /= Object.values(game.odds).length;

// console.log(acumm);

// // 3 
// for (const [team, odd] of Object.entries(game.odds)) {
//   console.log(`Odd of ${game[team] ? `wining ${game[team]}` : 'draw'}: ${odd}`);
// }

// // 4



// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : scorers[player] = 1;
// }

// console.log(scorers)
// let testMap = new Map()
// testMap.set('abc', 'shsh')
// console.log(testMap)

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1

const events = [...new Set(gameEvents.values())];
console.log(events);

// 2

gameEvents.delete(64)
console.log(gameEvents)

// 3

const average = 90 / gameEvents.size
console.log(`An event happened, on average, every ${average} minutes`)

// 4

for(const [minute, event] of gameEvents) {
  console.log(`[${minute <= 45 ? 'FIRST': 'SECOND'} HALF] ${minute}: ${event}`)
}
