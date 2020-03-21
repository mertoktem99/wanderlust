
var Latitude = undefined;
var Longitude = undefined;
var city = null;

// Get geo coordinates


getMapLocation = () => {
    navigator.geolocation.getCurrentPosition(onMapSuccess, onMapError, { enableHighAccuracy: true });
}

// Success callback for get geo coordinates

var onMapSuccess = function (position) {

    Latitude = position.coords.latitude;
    Longitude = position.coords.longitude;

    getMap(Latitude, Longitude);

}

// Error callback

function onMapError(error) {
    console.log('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
}

// Get map by using coordinates

function getMap(latitude, longitude) {

    getCity();
}

// Success callback for watching your changing position

var onMapWatchSuccess = function (position) {
    alert("successs");
    var updatedLatitude = position.coords.latitude;
    var updatedLongitude = position.coords.longitude;

    if (updatedLatitude != Latitude && updatedLongitude != Longitude) {

        Latitude = updatedLatitude;
        Longitude = updatedLongitude;

        getMap(updatedLatitude, updatedLongitude);
    }
}



// Watch your changing position

function watchMapPosition() {

    return navigator.geolocation.watchPosition
    (onMapWatchSuccess, onMapError, { enableHighAccuracy: true });
}



// AIzaSyAOWiSpvUjvww_EKXfphNg87bpsgqxnG9w

function getCity() {
    alert("yay");
    var latlng;
    latlng = new google.maps.LatLng(Latitude, Longitude);

    new google.maps.Geocoder().geocode({'latLng' : latlng}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[1]) {
                var country = null, countryCode = null, cityAlt = null;
                var c, lc, component;
                for (var r = 0, rl = results.length; r < rl; r += 1) {
                    var result = results[r];
    
                    if (!city && result.types[0] === 'locality') {
                        for (c = 0, lc = result.address_components.length; c < lc; c += 1) {
                            component = result.address_components[c];
    
                            if (component.types[0] === 'locality') {
                                city = component.long_name;
                                break;
                            }
                        }
                    }
                    else if (!city && !cityAlt && result.types[0] === 'administrative_area_level_1') {
                        for (c = 0, lc = result.address_components.length; c < lc; c += 1) {
                            component = result.address_components[c];
    
                            if (component.types[0] === 'administrative_area_level_1') {
                                cityAlt = component.long_name;
                                break;
                            }
                        }
                    } else if (!country && result.types[0] === 'country') {
                        country = result.address_components[0].long_name;
                        countryCode = result.address_components[0].short_name;
                    }
    
                    if (city && country) {
                        break;
                    }
                }
    
                console.log("City: " + city + ", City2: " + cityAlt + ", Country: " + country + ", Country Code: " + countryCode);
            }
        }
    });
    alert(city);
}

addLocationData = () => {
    // Add Data    
    var docRef = firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid);
    var o = {};
    docRef.get().then(function(thisDoc) {
        if (thisDoc.exists) {
            //user is already there, write only last login
            if (city != null) {
                o.location = city;
                docRef.update(o).then(function(thisDoc){
                    window.location.replace("../index.html");
                });
            }
        }
    });
    alert(city);
}


confirm = () => {
    // Add Data    
    var docRef = firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid);
    var o = {};
    docRef.get().then(function(thisDoc) {
        if (thisDoc.exists) {
            //user is already there, write only last login
            if (city != null) {
                o.location = city;
            }
            docRef.update(o);
        }
    })
    alert(city);
}



$('#currentLocationBtn').click(getMapLocation);
$('#confirmBtn').click(addLocationData);


  