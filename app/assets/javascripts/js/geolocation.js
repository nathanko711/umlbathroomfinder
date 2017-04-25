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

function inside_costello(lat, long) {
    var costelloRectCoords = [{
        lat: 42.655909,
        lng: -71.324447
    }, {
        lat: 42.655514,
        lng: -71.323514
    }, {
        lat: 42.655060,
        lng: -71.323876
    }, {
        lat: 42.655474,
        lng: -71.324882
    }];

    var costello = new google.maps.Polygon({
        paths: costelloRectCoords
    });
    latlong = new google.maps.LatLng(lat, long);
    return google.maps.geometry.poly.containsLocation(latlong, costello)
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

function inside_perry(lat, long) {
    var perryRectCoords = [{
        lat: 42.654402,
        lng: -71.325836
    }, {
        lat: 42.654574,
        lng: -71.325640
    }, {
        lat: 42.654174,
        lng: -71.325082
    }, {
        lat: 42.653985,
        lng: -71.325315
    }];

    var perry = new google.maps.Polygon({
        paths: perryRectCoords
    });
    latlong = new google.maps.LatLng(lat, long);
    return google.maps.geometry.poly.containsLocation(latlong, perry)
}

function inside_cumnock(lat, long) {
    var cumnockRectCoords = [{
        lat: 42.653575,
        lng: -71.326087
    }, {
        lat: 42.653835,
        lng: -71.326449
    }, {
        lat: 42.654247,
        lng: -71.325856
    }, {
        lat: 42.654036,
        lng: -71.325510
    }];

    var cumnock = new google.maps.Polygon({
        paths: cumnockRectCoords
    });
    latlong = new google.maps.LatLng(lat, long);
    return google.maps.geometry.poly.containsLocation(latlong, cumnock)
}

function inside_kitson(lat, long) {
    var kitsonRectCoords = [{
        lat: 42.653965,
        lng: -71.325290
    }, {
        lat: 42.653764,
        lng: -71.325051
    }, {
        lat: 42.653431,
        lng: -71.325531
    }, {
        lat: 42.653611,
        lng: -71.325770
    }];

    var kitson = new google.maps.Polygon({
        paths: kitsonRectCoords
    });
    latlong = new google.maps.LatLng(lat, long);
    return google.maps.geometry.poly.containsLocation(latlong, kitson)
}

function inside_southwick(lat, long) {
    var southwickRectCoords = [{
        lat: 42.653597,
        lng: -71.325783
    }, {
        lat: 42.653056,
        lng: -71.325048
    }, {
        lat: 42.652859,
        lng: -71.325318
    }, {
        lat: 42.653419,
        lng: -71.326062
    }];

    var southwick = new google.maps.Polygon({
        paths: southwickRectCoords
    });
    latlong = new google.maps.LatLng(lat, long);
    return google.maps.geometry.poly.containsLocation(latlong, southwick)
}

function inside_pasteur(lat, long) {
    var pasteurRectCoords = [{
        lat: 42.653056,
        lng: -71.325048
    }, {
        lat: 42.653206,
        lng: -71.325238
    }, {
        lat: 42.653557,
        lng: -71.324771
    }, {
        lat: 42.653409,
        lng: -71.324571
    }];

    var pasteur = new google.maps.Polygon({
        paths: pasteurRectCoords
    });
    latlong = new google.maps.LatLng(lat, long);
    return google.maps.geometry.poly.containsLocation(latlong, pasteur)
}

function inside_falmouth(lat, long) {
    var falmouthRectCoords = [{
        lat: 42.653965,
        lng: -71.325290
    }, {
        lat: 42.653409,
        lng: -71.324544
    }, {
        lat: 42.653600,
        lng: -71.324270
    }, {
        lat: 42.654099,
        lng: -71.324155
    }, {
        lat: 42.654267,
        lng: -71.324493
    }];

    var falmouth = new google.maps.Polygon({
        paths: falmouthRectCoords
    });
    latlong = new google.maps.LatLng(lat, long);
    return google.maps.geometry.poly.containsLocation(latlong, falmouth)
}

function inside_pinanski(lat, long) {
    var pinanskiRectCoords = [{
        lat: 42.655159,
        lng: -71.325096
    }, {
        lat: 42.654863,
        lng: -71.325380
    }, {
        lat: 42.654401,
        lng: -71.324559
    }, {
        lat: 42.654689,
        lng: -71.324205
    }];

    var pinanski = new google.maps.Polygon({
        paths: pinanskiRectCoords
    });
    latlong = new google.maps.LatLng(lat, long);
    return google.maps.geometry.poly.containsLocation(latlong, pinanski)
}

function inside_lydon(lat, long) {
    var lydonRectCoords = [{
        lat: 42.652925,
        lng: -71.327005
    }, {
        lat: 42.653219,
        lng: -71.326533
    }, {
        lat: 42.652909,
        lng: -71.326064
    }, {
        lat: 42.652519,
        lng: -71.326447
    }];

    var lydon = new google.maps.Polygon({
        paths: lydonRectCoords
    });
    latlong = new google.maps.LatLng(lat, long);
    return google.maps.geometry.poly.containsLocation(latlong, lydon)
}

function inside_eames(lat, long) {
    var eamesRectCoords = [{
        lat: 42.652925,
        lng: -71.327005
    }, {
        lat: 42.653047,
        lng: -71.326841
    }, {
        lat: 42.653345,
        lng: -71.327235
    }, {
        lat: 42.653233,
        lng: -71.327391
    }];

    var eames = new google.maps.Polygon({
        paths: eamesRectCoords
    });
    latlong = new google.maps.LatLng(lat, long);
    return google.maps.geometry.poly.containsLocation(latlong, eames)
}

function inside_emerging(lat, long) {
    var emergingRectCoords = [{
        lat: 42.652505,
        lng: -71.326393
    }, {
        lat: 42.652296,
        lng: -71.326701
    }, {
        lat: 42.652618,
        lng: -71.327173
    }, {
        lat: 42.652460,
        lng: -71.327382
    }, {
        lat: 42.651973,
        lng: -71.326711
    }, {
        lat: 42.652365,
        lng: -71.326173
    }];

    var emerging = new google.maps.Polygon({
        paths: emergingRectCoords
    });
    latlong = new google.maps.LatLng(lat, long);
    return google.maps.geometry.poly.containsLocation(latlong, emerging)
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
    var pickerOne = '#selectpicker1';
    var pickerTwo = '#selectpicker2';
    var o1 = '';
    var o2 = '';
    var found = 0;
    
    if (position.coords.latitude > 43.651456) {
         o1 = 'north';
    } else {
         o1 = 'south';
    }
    
    if (inside_olsen(position.coords.latitude, position.coords.longitude)){
         o2 = 'Olsen';
         found = 1;
    }
    else if (inside_ball(position.coords.latitude, position.coords.longitude)){
         o2 = 'Ball';
         found = 1;
    }
    else if (inside_costello(position.coords.latitude, position.coords.longitude)){
         o2 = 'Costello';
         found = 1;
    }
    else if (inside_olney(position.coords.latitude, position.coords.longitude)){
         o2 = 'Olney';
         found = 1;
    }
    else if (inside_perry(position.coords.latitude, position.coords.longitude)){
         o2 = 'Engineering';
         found = 1;
    }
    else if (inside_cumnock(position.coords.latitude, position.coords.longitude)){
         o2 = 'Cumnock';
         found = 1;
    }
    else if (inside_kitson(position.coords.latitude, position.coords.longitude)){
         o2 = 'Kitson';
         found = 1;
    }
    else if (inside_southwick(position.coords.latitude, position.coords.longitude)){
         o2 = 'Southwick';
         found = 1;
    }
    else if (inside_pasteur(position.coords.latitude, position.coords.longitude)){
         o2 = 'Pasteur';
         found = 1;
    }
    else if (inside_falmouth(position.coords.latitude, position.coords.longitude)){
         o2 = 'Falmouth';
         found = 1;
    }
    else if (inside_pinanski(position.coords.latitude, position.coords.longitude)){
         o2 = 'Pinanski';
         found = 1;
    }
    else if (inside_lydon(position.coords.latitude, position.coords.longitude)){
         o2 = 'Lydon';
         found = 1;
    }
    else if (inside_eames(position.coords.latitude, position.coords.longitude)){
         o2 = 'Eames';
         found = 1;
    }
    else if (inside_emerging(position.coords.latitude, position.coords.longitude)){
         o2 = 'EmergingTechnologies';
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
      makeSelection(pickerOne, o1, pickerTwo, o2);  
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
