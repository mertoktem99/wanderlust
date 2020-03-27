

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
        $('#email').css('border-color', 'red');
        $('#password').css('border-color', 'red');
        $('#info').html(`${error.message}`).css('color', 'red').slideDown();
        // ...
      })
};

googleLoginButton = () => {

    var provider = new firebase.auth.GoogleAuthProvider();
    
    firebase.auth().signInWithRedirect(provider);

    firebase.auth().getRedirectResult().then(function(result) {
    if (result.credential) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // ...
    }
    // The signed-in user info.
    var user = result.user;
    }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    $('#email').css('border-color', 'red');
    $('#password').css('border-color', 'red');
    $('#info').html(`${error.message}`).css('color', 'red').slideDown();
    // ...
    });
}

// Adding Event Handlers
$('#login').click(loginButton);
$('#google-login').click(googleLoginButton);
