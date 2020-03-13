


createUser = () => {
    var email = $("#email").val();
    var password = $("#password").val();

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        console.log(errorCode);
        var errorMessage = error.message;
        console.log(errorMessage);
      }).then(() => {
        window.location.replace("preference.html");
    });
};

$('#signUp').click(createUser);
