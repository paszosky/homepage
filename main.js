const imie = "Pasza";
const wiek = 31;

console.log(imie);
console.log(wiek);

console.log(`Nazywam się ${imie} i mam ${wiek} lat.`);

const heading = document.querySelector('.heading');
console.log(heading);

const paragraph = document.querySelectorAll('p');
console.log(paragraph);
console.log(paragraph[0]);

const testowy = document.querySelector('.about__paragraph--js');
console.log(testowy.innerHTML);
testowy.innerHTML = `Nazywam się <strong>${imie}</strong> i mam ${wiek} lat.!`;