
var latitude;
var longitude;

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

    db.collection("events").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            if (event == `${doc.data().name}`) {
                document.querySelector('.headerimage').src = doc.data().image;
                document.querySelector('.event-name').innerHTML = doc.data().name;
                document.querySelector('.date').innerHTML = TimeConverter(doc.data().date.toDate());
                document.querySelector('.location').innerHTML = doc.data().city;
                document.querySelector('.price').innerHTML = doc.data().price + '$';
                document.querySelector('.eventdescription').innerHTML = doc.data().description;
                latitude = doc.data().location.latitude;
                longitude = doc.data().location.longitude;
            }
        })
    });
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



backButton = () => {
    window.location.replace("frontPage.html");
}

directionButton = () => {
    var mapOptions = {
        center: new google.maps.LatLng(0, 0),
        zoom: 1,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map
    (document.getElementById("map"), mapOptions);


    var latLong = new google.maps.LatLng(latitude, longitude);

    var marker = new google.maps.Marker({
        position: latLong
    });

    marker.setMap(map);
    map.setZoom(15);
    map.setCenter(marker.getPosition());

}

// Initialize and add the map
function initMap() {
    // The location of Uluru
    var uluru = {lat: -25.344, lng: 131.036};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
  }

$('#backBtn').click(backButton);
$('#directionBtn').click(directionButton);


var event = getParameterByName('event');
getEventDetails();
