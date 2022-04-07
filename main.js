//Task#1
for (let i = 10; i <= 50; i += 2){
	console.log(i);
}

//Task#2
const myself = {
	firstName : "Ilia",
	lastName : "Strogalev",
	age : 30,
	pets : false
};
console.log(myself);

//Task#3
const array = [
	'я в Симбирск, ',
	'в трактире. ',
	'с утра',
	'В ту же ночь',
  	'Я остановился',
  	'для закупки', 
  	'что и было поручено Савельичу.',
  	'приехал',
  	'где должен был',
  	'нужных вещей,',
  	'отправился по лавкам',
  	'пробыть сутки',
	'Савельич'
];
const correctSequence = [3, 7, 0, 8, 11, 5, 9, 6, 4, 1, 12, 2, 10];
const unitedStrings = correctSequence.reduce((unitedStrings, number) => [...unitedStrings, array[number]], []);
const result = unitedStrings.join(' ');
console.log(result);

//Task#4
const getFullName = (firstName, lastName) => {
	const fullName = `${firstName} ${lastName}`;
	console.log(fullName);
};
getFullName('Ilia', 'Strogalev');

//Task#5
let oddNumbers = 21;
while(oddNumbers <= 67){
	console.log(oddNumbers);
	oddNumbers += 2;
}