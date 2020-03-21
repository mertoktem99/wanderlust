

var useremail;
var filmChoice;
var sportChoice;
var musicChoice;
var travelChoice
var foodChoice;
var fashionChoice;
var username;
var childCount = 1;

var loadEventItems = 3;
var loadedEventItems = 0;


// Filters
var dateFilter = new Date();
var priceFilterMin = 0;
var priceFilterMax = 999;
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
    var openingDisplay = $(".opening-display");
    openingDisplay.empty();

    const currentDate = new Date();
    loadedEventItems = 0;

    db.collection("events").get().then((querySnapshot) => {

        querySnapshot.forEach((doc) => {
            if (loadedEventItems < loadEventItems &&
                doc.data().date.toDate() > currentDate &&
                doc.data().date.toDate() > dateFilter &&
                doc.data().price >= priceFilterMin &&
                doc.data().price <= priceFilterMax &&
                doc.data().city == locationFilter) {
                    if (filmChoice == true && 
                        `${doc.data().category}` == "Film&Media" &&
                        (selectedCategory == null || selectedCategory == "Film") )
                        {
                        appendChildCount();
                        openingDisplay.append(`
                            <li class='content-child content-child${childCount.toString()}' data-name='${doc.data().name}'>
                                <a>
                                    <img src='${doc.data().image}' alt='Anime Cosplay Fest'>
                                    <h3> 
                                        <p> ${doc.data().name} </p>
                                        <p> ${TimeConverter(doc.data().date.toDate())} </p> 
                                    </h3>
                                </a>
                            </li>`);
                    }
                    else if (
                        musicChoice == true && 
                        `${doc.data().category}` == "Music" &&
                        ( selectedCategory == null || selectedCategory == "Music") )
                        {
                        appendChildCount();
                        openingDisplay.append(`
                            <li class='content-child content-child${childCount.toString()}' data-name='${doc.data().name}'>
                                <a>
                                    <img src='${doc.data().image}' alt='Anime Cosplay Fest'>
                                    <h3> 
                                        <p> ${doc.data().name} </p>
                                        <p> ${TimeConverter(doc.data().date.toDate())} </p> 
                                    </h3>
                                </a>
                            </li>`);
                    }
                    else if (
                        travelChoice == true && 
                        `${doc.data().category}` == "Travel" &&
                        (selectedCategory == null || selectedCategory == "Travel") )
                        {
                        appendChildCount();
                        openingDisplay.append(`
                            <li class='content-child content-child${childCount.toString()}' data-name='${doc.data().name}'>
                                <a>
                                    <img src='${doc.data().image}' alt='Anime Cosplay Fest'>
                                    <h3> 
                                        <p> ${doc.data().name} </p>
                                        <p> ${TimeConverter(doc.data().date.toDate())} </p> 
                                    </h3>
                                </a>
                            </li>`);
                    }
                    else if (
                        sportChoice == true && 
                        `${doc.data().category}` == "Sport&Fitness" &&
                        (selectedCategory == null || selectedCategory == "Sports") )
                        {
                        appendChildCount();
                        openingDisplay.append(`
                            <li class='content-child content-child${childCount.toString()}' data-name='${doc.data().name}'>
                                <a>
                                    <img src='${doc.data().image}' alt='Anime Cosplay Fest'>
                                    <h3> 
                                        <p> ${doc.data().name} </p>
                                        <p> ${TimeConverter(doc.data().date.toDate())} </p> 
                                    </h3>
                                </a>
                            </li>`);
                    }
                    else if (
                        foodChoice == true && 
                        `${doc.data().category}` == "Food&Drink" &&
                        (selectedCategory == null || selectedCategory == "Food") )
                        {
                        appendChildCount();
                        openingDisplay.append(`
                            <li class='content-child content-child${childCount.toString()}' data-name='${doc.data().name}'>
                                <a>
                                    <img src='${doc.data().image}' alt='Anime Cosplay Fest'>
                                    <h3> 
                                        <p> ${doc.data().name} </p>
                                        <p> ${TimeConverter(doc.data().date.toDate())} </p> 
                                    </h3>
                                </a>
                            </li>`);
                    }
                    else if (
                        fashionChoice == true && 
                        `${doc.data().category}` == "Fashion&Lifestyle" &&
                        (selectedCategory == null || selectedCategory == "Fashion") ) 
                        {
                        appendChildCount();
                        openingDisplay.append(`
                            <li class='content-child content-child${childCount.toString()}' data-name='${doc.data().name}'>
                                <a>
                                    <img src='${doc.data().image}' alt='Anime Cosplay Fest'>
                                    <h3> 
                                        <p> ${doc.data().name} </p>
                                        <p> ${TimeConverter(doc.data().date.toDate())} </p> 
                                    </h3>
                                </a>
                            </li>`);
                    }

        }       
        var events = document.querySelectorAll(".content-child");
        events.forEach(event => event.addEventListener('click', gotoItem ));
        })
    });
}

function gotoItem( event ){
    let target = event.target ;   

    var url = "EventDescription-1.html";    
    url += (url.indexOf('?') > -1)?"&":"?" + "event=" + encodeURIComponent(target.closest('.content-child').dataset.name );
    window.location.href = url;
}

function TimeConverter(UNIX_timestamp){
    var a = UNIX_timestamp;
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':0' + min;
    return time;
  }

loadMoreItems = () => {
    loadedEventItems = 0;
    loadEventItems += 3;
    getEventsAccordingToUserPrefs();
}


appendChildCount = () => {
    loadedEventItems++;
    childCount++;
    if (childCount > 3) {
        childCount = 1;
    }
}

$('#btnLoadMore').click(loadMoreItems)



// CATEGORIES
travelCategory = () => {
    if (selectedCategory != "Travel") { 
        selectedCategory = "Travel"
    }
    else {
        selectedCategory = null;
    }
    loadEventItems = 3;
    getEventsAccordingToUserPrefs();
}

filmCategory = () => {
    if (selectedCategory != "Film") { 
        selectedCategory = "Film"
    }
    else {
        selectedCategory = null;
    }
    loadEventItems = 3;
    getEventsAccordingToUserPrefs();
}

musicCategory = () => {
    if (selectedCategory != "Music") { 
        selectedCategory = "Music"
    }
    else {
        selectedCategory = null;
    }
    loadEventItems = 3;
    getEventsAccordingToUserPrefs();
}

foodCategory = () => {
    if (selectedCategory != "Food") { 
        selectedCategory = "Food"
    }
    else {
        selectedCategory = null;
    }
    loadEventItems = 3;
    getEventsAccordingToUserPrefs();
}

sportsCategory = () => {
    if (selectedCategory != "Sports") { 
        selectedCategory = "Sports"
    }
    else {
        selectedCategory = null;
    }
    loadEventItems = 3;
    getEventsAccordingToUserPrefs();
}

fashionCategory = () => {
    if (selectedCategory != "Fashion") { 
        selectedCategory = "Fashion"
    }
    else {
        selectedCategory = null;
    }
    loadEventItems = 3;
    getEventsAccordingToUserPrefs();
}

$('.travel-outdoors').click(travelCategory);
$('.film-media').click(filmCategory);
$('.music').click(musicCategory);
$('.food-drinks').click(foodCategory);
$('.sports-fitness').click(sportsCategory);
$('.fashion-lifestyle').click(fashionCategory);
// END CATEGORIES

// FILTERS

cityChanged = () => {
    locationFilter = document.getElementById("city").value;
    console.log(locationFilter);
    locationOuter.classList.remove('active');

    getEventsAccordingToUserPrefs();
}


getCurrentLocation = () => {
    getMapLocation();
    getEventsAccordingToUserPrefs();
    locationOuter.classList.remove('active');
}

filterOptionClicked = () => {
    // Filters
    var dateFilter = new Date();
    var priceFilterMin = 0;
    var priceFilterMax = 999;
    getUserPrefsData();
}


$('.filterOption').click(filterOptionClicked);


// END FILTERS


// PROFILE PAGE
var username;
var email;
var password;
var dob;
var gender;


savePrefs = () => {
    username = $("#retrieveUsername").val()
    email = $("#retrieveUserEmail").val()
    password = $("#retrieveUserPwd").val();
    dob = $("#retrieveUserDob").val();
    gender = $("#retrieveUserGender").val();
    addData();
};


addData = () => {
    // Add Data    
    var docRef = firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid);
    var o = {};
    docRef.get().then(function(thisDoc) {
        if (thisDoc.exists) {
            //user is already there, write only last login
            o.username = $("#retrieveUsername").val();
            o.email = $("#retrieveUserEmail").val();
            o.password = $("#retrieveUserPwd").val();
            o.dob = $("#retrieveUserDob").val();
            o.gender = $("#retrieveUserGender").val();
            
            docRef.update(o).then(function(thisDoc) {
                window.location.href = "frontPage.html";
            });
        }
    });
}

getUserProfileData = () => {
    // Add Data     
    var docRef = firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid);
    var o = {};
    docRef.get().then(function(thisDoc) {
        if (thisDoc.exists) {
            //user is already there, write only last login
            //$("#retrieveUsername").placeholder = thisDoc.data().username;
            $("#displayUsername").text(thisDoc.data().email);
            console.log($("#displayUsername"));
            $("#retrieveUsername").attr('placeholder',thisDoc.data().username);
            $("#retrieveUserEmail").attr('placeholder',thisDoc.data().email);
            $("#retrieveUserPwd").attr('placeholder',thisDoc.data().email);
            $("#retrieveUserDob").attr('placeholder',thisDoc.data().dob);
            $("#retrieveUserGender").attr('placeholder',thisDoc.data().gender);
        }
    });
}

$('.btnDone').click(addData);



$('#btn-save-profile').click(savePrefs);


// MENU BUTTONS
$('.home').click(getUserPrefsData);
$('.profile').click(getUserProfileData);

// SETTINGS PAGE
preferencesButton = () => {
    window.location.replace("preference.html");
};

$('.preferenceButton').click(preferencesButton);


logOutButton = () => {
    firebase.auth().signOut().then(() => {
        window.location.replace("../index.html");
    });
};


$('#btnLogout').click(logOutButton);
