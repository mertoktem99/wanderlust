
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
var foodchoice;
var travelchoice;
var musicchoice;
var username;

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

savePrefs = () => {
    foodchoice = document.querySelector('#food').checked;
    travelchoice = document.querySelector('#travel').checked;
    musicchoice = document.querySelector('#music').checked;

    addData();
};


addData = () => {
    // Add Data    
    var docRef = firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid);
    var o = {};
    docRef.get().then(function(thisDoc) {
        if (thisDoc.exists) {
            //user is already there, write only last login
            o.travel = travelchoice;
            o.food = foodchoice;
            o.music = musicchoice;
            docRef.update(o);
        }
        else {
            //new user
            o.uid = docRef;
            o.email = useremail;
            o.travel = travelchoice;
            o.food = foodchoice;
            o.music = musicchoice;
            // Send it
            docRef.set(o);
        }

    });
}

getData = () => {
    // Add Data 
    var datashow = $("#data");
    
    
    var docRef = firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid);
    var o = {};
    docRef.get().then(function(thisDoc) {
        if (thisDoc.exists) {
            //user is already there, write only last login
            datashow.append(`<p> travel: ${thisDoc.data().travel} </p>`);
            datashow.append(`<p> food: ${thisDoc.data().food} </p>`);
            datashow.append(`<p> music: ${thisDoc.data().music} </p>`);
            datashow.append(`<p> email: ${thisDoc.data().email} </p>`);
        }
        else {
            //new user
            o.uid = docRef;
            o.email = useremail;
            o.travel = travelchoice;
            o.food = foodchoice;
            o.music = musicchoice;
            // Send it
            docRef.set(o);
        }

    });
}


// addData = () => {
//     // Add Data
//     alert("Adding Data");
//     var username = false;
//     db.collection("users").get().then((querySnapshot) => {
//         querySnapshot.forEach((doc) => {
//             if ($("#username").val() == `${doc.data().username}`) {
//                 //Username found
//                 username = true;
//             }
//         })
//     })
//     .then(function(test) {
//         if (username) {
//             $("#deviceready").append(`<p>Username already existed.</p>`)
//         }
//         else {
//             db.collection("users").add({
//                 username: $("#username").val(),
//                 password: $("#password").val(),
//                 })
//                 .then(function(docRef) {
//                 console.log("Document written with ID: ", docRef.id);
//                 $("#deviceready").append(`<p>User created.</p>`)
//                 })
//                 .catch(function(error) {
//                 console.error("Error adding document: ", error);
//                 $("#deviceready").append(`<p>Error.</p>`)
//                 });
//         }
//     });


// }

getDataz = () => {
    // Add Data
    alert("Getting Data");
    var username = false;
    db.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            if ($("#username").val() == `${doc.data().username}`) {
                //Username found
                username = true;
                // Checking password
                if($("#password").val() == `${doc.data().password}`) {
                    // Password Correct
                    $("#deviceready").append(`<p>Login Sucessfully</p>`);
                }
                else {
                    // Password Incorrect
                    $("#deviceready").append(`<p>Incorrect password!</p>`);
                }
            }
        })  
    }).then(function(test) {
        if (!username) {
            $("#deviceready").append(`<p>Username not found!</p>`);
        }
    });
}


$('#savePrefs').click(savePrefs);

$('#logoutbutton').click(logOutButton);