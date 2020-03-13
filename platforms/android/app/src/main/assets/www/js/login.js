

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        window.location.replace("screens/frontPage.html");
    }
});

loginButton = () => {
    var email = $("#email").val()
    var password = $("#password").val();

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        console.log(errorCode);
        var errorMessage = error.message;
        console.log(errorMessage);
        // ...
      })
};

googleLoginButton = () => {

}

// Adding Event Handlers
$('#login').click(loginButton);
$('#google-login').click(googleLoginButton);