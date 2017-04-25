function inside_olsen(lat, long) {
    var olsenRectCoords = [{
        lat: 42.654682,
        lng: -71.327212
    }, {
        lat: 42.655313,
        lng: -71.326386
    }, {
        lat: 42.655072,
        lng: -71.326048
    }, {
        lat: 42.654464,
        lng: -71.326783
    }];

    var olsen = new google.maps.Polygon({
        paths: olsenRectCoords
    });
    latlong = new google.maps.LatLng(lat, long);
    return google.maps.geometry.poly.containsLocation(latlong, olsen)
}
        
function inside_olney(lat, long) {
    var olneyRectCoords = [{
        lat: 42.655997,
        lng: -71.325445
    }, {
        lat: 42.654929,
        lng: -71.325936
    }, {
        lat: 42.654822,
        lng: -71.325507
    }, {
        lat: 42.655891,
        lng: -71.325024
    }];

    var olney = new google.maps.Polygon({
        paths: olneyRectCoords
    });
    latlong = new google.maps.LatLng(lat, long);
    return google.maps.geometry.poly.containsLocation(latlong, olney)
}

function inside_dugan(lat, long) {
    var duganRectCoords = [{
        lat: 42.642259,
        lng: -71.335939
    }, {
        lat: 42.642344,
        lng: -71.335330
    }, {
        lat: 42.641541,
        lng: -71.335099
    }, {
        lat: 42.641477,
        lng: -71.335707
    }];

    var dugan = new google.maps.Polygon({
        paths: duganRectCoords
    });
    latlong = new google.maps.LatLng(lat, long);
    return google.maps.geometry.poly.containsLocation(latlong, dugan)
}

function inside_durgin(lat, long) {
    var durginRectCoords = [{
        lat: 42.643676,
        lng: -71.335525
    }, {
        lat: 42.643881,
        lng: -71.334345
    }, {
        lat: 42.644591,
        lng: -71.334474
    }, {
        lat: 42.644378,
        lng: -71.335783
    }];

    var durgin = new google.maps.Polygon({
        paths: durginRectCoords
    });
    latlong = new google.maps.LatLng(lat, long);
    return google.maps.geometry.poly.containsLocation(latlong, durgin)
}

function inside_hss(lat, long) {
    var hssRectCoords = [{
        lat: 42.642427,
        lng: -71.334090
    }, {
        lat: 42.642487,
        lng: -71.333593
    }, {
        lat: 42.641887,
        lng: -71.333432
    }, {
        lat: 42.641832,
        lng: -71.333915
    }];

    var hss = new google.maps.Polygon({
        paths: hssRectCoords
    });
    latlong = new google.maps.LatLng(lat, long);
    return google.maps.geometry.poly.containsLocation(latlong, hss)
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    var pickerTwo = '#selectpicker2';
    var o2 = '';
    var found = 0;
    
    if (inside_olsen(position.coords.latitude, position.coords.longitude)){
         o2 = 'Olsen Hall';
         found = 1;
    }
    else if (inside_olney(position.coords.latitude, position.coords.longitude)){
         o2 = 'Olney Hall';
         found = 1;
    }
    
    else if (inside_dugan(position.coords.latitude, position.coords.longitude)){
        o2 = 'Dugan';
        found = 1;
    }
    else if (inside_durgin(position.coords.latitude, position.coords.longitude)){
        o2 = 'Durgin';
        found = 1;
    }
    else if (inside_hss(position.coords.latitude, position.coords.longitude)){
        o2 = 'Health';
        found = 1;
    }
    else{
        alert("We were unable to locate your building with gps, please choose a building manually.");
    }
    
    if (found == 1)
    {
      makeSelection(pickerTwo, o2);  
    }
    
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
