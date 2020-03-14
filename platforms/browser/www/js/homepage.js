

var useremail;
var filmChoice;
var sportChoice;
var musicChoice;
var travelChoice
var foodChoice;
var fashionChoice;
var username;

var loadEventItems = 3;
var loadedEventItems = 0;


// Filters
var dateFilter = new Date();
var priceFilter = 0;
var locationFilter;

// Categories 
var selectedCategory = null;

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        getUserPrefsData();
    } else {
        window.location.replace("../index.html");
    }
});

getUserPrefsData = () => {
    // Add Data 
    var datashow = $("#data");
    
    var docRef = firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid);
    var o = {};
    docRef.get().then(function(thisDoc) {
        if (thisDoc.exists) {
            //User is already there, write only.
            useremail = thisDoc.data().email;
            filmChoice = thisDoc.data().film;
            sportChoice = thisDoc.data().sport;
            musicChoice = thisDoc.data().music;
            travelChoice = thisDoc.data().travel;
            foodChoice = thisDoc.data().food;
            fashionChoice = thisDoc.data().fashion;
            locationFilter = thisDoc.data().location; // By default we are putting location filter to user's selected city from DB.
        }
        else {
            // User prefs doesn't exist send to prefs page.
            window.location.replace("preference.html");
        }

    }).then(function() {
        getEventsAccordingToUserPrefs();
    });
}

getEventsAccordingToUserPrefs = () => {
    var travelContent = $(".travelContent");
    var filmMediaContent = $(".opening-display");
    var musicContent = $(".musicContent");
    var foodDrinksContent = $(".foodDrinksContent");

    //var foodDrinksContent = $("#foodDrinksContent");
    //var foodDrinksContent = $("#foodDrinksContent");


    const currentDate = new Date();


    db.collection("events").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            if (loadedEventItems < loadEventItems &&
                doc.data().date.toDate() > currentDate &&
                doc.data().date.toDate() > dateFilter &&
                doc.data().price >= priceFilter &&
                doc.data().city == locationFilter) {
                    if (filmChoice == true && `${doc.data().category}` == "Film&Media") {
                        filmMediaContent.append(`
                            <li class='content-child content-child1' data-name='${doc.data().name}'>
                                <a>
                                    <img src='../img/film-01.jpeg' alt='Anime Cosplay Fest'>
                                    <h3> 
                                        <p> ${doc.data().name} </p>
                                        <p> ${doc.data().date.toDate()}$ </p> 
                                    </h3>
                                </a>
                            </li>`);
                    }
                    // else if (musicChoice == true && `${doc.data().category}` == "Music") {
                    //     eventshow.append(`<article data-name='${doc.data().name}'  > <p> event name: ${doc.data().name} </p>
                    //     <p> event category: ${doc.data().category} </p> </article>`);
                    // }
                    // else if (travelChoice == true && `${doc.data().category}` == "Travel") {
                    //     eventshow.append(`<article data-name='${doc.data().name}'  > <p> event name: ${doc.data().name} </p>
                    //     <p> event category: ${doc.data().category} </p> </article>`);
                    // }
                    // else if (sportChoice == true && `${doc.data().category}` == "Sport&Fitness") {
                    //     eventshow.append(`<article data-name='${doc.data().name}'  > <p> event name: ${doc.data().name} </p>
                    //     <p> event category: ${doc.data().category} </p> </article>`);
                    // }
                    // else if (foodChoice == true && `${doc.data().category}` == "Food&Drink") {
                    //     eventshow.append(`<article data-name='${doc.data().name}'  > <p> event name: ${doc.data().name} </p>
                    //     <p> event category: ${doc.data().category} </p> </article>`);
                    // }
                    // else if (fashionChoice == true && `${doc.data().category}` == "Fashion&Lifestyle") {
                    //     eventshow.append(`<article data-name='${doc.data().name}'  > <p> event name: ${doc.data().name} </p>
                    //     <p> event category: ${doc.data().category} </p> </article>`);
                    // }
                    loadedEventItems++;
        }
            var articles = document.querySelectorAll("article");
            articles.forEach(article => article.addEventListener('click', gotoItem ));

        })
    });
}

function gotoItem( event ){
    let target = event.target ;   

    var url = "eventdetails.html";    
    url += (url.indexOf('?') > -1)?"&":"?" + "event=" + encodeURIComponent(target.closest('article').dataset.name );
    window.location.href = url;
}

function TurnToStringDate( timestamp ){
    var date = timestamp.getDate();
    var month = timestamp.getMonth(); //Be careful! January is 0 not 1
    var year = timestamp.getFullYear();
    return dateString = date + "-" +(month + 1) + "-" + year;
}





logOutButton = () => {
    firebase.auth().signOut().then(() => {
        window.location.replace("../index.html");
    });
};

preferencesButton = () => {
        window.location.replace("preferences.html");
};

loadMoreItems = () => {
    loadedEventItems = 0;
    loadEventItems += 3;
    getEventsAccordingToUserPrefs();
}

$('#btnLoadMore').click(loadMoreItems)
$('#btnLogout').click(logOutButton);
$('#preferencesbutton').click(preferencesButton);