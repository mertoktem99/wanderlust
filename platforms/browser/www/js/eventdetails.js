

logOutButton = () => {
    firebase.auth().signOut().then(() => {
        window.location.replace("index.html");
    });
};

homeButton = () => {
        window.location.replace("homepage.html");
};



function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}



getEventDetails = () => {
    var eventshow = $("#eventshow");

    db.collection("events").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            if (event == `${doc.data().name}`) {
                eventshow.append(`<article data-name='${doc.data().name}'  > 
                <h2> Event Name: ${doc.data().name} </h2>
                <p> Description: ${doc.data().description} </p>
                <p> Category: ${doc.data().category} </p> 
                <p> Address: ${doc.data().address} </p>
                <img href='${doc.data().image}'>
                <p> Date: ${doc.data().date.toDate()} </p>
                <p> Time: ${doc.data().date.toDate().getTime()} </p> 
                <p> Price: $${doc.data().price} </p> 
                <p> City: ${doc.data().city} </p> </article>`);
            }
        })
    });
}
var event = getParameterByName('event');
getEventDetails();

$('#homebutton').click(homeButton);
$('#logoutbutton').click(logOutButton);