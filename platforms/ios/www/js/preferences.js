
var useremail;
var filmChoice = false; 
var sportChoice = false; 
var musicChoice = false; 
var travelChoice = false; 
var foodChoice = false; 
var fashionChoice = false; 

var username;

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        useremail = user.email;
    } else {
        window.location.replace("../index.html");
    }
});

logOutButton = () => {
    firebase.auth().signOut().then(() => {
        window.location.replace("../index.html");
    });
};

savePrefs = () => {
    filmChoice = document.querySelector('#film').checked;
    sportChoice = document.querySelector('#sport').checked;
    musicChoice = document.querySelector('#music').checked;
    travelChoice = document.querySelector('#travel').checked;
    foodChoice = document.querySelector('#food').checked;
    fashionChoice = document.querySelector('#fashion').checked;
    addData();
};


addData = () => {
    // Add Data    
    var docRef = firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid);
    var o = {};
    docRef.get().then(function(thisDoc) {
        if (thisDoc.exists) {
            //user is already there, write only last login
            o.film = filmChoice;
            o.sport = sportChoice;
            o.music = musicChoice;
            o.travel = travelChoice;
            o.food = foodChoice;
            o.fashion = fashionChoice;
            o.email = useremail;
            
            docRef.update(o).then(function(o) {
                if (thisDoc.data().location != undefined) {
                    window.location.href = "frontPage.html";
                }
                else {
                    window.location.href = "LocationPage.html";
                }
            });
        }
    });
}

getUserPrefsData = () => {
    // Add Data 
    var datashow = $("#data");
    
    
    var docRef = firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid);
    var o = {};
    docRef.get().then(function(thisDoc) {
        if (thisDoc.exists) {
            //user is already there, write only last login
            datashow.append(`<p> Film: ${thisDoc.data().film} </p>`);
            datashow.append(`<p> Sport: ${thisDoc.data().sport} </p>`);
            datashow.append(`<p> Music: ${thisDoc.data().music} </p>`);
            datashow.append(`<p> Travel: ${thisDoc.data().travel} </p>`);
            datashow.append(`<p> Food: ${thisDoc.data().food} </p>`);
            datashow.append(`<p> Fashion: ${thisDoc.data().fashion} </p>`);
        }
        else {
            // new user
            o.uid = docRef;
            o.email = useremail;
            o.film = filmChoice;
            o.sport = sportChoice;
            o.music = musicChoice;
            o.travel = travelChoice;
            o.food = foodChoice;
            o.fashion = fashionChoice;

            // Send it
            docRef.set(o);
        }

    });
}

$('.btnDone').click(addData);


// Preference

const preference1 = document.querySelector('.preferences-tag1');
const preference2 = document.querySelector('.preferences-tag2');
const preference3 = document.querySelector('.preferences-tag3');
const preference4 = document.querySelector('.preferences-tag4');
const preference5 = document.querySelector('.preferences-tag5');
const preference6 = document.querySelector('.preferences-tag6');

preference1.addEventListener('click', () => {
    preference1.classList.toggle('active');

    if (travelChoice == false) {
        travelChoice = true;
    }
    else {
        travelChoice = false;
    }
})

preference2.addEventListener('click', () => {
    preference2.classList.toggle('active');

    if (musicChoice == false) {
        musicChoice = true;
    }
    else {
        musicChoice = false;
    }
})

preference3.addEventListener('click', () => {
    preference3.classList.toggle('active');

    if (filmChoice == false) {
        filmChoice = true;
    }
    else {
        filmChoice = false;
    }
})

preference4.addEventListener('click', () => {
    preference4.classList.toggle('active');

    if (foodChoice == false) {
        foodChoice = true;
    }
    else {
        foodChoice = false;
    }
})

preference5.addEventListener('click', () => {
    preference5.classList.toggle('active');

    if (sportChoice == false) {
        sportChoice = true;
    }
    else {
        sportChoice = false;
    }
})

preference6.addEventListener('click', () => {
    preference6.classList.toggle('active');

    if (fashionChoice == false) {
        fashionChoice = true;
    }
    else {
        fashionChoice = false;
    }
})