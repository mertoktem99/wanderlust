
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
var noodlechoice
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
    hikingchoice = document.querySelector('#hiking').checked;
    moviechoice = document.querySelector('#movie').checked;
    rockchoice = document.querySelector('#rock').checked;
    noodlechoice = document.querySelector('#noodle').checked;
    addData();
};

nextPage = () => {
    window.location.replace("homepage.html");
   
};


addData = () => {
    // Add Data    
    var docRef = firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid);
    var o = {};
    docRef.get().then(function(thisDoc) {
        if (thisDoc.exists) {
            //user is already there, write only last login
            o.hiking = hikingchoice;
            o.movie = moviechoice;
            o.rock = rockchoice;
            o.noodle = noodlechoice;

            docRef.update(o);
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

    });
    // .then(() => {
    //     //window.location.replace("homepage.html");
    // });
}

getData = () => {
    // Add Data 
    var datashow = $("#data");
    
    
    var docRef = firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid);
    var o = {};
    docRef.get().then(function(thisDoc) {
        if (thisDoc.exists) {
            //user is already there, write only last login
            datashow.append(`<p> hiking: ${thisDoc.data().hiking} </p>`);
            datashow.append(`<p> movie: ${thisDoc.data().movie} </p>`);
            datashow.append(`<p> rock: ${thisDoc.data().rock} </p>`);
            datashow.append(`<p> noodle: ${thisDoc.data().noodle} </p>`);
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

// getDataz = () => {
//     // Add Data
//     alert("Getting Data");
//     var username = false;
//     db.collection("users").get().then((querySnapshot) => {
//         querySnapshot.forEach((doc) => {
//             console.log(`${doc.id} => ${doc.data()}`);
//             if ($("#username").val() == `${doc.data().username}`) {
//                 //Username found
//                 username = true;
//                 // Checking password
//                 if($("#password").val() == `${doc.data().password}`) {
//                     // Password Correct
//                     $("#deviceready").append(`<p>Login Sucessfully</p>`);
//                 }
//                 else {
//                     // Password Incorrect
//                     $("#deviceready").append(`<p>Incorrect password!</p>`);
//                 }
//             }
//         })  
//     }).then(function(test) {
//         if (!username) {
//             $("#deviceready").append(`<p>Username not found!</p>`);
//         }
//     });
// }


$('#savePrefs').click(savePrefs);
$('#nextPage').click(nextPage);

$('#logoutbutton').click(logOutButton);