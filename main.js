const imie = "Pasza";
const wiek = 80;

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

if (wiek < 20) {
    console.log("Masz mniej niż 20 lat");
} else if (wiek >= 20 && wiek <= 30) {
    console.log("Masz więcej niż 20 ale mniej niż 30 lat");
} else {
    console.log("Masz więcej niż 30 lat.");
}

switch (wiek) {
    case 20:
        console.log("masz równo 20 lat");
    break;
    case 30:
        console.log("Masz równo 30 lat");
    break;
    default:
        console.log(`Masz ${wiek} lat`);
    break;
}

const czyStary = (wiek > 70) ? "Jesteś stary" : "Nie jesteś stary";
console.log(czyStary);

function calculate(x) {
    x = x + 3;
    console.log(x);
    return x*7;
}

console.log(calculate(2));
const myCalculation = calculate(4);
console.log(myCalculation);


const calculateFat = (x) => {
    x = x + 3;
    console.log(x);
    return x*7;
}

console.log(calculateFat(5));

const calculateShort = x => (x+3)*7;
console.log(`Najkrótsza Fat ${calculateShort(5)}`);

const welcome = (name, age) => {
    console.log(`Witaj ${name}, masz ${age} lat.`);
}

welcome('Andrzej', 45);


function handleClick (e) {
    console.log(e);
    console.log('click, click...');
}

const button = document.querySelector('.header__button--js');
// console.log(button);
button.addEventListener('click', () => {
    // console.log('click from arrow, hej');
    // document.querySelector('.header__title--js').innerHTML = "click, click...";
    const header = document.querySelector('.header__title--js');
    header.innerHTML = "Nikt się nie spodziewał hiszpańskiej inkwizycji!";
    header.classList.add('header__title--red');
});

const btnNav = document.querySelector('.navigation__switcher--js');
    btnNav.addEventListener('click', () => {
        const mobileNav = document.querySelector('.navigation__list--js');
        mobileNav.classList.toggle('navigation__list--visible');
})