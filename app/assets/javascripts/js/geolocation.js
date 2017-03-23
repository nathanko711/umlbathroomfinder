function inside_olsen(lat, long) {
    var olsenRectCoords = [{
        lat: 42.654672,
        lng: -71.327096
    }, {
        lat: 42.654479,
        lng: -71.326779
    }, {
        lat: 42.655055,
        lng: -71.326063
    }, {
        lat: 42.655270,
        lng: -71.326409
    }];

    var olsen = new google.maps.Polygon({
        paths: olsenRectCoords
    });
    latlong = new google.maps.LatLng(lat, long);
    return google.maps.geometry.poly.containsLocation(latlong, olsen)
}
        
function inside_ball(lat, long) {
    var ballCoords = [{
        lat: 42.653849,
        lng: -71.326626
    }, {
        lat: 42.653918,
        lng: -71.326398
    }, {
        lat: 42.654382,
        lng: -71.325832
    }, {
        lat: 42.654469,
        lng: -71.325816
    }, {
        lat: 42.654629,
        lng: -71.325634
    }, {
        lat: 42.654803,
        lng: -71.325894
    }, {
        lat: 42.654620,
        lng: -71.326141
    }, {
        lat: 42.654405,
        lng: -71.326331
    }, {
        lat: 42.653945,
        lng: -71.326760
    }];

    var ball = new google.maps.Polygon({
        paths: ballCoords
    });
    latlong = new google.maps.LatLng(lat, long);
    return google.maps.geometry.poly.containsLocation(latlong, ball)
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {

    var pickerOne = '#selectpicker1';
    var pickerTwo = '#selectpicker2';
    var o1 = '';
    var o2 = '';
    if (position.coords.latitude > 42.651456) {
         o1 = 'north';
    } else {
         o1 = 'south';
    }
    
    if (inside_olsen(position.coords.latitude, position.coords.longitude)){
         o2 = 'Olsen';
    }
    else if (inside_ball(position.coords.latitude, position.coords.longitude)){
         o2 = 'Ball';
    }
    else{
        o2 = 'Unknown'
    }
    makeSelection(pickerOne, o1, pickerTwo, o2);
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}
