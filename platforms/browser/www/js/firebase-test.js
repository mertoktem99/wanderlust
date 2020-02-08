
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

addData = () => {
    // Add Data
    alert("Adding Data");
    var username = false;
    db.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            if ($("#username").val() == `${doc.data().username}`) {
                //Username found
                username = true;
            }
        })
    })
    .then(function(test) {
        if (username) {
            $("#deviceready").append(`<p>Username already existed.</p>`)
        }
        else {
            db.collection("users").add({
                username: $("#username").val(),
                password: $("#password").val(),
                })
                .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
                $("#deviceready").append(`<p>User created.</p>`)
                })
                .catch(function(error) {
                console.error("Error adding document: ", error);
                $("#deviceready").append(`<p>Error.</p>`)
                });
        }
    });


}

getData = () => {
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

test = () => {
    alert("test");
};


$('#loginButton').click(getData);

$('#registerButton').click(addData);