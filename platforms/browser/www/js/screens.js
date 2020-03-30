const splashOuter = document.querySelector('.screen-outer');
const splashInner = document.querySelector('.screen-inner');

const splashScreen1 = document.querySelector('.screen1');
const splashScreen2 = document.querySelector('.screen2');
const splashScreen3 = document.querySelector('.screen3');
const splashScreen4 = document.querySelector('.screen4');


splashScreen1.style.display = 'initial';
splashScreen2.style.display = 'none';
splashScreen3.style.display = 'none';
splashScreen4.style.display = 'none';

const nextBtn1 = document.querySelector('#splash1');
const nextBtn2 = document.querySelector('#splash2');
const nextBtn3 = document.querySelector('#splash3');
const doneBtn = document.querySelector('#splash4');



nextBtn1.addEventListener('click', () => {
    splashScreen1.classList.remove('active');
    splashScreen2.classList.add('active');
    splashScreen();
});

nextBtn2.addEventListener('click', () => {
    splashScreen2.classList.remove('active');
    splashScreen3.classList.add('active');
    splashScreen();
});

nextBtn3.addEventListener('click', () => {
    splashScreen3.classList.remove('active');
    splashScreen4.classList.add('active');
    splashScreen();
});



function splashScreen() {
    if(splashScreen1.classList.contains('active')) {
        splashScreen1.style.display = 'initial';
        splashScreen2.style.display = 'none';
        splashScreen3.style.display = 'none';
        splashScreen4.style.display = 'none';

    } else if(splashScreen2.classList.contains('active')) {
        splashScreen1.style.display = 'none';
        splashScreen2.style.display = 'initial';
        splashScreen3.style.display = 'none';
        splashScreen4.style.display = 'none';

    } else if(splashScreen3.classList.contains('active')) {
        splashScreen1.style.display = 'none';
        splashScreen2.style.display = 'none';
        splashScreen3.style.display = 'initial';
        splashScreen4.style.display = 'none';
    } else {
        splashScreen1.style.display = 'none';
        splashScreen2.style.display = 'none';
        splashScreen3.style.display = 'none';
        splashScreen4.style.display = 'initial';
    }
}

