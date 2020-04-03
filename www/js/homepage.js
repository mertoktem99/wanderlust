

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

var foundAnEvent = false;


// Filters
var priceFilterMin = 0;
var priceFilterMax = 999;
var locationFilter = null;
var searchFilter = "";

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
    // Get Data     
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
            if (locationFilter == null) {
                locationFilter = thisDoc.data().location; // By default we are putting location filter to user's selected city from DB.
            }
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
    openingDisplay.append(`
    <h1 id="loading"> Loading...</h1>`);

    const currentDate = new Date();
    loadedEventItems = 0;
    foundAnEvent = false;
    db.collection("events").get().then((querySnapshot) => {
        openingDisplay.empty();
        querySnapshot.forEach((doc) => {
            if (loadedEventItems < loadEventItems &&
                doc.data().date.toDate() > currentDate &&
                doc.data().date.toDate() > dateFilter &&
                doc.data().price >= priceFilterMin &&
                doc.data().price <= priceFilterMax &&
                doc.data().city == locationFilter &&
                (`${doc.data().category}`.toUpperCase().includes(searchFilter.toUpperCase()) || `${doc.data().name}`.toUpperCase().includes(searchFilter.toUpperCase()))
                ) {
                    
                    if (filmChoice == true && 
                        `${doc.data().category}` == "Film&Media" &&
                        (selectedCategory == null || selectedCategory == "Film") 
                        )
                        {
                        appendChildCount();
                        openingDisplay.append(`
                            <li class='eventitem content-child content-child${childCount.toString()}' data-name='${doc.data().name}'>
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
                            <li class='eventitem content-child content-child${childCount.toString()}' data-name='${doc.data().name}'>
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
                            <li class='eventitem content-child content-child${childCount.toString()}' data-name='${doc.data().name}'>
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
                            <li class='eventitem content-child content-child${childCount.toString()}' data-name='${doc.data().name}'>
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
                        (selectedCategory == null || selectedCategory == "Food")
                        )
                        {
                        appendChildCount();
                        openingDisplay.append(`
                            <li class='eventitem content-child content-child${childCount.toString()}' data-name='${doc.data().name}'>
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
                            <li class='eventitem content-child content-child${childCount.toString()}' data-name='${doc.data().name}'>
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

        var events = document.querySelectorAll(".eventitem");
        events.forEach(event => event.addEventListener('click', gotoItem ));
        })
    }).then((querySnapshot) => {
        if (!foundAnEvent) {
            openingDisplay.empty();
            openingDisplay.append("<h1 id='loading'> Nothing to show </h1>");            
        }
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
    foundAnEvent = true;
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

categoryOptionClicked = () => {
    selectedCategory = null;
    loadEventItems = 3;
    getEventsAccordingToUserPrefs();
}




$('.categoryOption').click(categoryOptionClicked);
$('.film-media').click(filmCategory);
$('.music').click(musicCategory);
$('.food-drinks').click(foodCategory);
$('.sports-fitness').click(sportsCategory);
$('.fashion-lifestyle').click(fashionCategory);
$('.travel-outdoors').click(travelCategory);

// END CATEGORIES

// FILTERS

cityChanged = () => {
    locationFilter = document.getElementById("city").value;

    locationOuter.classList.remove('active');
    
    
    //getEventsAccordingToUserPrefs();
}

filterOptionClicked = () => {
    // Filters
    dateFilter = new Date();
    priceFilterMin = 0;
    priceFilterMax = 999;
    locationFilter = null;
    getUserPrefsData();
}

useYourLocation = () => {
    // Filters
    getMapLocation();
}

$('.filterOption').click(filterOptionClicked);
$('#clearFilter').click(filterOptionClicked);

// END FILTERS


// PROFILE PAGE
var email;
var password;
var dob;
var gender;


savePrefs = () => {
    email = $("#retrieveUserEmail").val();
    password = $("#retrieveUserPwd").val();
    dob = $("#retrieveUserDob").val();
    gender = $("#gender option:selected").html();
    addData();
};


addData = () => {
    // Add Data    
    var docRef = firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid);
    var o = {};
    docRef.get().then(function(thisDoc) {
        if (thisDoc.exists) {
            //user is already there, write only last login
            o.email = email;
            o.password = password;
            o.dob = dob;
            o.gender = gender;
            docRef.update(o).then(function(thisDoc) {
                $("#profile-output").html('Changes saved!').css('color', 'green').slideDown();
            });               
        }
    });
}

function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' || value.length == 0) return false;
    return (value);
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

            $("#retrieveUsername").attr('placeholder',thisDoc.data().username);
            $("#retrieveUsername").val(thisDoc.data().username); 
            $("#retrieveUserEmail").attr('placeholder',thisDoc.data().email);
            $("#retrieveUserEmail").val(thisDoc.data().email);

            $("#retrieveUserPwd").attr('placeholder',thisDoc.data().email);
            $("#retrieveUserPwd").val(thisDoc.data().password);

            $("#retrieveUserDob").attr('placeholder',thisDoc.data().dob);
            $("#retrieveUserDob").val(thisDoc.data().dob);

            setSelectByText("gender", thisDoc.data().gender);
        }
    });
}


function setSelectByText(eID,text)
{ //Loop through sequentially//
  var ele=document.getElementById(eID);
  for(var ii=0; ii<ele.length; ii++)
    if(ele.options[ii].text==text) { //Found!
      ele.options[ii].selected=true;
      return true;
    }
  return false;
}

$('.btnDone').click(savePrefs);

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

/* ///////////////////////
// Contact Us
////////////////////////*/
$(document).ready(function() {
    var form = $('form'),
        name = $('#name'),
        email = $('#email'),
        subject = $('#subject'),
        message = $('#message'),
        info = $('#info'),
        submit = $("#btn-send-contact");
    
    form.on('input', '#name, #email, #subject, #message', function() {
      $(this).css('border-color', '');
      info.html('').slideUp();
    });
    submit.on('click', function(e) {
        e.preventDefault();
        if(validate()) {
            addContactData();
        }
        else {
            info.html('Could not send mail! Sorry!').css('color', 'red').slideDown();

        }
    });
    
    function validate() {
      var valid = true;
      var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      
      if(!regex.test(email.val())) {
        email.css('border-color', 'red');
        valid = false;
      }
      if($.trim(subject.val()) === "") {
        subject.css('border-color', 'red');
        valid = false;
      }

      if($.trim(name.val()) === "") {
        name.css('border-color', 'red');
        valid = false;
      }

      if($.trim(message.val()) === "") {
        message.css('border-color', 'red');
        valid = false;
      }
      
      return valid;
    }
  
  });


addContactData = () => {
    // Add Data    
    var docRef = firebase.firestore().collection("contact").doc(firebase.auth().currentUser.uid);
    var o = {};
    docRef.get().then(function(thisDoc) {
            //new user
            o.uid = docRef;
            o.name = $('#name').val();
            o.email = $('#email').val();
            o.subject = $('#subject').val();
            o.message = $('#message').val();

            // Send it
            docRef.set(o).then(function(o) {
                $('#name').val('');
                $('#email').val('');
                $('#subject').val('');
                $('#message').val('');
                info.html('Message sent!').css('color', 'green').slideDown();
            });
        });
}

  // Search

  $("#search").change(function(){
    searchFilter = $("#search").val()
    getEventsAccordingToUserPrefs();
  });