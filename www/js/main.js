const home = document.querySelector('.home');
const profile = document.querySelector('.profile');
const settings = document.querySelector('.settings');
const filterNav = document.querySelector('.filter-main');
const categoryNav = document.querySelector('.secondary-nav');
const homePage = document.querySelector('.homepage');
const frontPage = document.querySelector('.opening-display');
const profilePage = document.querySelector('.profile-main');
const settingsPage = document.querySelector('.settings-page');
const filterBtn = document.querySelector('.filterOption');
const categoryBtn = document.querySelector('.categoryOption');
const header = document.querySelector('.app-header');
// const travelContent = document.querySelector('.travelContent');
// const filmContent = document.querySelector('.filmMediaContent');
// const musicContent = document.querySelector('.musicContent');
// const foodDrinksContent = document.querySelector('.foodDrinksContent');


const loadMoreButton = document.querySelector('.loadMoreButton');



filterNav.style.display = 'none';
profilePage.style.display = 'none';
settingsPage.style.display = 'none';
// travelContent.style.display = 'none';
// filmContent.style.display = 'none';
// musicContent.style.display = 'none';
// foodDrinksContent.style.display = 'none';
categoryNav.style.display = 'none';



console.log(home, profile, settings, homePage);


// ***************************************************************************
// ***************************************************************************
//                                Filters 
// ***************************************************************************
// ***************************************************************************




//============================ Date ================================

const date = document.querySelector('#btnDate');
const dateOuter = document.querySelector('.date-outer');
const dateInner = document.querySelector('.date-inner');

console.log(date, dateOuter, dateInner);

date.addEventListener('click', datePopUp);

function datePopUp() {
    dateInner.innerHTML = `
    <div class = "datePopUp">
        <div class = "date-header">
         <img src="../icons/Icon-12.png">
         <p>DATE</p>
        </div>

        <div class="date-input">
        	<input type="date" id="date">
        	<button id="btnApply" class="btnApply">Apply</button>
        	<button id="btnCancel" class="btnCancel">Cancel</button>
        </div>
      
    </div>
    `;

    dateOuter.classList.add('active');
    const cancel = document.querySelector('#btnCancel');
    cancel.addEventListener('click', closedate);

};


function closedate() {
    dateOuter.classList.remove('active');
};



//============================ Price ================================

const price = document.querySelector('#btnPrice');
const priceOuter = document.querySelector('.price-outer');
const priceInner = document.querySelector('.price-inner');

console.log(price, priceOuter, priceInner);

price.addEventListener('click', pricePopUp);

function pricePopUp() {
    priceInner.innerHTML = `
    <div class = "pricePopUp">
        <div class = "price-header">
         <img src="../icons/Icon-11.png">
         <p>PRICE</p>
        </div>

        <div class="price-input">
            <select type="text" id="price">
                <option value="Free">Free</option>
                <option value="Between $10-$20">Between $10-$20</option>

            </select>
            <button id="btnApply" class="btnApply">Apply</button>
            <button id="btnCancel" class="btnCancel">Cancel</button>
        </div>      
    </div>
    `;
    priceOuter.classList.add('active');
    const cancel = document.querySelector('#btnCancel');
    cancel.addEventListener('click', closeprice);

};

// priceOuter.addEventListener('click', closeprice);

function closeprice() {
    priceOuter.classList.remove('active');
};




//============================ Location ================================

const locationButton = document.querySelector('#btnLocation');
const locationOuter = document.querySelector('.location-outer');
const locationInner = document.querySelector('.location-inner');

locationButton.addEventListener('click', locationPopUp);

function locationPopUp() {
    locationInner.innerHTML = `
    <div class = "locationPopUp"> 
           
        <a href=""><button id="currentLocationBtn">Use Your Location</button></a>
        <p></p>
        <a href=""><button id="cityBtn">
        <select id="city" name="city">
            <option value="location">Choose Location</option>
            <option value="vancouver">Vancouver</option>
            <option value="surrey">Surrey</option>
            <option value="richmond">Richmond</option>
            <option value="delta">Delta</option>
        </select>
        </button></a>           
             
    </div>
    `;
    locationOuter.classList.add('active');
};

// locationOuter.addEventListener('click', closeLocation);
// function closeLocation() {
//     locationOuter.classList.remove('active');
// };



// ***************************************************************************
// ***************************************************************************
//                                Home
// ***************************************************************************
// ***************************************************************************

home.addEventListener('click', () => {
    const icon1 = home.querySelector('img');
    const src1 = icon1.src;
    const replaceIcon1 = src1.replace('Icon-08', 'Icon-01');

    const icon2 = profile.querySelector('img');
    const src2 = icon2.src;
    const replaceIcon2 = src2.replace('Icon-02', 'Icon-09');

    const icon3 = settings.querySelector('img');
    const src3 = icon3.src;
    const replaceIcon3 = src3.replace('Icon-06', 'Icon-10');

    console.log(icon1, icon2, icon3, src1, src2, src3, replaceIcon1, replaceIcon2, replaceIcon3);

    filterNav.style.display = 'none';

    home.innerHTML = `
    <img src="${replaceIcon1}" alt="">
        <p>Home</p>
    `;

    profile.innerHTML = `
    <img src="${replaceIcon2}" alt="">
        <p>Profile</p>
    `;

    settings.innerHTML = `
    <img src="${replaceIcon3}" alt="">
        <p>Settings</p>
    `;

    header.style.display = 'initial';

    homePage.style.display = 'initial';
    frontPage.style.display = 'initial';

    profilePage.style.display = 'none';
    settingsPage.style.display = 'none';
})

filterBtn.addEventListener('click', () => {
    filterBtn.classList.toggle('active');
    categoryBtn.classList.remove('active');

    // filterNav.style.display = 'initial';

    if (filterNav.style.display === 'none') {
        filterNav.style.display = 'initial';
    } else {
        filterNav.style.display = 'none';
    }
    // homePage.style.display = 'none';
    categoryNav.style.display = 'none';
    profilePage.style.display = 'none';
    settingsPage.style.display = 'none';

})

categoryBtn.addEventListener('click', () => {
    filterBtn.classList.remove('active');
    categoryBtn.classList.toggle('active');



    if (categoryNav.style.display === 'none') {
        categoryNav.style.display = 'initial';
    } else {
        categoryNav.style.display = 'none';
    }

    filterNav.style.display = 'none';
    profilePage.style.display = 'none';
    settingsPage.style.display = 'none';


})


const travelOutdoors = document.querySelector('.travel-outdoors');
const filmMedia = document.querySelector('.film-media');
const music = document.querySelector('.music');
const food = document.querySelector('.food-drinks');
const sportsFitness = document.querySelector('.sports-fitness');
const fashionLifestyle = document.querySelector('.fashion-lifestyle');



// **************************
//   Travel and Outdoors
// **************************



travelOutdoors.addEventListener('click', () => {



    // Travel and Outdoors **********************

    const travelIcon = travelOutdoors.querySelector('img');
    const travelIconSrc = travelIcon.src;
    const replaceTravelIcon = travelIconSrc.replace('Icon-19', 'Icon-23');

    console.log(travelIcon, travelIconSrc, replaceTravelIcon);

    travelOutdoors.innerHTML = `
        <a>
            <img src="${replaceTravelIcon}" alt="Icon-23">
            <p>
                Travel & Outdoor
            </p>
        </a>
    `;

    // Film and Media **********************

    const filmIcon = filmMedia.querySelector('img');
    const filmIconSrc = filmIcon.src;
    const replaceFilmIcon = filmIconSrc.replace('Icon-25', 'Icon-20');

    console.log(filmIcon, filmIconSrc, replaceFilmIcon);

    filmMedia.innerHTML = `
        <a>
            <img src="${replaceFilmIcon}" alt="Icon-20">
            <p>
                Film & Media
            </p>
        </a>
    `;

    travelOutdoors.classList.add('active');
    filmMedia.classList.remove('active');
    music.classList.remove('active');
    food.classList.remove('active');
    sportsFitness.classList.remove('active');
    fashionLifestyle.classList.remove('active');

    // Music **********************

    const musicIcon = music.querySelector('img');
    const musicIconSrc = musicIcon.src;
    const replaceMusicIcon = musicIconSrc.replace('Icon-24', 'Icon-21');

    console.log(musicIcon, musicIconSrc, replaceMusicIcon);

    music.innerHTML = `
        <a>
            <img src="${replaceMusicIcon}" alt="Icon-21">
            <p>
                Music
            </p>
        </a>
    `;

    // Food and Drinks **********************

    const foodIcon = food.querySelector('img');
    const foodIconSrc = foodIcon.src;
    const replaceFoodIcon = foodIconSrc.replace('Icon-26', 'Icon-22');

    console.log(foodIcon, foodIconSrc, replaceFoodIcon);

    food.innerHTML = `
        <a>
            <img src="${replaceFoodIcon}" alt="Icon-22">
            <p>
                Food & Drinks
            </p>
        </a>
    `;


    // Sports and Fitness **********************

    const sportsIcon = sportsFitness.querySelector('img');
    const sportsIconSrc = sportsIcon.src;
    const replaceSportsIcon = sportsIconSrc.replace('Icon-28', 'Icon-27');

    console.log(sportsIcon, sportsIconSrc, replaceSportsIcon);

    sportsFitness.innerHTML = `
        <a>
            <img src="${replaceSportsIcon}" alt="Icon-22">
            <p>
                Sports & Fitness
            </p>
        </a>
    `;

    // Fashion and Lifestyle **********************

    const fashionIcon = fashionLifestyle.querySelector('img');
    const fashionIconSrc = fashionIcon.src;
    const replaceFashionIcon = fashionIconSrc.replace('Icon-29', 'Icon-30');

    console.log(fashionIcon, fashionIconSrc, replaceFashionIcon);

    fashionLifestyle.innerHTML = `
        <a>
            <img src="${replaceFashionIcon}" alt="Icon-22">
            <p>
                Fashion & Lifestyle
            </p>
        </a>
    `;


    // travelContent.style.display = 'initial';


    //frontPage.style.display = 'none';
    // filmContent.style.display = 'none';
    // musicContent.style.display = 'none';
    // foodDrinksContent.style.display = 'none';
})



// **************************
//   Film and Media
// **************************



filmMedia.addEventListener('click', () => {

    // Travel and Outdoors **********************

    const travelIcon = travelOutdoors.querySelector('img');
    const travelIconSrc = travelIcon.src;
    const replaceTravelIcon = travelIconSrc.replace('Icon-23', 'Icon-19');

    console.log(travelIcon, travelIconSrc, replaceTravelIcon);

    travelOutdoors.innerHTML = `
        <a>
            <img src="${replaceTravelIcon}" alt="Icon-19">
            <p>
                Travel & Outdoor
            </p>
        </a>
    `;

    // Film and Media **********************

    const filmIcon = filmMedia.querySelector('img');
    const filmIconSrc = filmIcon.src;
    const replaceFilmIcon = filmIconSrc.replace('Icon-20', 'Icon-25');

    console.log(filmIcon, filmIconSrc, replaceFilmIcon);

    filmMedia.innerHTML = `
        <a>
            <img src="${replaceFilmIcon}" alt="Icon-25">
            <p>
                Film & Media
            </p>
        </a>
    `;

    travelOutdoors.classList.remove('active');
    filmMedia.classList.add('active');
    music.classList.remove('active');
    food.classList.remove('active');
    sportsFitness.classList.remove('active');
    fashionLifestyle.classList.remove('active');

    // Music **********************

    const musicIcon = music.querySelector('img');
    const musicIconSrc = musicIcon.src;
    const replaceMusicIcon = musicIconSrc.replace('Icon-24', 'Icon-21');

    console.log(musicIcon, musicIconSrc, replaceMusicIcon);

    music.innerHTML = `
        <a>
            <img src="${replaceMusicIcon}" alt="Icon-21">
            <p>
                Music
            </p>
        </a>
    `;

    // Food and Drinks **********************

    const foodIcon = food.querySelector('img');
    const foodIconSrc = foodIcon.src;
    const replaceFoodIcon = foodIconSrc.replace('Icon-26', 'Icon-22');

    console.log(foodIcon, foodIconSrc, replaceFoodIcon);

    food.innerHTML = `
        <a>
            <img src="${replaceFoodIcon}" alt="Icon-22">
            <p>
                Food & Drinks
            </p>
        </a>
    `;


    // Sports and Fitness **********************

    const sportsIcon = sportsFitness.querySelector('img');
    const sportsIconSrc = sportsIcon.src;
    const replaceSportsIcon = sportsIconSrc.replace('Icon-28', 'Icon-27');

    console.log(sportsIcon, sportsIconSrc, replaceSportsIcon);

    sportsFitness.innerHTML = `
        <a>
            <img src="${replaceSportsIcon}" alt="Icon-22">
            <p>
                Sports & Fitness
            </p>
        </a>
    `;

    // Fashion and Lifestyle **********************

    const fashionIcon = fashionLifestyle.querySelector('img');
    const fashionIconSrc = fashionIcon.src;
    const replaceFashionIcon = fashionIconSrc.replace('Icon-29', 'Icon-30');

    console.log(fashionIcon, fashionIconSrc, replaceFashionIcon);

    fashionLifestyle.innerHTML = `
        <a>
            <img src="${replaceFashionIcon}" alt="Icon-22">
            <p>
                Fashion & Lifestyle
            </p>
        </a>
    `;
    // travelContent.style.display = 'none';
    //frontPage.style.display = 'none';
    // filmContent.style.display = 'initial';
    // musicContent.style.display = 'none';
    // foodDrinksContent.style.display = 'none';
})


// **************************
//   Music
// **************************



music.addEventListener('click', () => {

    // Travel and Outdoors **********************

    const travelIcon = travelOutdoors.querySelector('img');
    const travelIconSrc = travelIcon.src;
    const replaceTravelIcon = travelIconSrc.replace('Icon-23', 'Icon-19');

    console.log(travelIcon, travelIconSrc, replaceTravelIcon);

    travelOutdoors.innerHTML = `
        <a>
            <img src="${replaceTravelIcon}" alt="Icon-19">
            <p>
                Travel & Outdoor
            </p>
        </a>
    `;

    // Film and Media **********************

    const filmIcon = filmMedia.querySelector('img');
    const filmIconSrc = filmIcon.src;
    const replaceFilmIcon = filmIconSrc.replace('Icon-25', 'Icon-20');

    console.log(filmIcon, filmIconSrc, replaceFilmIcon);

    filmMedia.innerHTML = `
        <a>
            <img src="${replaceFilmIcon}" alt="Icon-20">
            <p>
                Film & Media
            </p>
        </a>
    `;


    // Music **********************

    const musicIcon = music.querySelector('img');
    const musicIconSrc = musicIcon.src;
    const replaceMusicIcon = musicIconSrc.replace('Icon-21', 'Icon-24');

    console.log(musicIcon, musicIconSrc, replaceMusicIcon);

    music.innerHTML = `
        <a>
            <img src="${replaceMusicIcon}" alt="Icon-24">
            <p>
                Music
            </p>
        </a>
    `;

    travelOutdoors.classList.remove('active');
    filmMedia.classList.remove('active');
    music.classList.add('active');
    food.classList.remove('active');
    sportsFitness.classList.remove('active');
    fashionLifestyle.classList.remove('active');


    // Food and Drinks **********************

    const foodIcon = food.querySelector('img');
    const foodIconSrc = foodIcon.src;
    const replaceFoodIcon = foodIconSrc.replace('Icon-26', 'Icon-22');

    console.log(foodIcon, foodIconSrc, replaceFoodIcon);

    food.innerHTML = `
        <a>
            <img src="${replaceFoodIcon}" alt="Icon-22">
            <p>
                Food & Drinks
            </p>
        </a>
    `;

    // Sports and Fitness **********************

    const sportsIcon = sportsFitness.querySelector('img');
    const sportsIconSrc = sportsIcon.src;
    const replaceSportsIcon = sportsIconSrc.replace('Icon-28', 'Icon-27');

    console.log(sportsIcon, sportsIconSrc, replaceSportsIcon);

    sportsFitness.innerHTML = `
        <a>
            <img src="${replaceSportsIcon}" alt="Icon-22">
            <p>
                Sports & Fitness
            </p>
        </a>
    `;

    // Fashion and Lifestyle **********************

    const fashionIcon = fashionLifestyle.querySelector('img');
    const fashionIconSrc = fashionIcon.src;
    const replaceFashionIcon = fashionIconSrc.replace('Icon-29', 'Icon-30');

    console.log(fashionIcon, fashionIconSrc, replaceFashionIcon);

    fashionLifestyle.innerHTML = `
        <a>
            <img src="${replaceFashionIcon}" alt="Icon-22">
            <p>
                Fashion & Lifestyle
            </p>
        </a>
    `;

    // travelContent.style.display = 'none';
    //frontPage.style.display = 'none';
    // filmContent.style.display = 'none';
    // musicContent.style.display = 'initial';
    // foodDrinksContent.style.display = 'none';
})



// **************************
//   Food and Drinks
// **************************



food.addEventListener('click', () => {

    // Travel and Outdoors **********************

    const travelIcon = travelOutdoors.querySelector('img');
    const travelIconSrc = travelIcon.src;
    const replaceTravelIcon = travelIconSrc.replace('Icon-23', 'Icon-19');

    console.log(travelIcon, travelIconSrc, replaceTravelIcon);

    travelOutdoors.innerHTML = `
        <a>
            <img src="${replaceTravelIcon}" alt="Icon-19">
            <p>
                Travel & Outdoor
            </p>
        </a>
    `;

    // Film and Media **********************

    const filmIcon = filmMedia.querySelector('img');
    const filmIconSrc = filmIcon.src;
    const replaceFilmIcon = filmIconSrc.replace('Icon-25', 'Icon-20');

    console.log(filmIcon, filmIconSrc, replaceFilmIcon);

    filmMedia.innerHTML = `
        <a>
            <img src="${replaceFilmIcon}" alt="Icon-20">
            <p>
                Film & Media
            </p>
        </a>
    `;

    // Music **********************

    const musicIcon = music.querySelector('img');
    const musicIconSrc = musicIcon.src;
    const replaceMusicIcon = musicIconSrc.replace('Icon-24', 'Icon-21');

    console.log(musicIcon, musicIconSrc, replaceMusicIcon);

    music.innerHTML = `
        <a>
            <img src="${replaceMusicIcon}" alt="Icon-21">
            <p>
                Music
            </p>
        </a>
    `;

    // Food and Drinks **********************

    const foodIcon = food.querySelector('img');
    const foodIconSrc = foodIcon.src;
    const replaceFoodIcon = foodIconSrc.replace('Icon-22', 'Icon-26');

    console.log(foodIcon, foodIconSrc, replaceFoodIcon);

    food.innerHTML = `
        <a>
            <img src="${replaceFoodIcon}" alt="Icon-26">
            <p>
                Food & Drinks
            </p>
        </a>
    `;

    // Sports and Fitness **********************

    const sportsIcon = sportsFitness.querySelector('img');
    const sportsIconSrc = sportsIcon.src;
    const replaceSportsIcon = sportsIconSrc.replace('Icon-28', 'Icon-27');

    console.log(sportsIcon, sportsIconSrc, replaceSportsIcon);

    sportsFitness.innerHTML = `
        <a>
            <img src="${replaceSportsIcon}" alt="Icon-22">
            <p>
                Sports & Fitness
            </p>
        </a>
    `;

    // Fashion and Lifestyle **********************

    const fashionIcon = fashionLifestyle.querySelector('img');
    const fashionIconSrc = fashionIcon.src;
    const replaceFashionIcon = fashionIconSrc.replace('Icon-29', 'Icon-30');

    console.log(fashionIcon, fashionIconSrc, replaceFashionIcon);

    fashionLifestyle.innerHTML = `
        <a>
            <img src="${replaceFashionIcon}" alt="Icon-22">
            <p>
                Fashion & Lifestyle
            </p>
        </a>
    `;


    travelOutdoors.classList.remove('active');
    filmMedia.classList.remove('active');
    music.classList.remove('active');
    food.classList.add('active');
    sportsFitness.classList.remove('active');
    fashionLifestyle.classList.remove('active');


    // travelContent.style.display = 'none';
    //frontPage.style.display = 'none';
    // filmContent.style.display = 'none';
    // musicContent.style.display = 'none';
    // foodDrinksContent.style.display = 'initial';
})


// **************************
//      Sports & Fitness
// **************************



sportsFitness.addEventListener('click', () => {



    // Travel and Outdoors **********************

    const travelIcon = travelOutdoors.querySelector('img');
    const travelIconSrc = travelIcon.src;
    const replaceTravelIcon = travelIconSrc.replace('Icon-23', 'Icon-19');

    console.log(travelIcon, travelIconSrc, replaceTravelIcon);

    travelOutdoors.innerHTML = `
        <a>
            <img src="${replaceTravelIcon}" alt="Icon-23">
            <p>
                Travel & Outdoor
            </p>
        </a>
    `;

    // Film and Media **********************

    const filmIcon = filmMedia.querySelector('img');
    const filmIconSrc = filmIcon.src;
    const replaceFilmIcon = filmIconSrc.replace('Icon-25', 'Icon-20');

    console.log(filmIcon, filmIconSrc, replaceFilmIcon);

    filmMedia.innerHTML = `
        <a>
            <img src="${replaceFilmIcon}" alt="Icon-20">
            <p>
                Film & Media
            </p>
        </a>
    `;

    travelOutdoors.classList.remove('active');
    filmMedia.classList.remove('active');
    music.classList.remove('active');
    food.classList.remove('active');
    sportsFitness.classList.add('active');
    fashionLifestyle.classList.remove('active');


    // Music **********************

    const musicIcon = music.querySelector('img');
    const musicIconSrc = musicIcon.src;
    const replaceMusicIcon = musicIconSrc.replace('Icon-24', 'Icon-21');

    console.log(musicIcon, musicIconSrc, replaceMusicIcon);

    music.innerHTML = `
        <a>
            <img src="${replaceMusicIcon}" alt="Icon-21">
            <p>
                Music
            </p>
        </a>
    `;

    // Food and Drinks **********************

    const foodIcon = food.querySelector('img');
    const foodIconSrc = foodIcon.src;
    const replaceFoodIcon = foodIconSrc.replace('Icon-26', 'Icon-22');

    console.log(foodIcon, foodIconSrc, replaceFoodIcon);

    food.innerHTML = `
        <a>
            <img src="${replaceFoodIcon}" alt="Icon-22">
            <p>
                Food & Drinks
            </p>
        </a>
    `;

    // Sports and Fitness **********************

    const sportsIcon = sportsFitness.querySelector('img');
    const sportsIconSrc = sportsIcon.src;
    const replaceSportsIcon = sportsIconSrc.replace('Icon-27', 'Icon-28');

    console.log(sportsIcon, sportsIconSrc, replaceSportsIcon);

    sportsFitness.innerHTML = `
        <a>
            <img src="${replaceSportsIcon}" alt="Icon-22">
            <p>
                Sports & Fitness
            </p>
        </a>
    `;

    // Fashion and Lifestyle **********************

    const fashionIcon = fashionLifestyle.querySelector('img');
    const fashionIconSrc = fashionIcon.src;
    const replaceFashionIcon = fashionIconSrc.replace('Icon-29', 'Icon-30');

    console.log(fashionIcon, fashionIconSrc, replaceFashionIcon);

    fashionLifestyle.innerHTML = `
        <a>
            <img src="${replaceFashionIcon}" alt="Icon-22">
            <p>
                Fashion & Lifestyle
            </p>
        </a>
    `;

})

// **************************
//   Fashion & Lifestyle
// **************************



fashionLifestyle.addEventListener('click', () => {



    // Travel and Outdoors **********************

    const travelIcon = travelOutdoors.querySelector('img');
    const travelIconSrc = travelIcon.src;
    const replaceTravelIcon = travelIconSrc.replace('Icon-23', 'Icon-19');

    console.log(travelIcon, travelIconSrc, replaceTravelIcon);

    travelOutdoors.innerHTML = `
        <a>
            <img src="${replaceTravelIcon}" alt="Icon-23">
            <p>
                Travel & Outdoor
            </p>
        </a>
    `;

    // Film and Media **********************

    const filmIcon = filmMedia.querySelector('img');
    const filmIconSrc = filmIcon.src;
    const replaceFilmIcon = filmIconSrc.replace('Icon-25', 'Icon-20');

    console.log(filmIcon, filmIconSrc, replaceFilmIcon);

    filmMedia.innerHTML = `
        <a>
            <img src="${replaceFilmIcon}" alt="Icon-20">
            <p>
                Film & Media
            </p>
        </a>
    `;

    travelOutdoors.classList.remove('active');
    filmMedia.classList.remove('active');
    music.classList.remove('active');
    food.classList.remove('active');
    sportsFitness.classList.remove('active');
    fashionLifestyle.classList.add('active');

    // Music **********************

    const musicIcon = music.querySelector('img');
    const musicIconSrc = musicIcon.src;
    const replaceMusicIcon = musicIconSrc.replace('Icon-24', 'Icon-21');

    console.log(musicIcon, musicIconSrc, replaceMusicIcon);

    music.innerHTML = `
        <a>
            <img src="${replaceMusicIcon}" alt="Icon-21">
            <p>
                Music
            </p>
        </a>
    `;

    // Food and Drinks **********************

    const foodIcon = food.querySelector('img');
    const foodIconSrc = foodIcon.src;
    const replaceFoodIcon = foodIconSrc.replace('Icon-26', 'Icon-22');

    console.log(foodIcon, foodIconSrc, replaceFoodIcon);

    food.innerHTML = `
        <a>
            <img src="${replaceFoodIcon}" alt="Icon-22">
            <p>
                Food & Drinks
            </p>
        </a>
    `;

    // Sports and Fitness **********************

    const sportsIcon = sportsFitness.querySelector('img');
    const sportsIconSrc = sportsIcon.src;
    const replaceSportsIcon = sportsIconSrc.replace('Icon-28', 'Icon-27');

    console.log(sportsIcon, sportsIconSrc, replaceSportsIcon);

    sportsFitness.innerHTML = `
        <a>
            <img src="${replaceSportsIcon}" alt="Icon-22">
            <p>
                Sports & Fitness
            </p>
        </a>
    `;

    // Fashion and Lifestyle **********************

    const fashionIcon = fashionLifestyle.querySelector('img');
    const fashionIconSrc = fashionIcon.src;
    const replaceFashionIcon = fashionIconSrc.replace('Icon-30', 'Icon-29');

    console.log(fashionIcon, fashionIconSrc, replaceFashionIcon);

    fashionLifestyle.innerHTML = `
        <a>
            <img src="${replaceFashionIcon}" alt="Icon-22">
            <p>
                Fashion & Lifestyle
            </p>
        </a>
    `;

})


// ***************************************************************************
// ***************************************************************************
//                                Profile
// ***************************************************************************
// ***************************************************************************

profile.addEventListener('click', () => {
    const icon1 = home.querySelector('img');
    const src1 = icon1.src;
    const replaceIcon1 = src1.replace('Icon-01', 'Icon-08');

    const icon2 = profile.querySelector('img');
    const src2 = icon2.src;
    const replaceIcon2 = src2.replace('Icon-09', 'Icon-02');

    const icon3 = settings.querySelector('img');
    const src3 = icon3.src;
    const replaceIcon3 = src3.replace('Icon-06', 'Icon-10');

    console.log(icon1, icon2, icon3, src1, src2, src3, replaceIcon1, replaceIcon2, replaceIcon3);

    home.innerHTML = `
    <img src="${replaceIcon1}" alt="">
        <p>Home</p>
    `;

    profile.innerHTML = `
    <img src="${replaceIcon2}" alt="">
        <p>Profile</p>
    `;


    settings.innerHTML = `
    <img src="${replaceIcon3}" alt="">
        <p>Settings</p>
    `;

    header.style.display = 'none';
    filterNav.style.display = 'none';

    //homePage.style.display = 'none';
    frontPage.style.display = 'none';
    loadMoreButton.style.display = 'none';
    profilePage.style.display = 'initial';

    settingsPage.style.display = 'none';
    categoryNav.style.display = 'none';

    profilePage.classList.add('active');
})






// ***************************************************************************
// ***************************************************************************
//                                Settings
// ***************************************************************************
// ***************************************************************************

settings.addEventListener('click', () => {
    const icon1 = home.querySelector('img');
    const src1 = icon1.src;
    const replaceIcon1 = src1.replace('Icon-01', 'Icon-08');

    const icon2 = profile.querySelector('img');
    const src2 = icon2.src;
    const replaceIcon2 = src2.replace('Icon-02', 'Icon-09');

    const icon3 = settings.querySelector('img');
    const src3 = icon3.src;
    const replaceIcon3 = src3.replace('Icon-10', 'Icon-06');

    console.log(icon1, icon2, icon3, src1, src2, src3, replaceIcon1, replaceIcon2, replaceIcon3);

    home.innerHTML = `
    <img src="${replaceIcon1}" alt="">
        <p>Home</p>
    `;

    profile.innerHTML = `
    <img src="${replaceIcon2}" alt="">
        <p>Profile</p>
    `;

    settings.innerHTML = `
    <img src="${replaceIcon3}" alt="">
        <p>Settings</p>
    `;

    filterNav.style.display = 'none';
    header.style.display = 'none';

    //homePage.style.display = 'none';
    frontPage.style.display = 'none';
    loadMoreButton.style.display = 'none';
    profilePage.style.display = 'none';
    categoryNav.style.display = 'none';

    settingsPage.style.display = 'initial';

    settingsPage.classList.add('active');
})




