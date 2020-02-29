
const firebaseConfig = {
    apiKey: "AIzaSyDL2H9c_9LuUq_-V7oqHSWuG-ftJQXpIb8",
    authDomain: "wanderlust-78253.firebaseapp.com",
    databaseURL: "https://wanderlust-78253.firebaseio.com",
    projectId: "wanderlust-78253",
    storageBucket: "wanderlust-78253.appspot.com",
    messagingSenderId: "48070936115",
    appId: "1:48070936115:web:779ebc778452cc8f8a0546",
    measurementId: "G-JQL8HFHSRJ"
};

// const firebase = require("firebase");
// // Required for side-effects
// require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
apiKey: firebaseConfig.apiKey,
authDomain: firebaseConfig.authDomain,
projectId: firebaseConfig.projectId
});

var db = firebase.firestore();
var useremail;
var hikingchoice;
var moviechoice;
var rockchoice;
var noodlechoice;
var username;

// $( document ).ready(function() {
//     getUserPreferences();
//     alert("get");
// });

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        var emailshow = $("#emailshow");
        useremail = user.email;
        emailshow.empty();
        emailshow.append(`<p> ${useremail}  </p>`);
        getData();
    } else {
        emailshow.append(`<p> Not Logged in </p>`);
    }
});

logOutButton = () => {
    firebase.auth().signOut().then(() => {
        window.location.replace("index.html");
    });
};

getData = () => {
    // Add Data 
    var datashow = $("#data");
    
    
    var docRef = firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid);
    var o = {};
    docRef.get().then(function(thisDoc) {
        if (thisDoc.exists) {
            //user is already there, write only last login
            hikingchoice = thisDoc.data().hiking;
            moviechoice = thisDoc.data().movie;
            rockchoice = thisDoc.data().rock;
            noodlechoice = thisDoc.data().noodle;
        }
        else {
            //new user
            o.uid = docRef;
            o.email = useremail;
            o.hiking = hikingchoice;
            o.movie = moviechoice;
            o.rock = rockchoice;
            o.noodle = noodlechoice;

            // Send it
            docRef.set(o);
        }

    }).then(function() {
        getEventsAccordingToUserPrefs();
    });
}

getEventsAccordingToUserPrefs = () => {
    var eventshow = $("#eventshow");

    db.collection("events").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            if (rockchoice == true && `${doc.data().category}` == "Rock") {
                eventshow.append(`<a href="eventdetails.html"><p> event name: ${doc.data().name} </p></a>`);
                eventshow.append(`<p> event category: ${doc.data().category} </p>`);
            }
            else if (hikingchoice == true && `${doc.data().category}` == "Hiking") {
                eventshow.append(`<p> event name: ${doc.data().name} </p>`);
                eventshow.append(`<p> event category: ${doc.data().category} </p>`);
            }
            else if (moviechoice == true && `${doc.data().category}` == "Movie") {
                eventshow.append(`<p> event name: ${doc.data().name} </p>`);
                eventshow.append(`<p> event category: ${doc.data().category} </p>`);
            }
            else if (noodlechoice == true && `${doc.data().category}` == "Noodle") {
                eventshow.append(`<p> event name: ${doc.data().name} </p>`);
                eventshow.append(`<p> event category: ${doc.data().category} </p>`);
            }
        })
    });
}

$('#logoutbutton').click(logOutButton);