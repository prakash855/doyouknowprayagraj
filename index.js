const readlineSync = require('readline-sync');
const chalk = require('chalk')

let score = 0;
var game = chalk.bold.green('\'Do you really know Prayagraj???\'');
var name = readlineSync.question(chalk.bold('Hey, What\'s your name? '));
console.log(`Welcome, ${name}!`);
console.log('');

console.log(`Let\'s play a game ${game}`);

console.log('');

function askQuestion(ques, ans, i) {
	var userAns = readlineSync.question(chalk.bold(`${i}. ${ques}`));

	if(userAns.toLowerCase() == ans.toLowerCase()) {
		console.log(chalk.bold.yellowBright('Correct Answer :)'));
		score++;
	} else {
		console.log(chalk.bold.red('Incorrect Answer :('));
		console.log(chalk.bold.yellowBright(`The correct answer is ${ans}`));
	}

	console.log(chalk.underline(`Score: ${score}`));
	console.log(" ");
}

var quesList = [
	{
		q: 'Prayagraj is also know as?',
		a: 'Allahabad',
	},
  {
    q:'Ganga and Yamuna meets at the point, the point is know as?',
    a:'Sangam',
  },
  {
    q:'The bollywood star who born in Allahabad is',
    a:'Amitabh Bachchan',

  },
  {
    q:'Allahabad is famouse for which fruit?',
    a:'Guava',

  },
  {
    q:'In Ancient times, Prayagraj was known by the name of?',
    a:'Allahabad',

  },
  {
    q:'Which Prime minister home is in Prayagaraj?',
    a:'Javahar Lal Nehru',

  },
  {
    q:'World biggest fair is held here, named as?',
    a:'Kumbh mela',

  },
  {
    q:'Also called teerthraaj?',
    a:'Yes',

  },
  {
    q:'Mohammad cafe belongs to?',
    a:'Prayagraj',

  },
  {
    q:'what is the current population of Prayagraj? ',
    a:'59,54,391',

  },
  
];

for(var i=0; i<quesList.length; i++) {
	askQuestion(quesList[i]["q"], quesList[i]["a"], i+1);

  if(score == 3 && i!==quesList.length-1) {
		console.log(chalk.underline.black.bold.bgWhite('-- Welcome to Level 2 --'));
		console.log(" ");
	} else if (score == 6 && i!==quesList.length-1) {
		console.log(chalk.underline.black.bold.bgWhite('--Welcome to Level 3 --'));
		console.log(" ");
	}
}
if(score >= 9) {
	console.log(chalk.underline.italic.bold.bgBlue(`Result: You scored ${score} points! You know Prayagraj very well :)`));
} else if(score >=5) {
	console.log(chalk.underline.italic.bold.bgBlue(`Result: You scored ${score} points! You know Prayagraj fairly :|`));
} else {
	console.log(chalk.underline.italic.bold.bgBlue(`Result: You scored ${score} points! You do not know Prayagraj well :(  `));
}