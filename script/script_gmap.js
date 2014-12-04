/* routines for handling google maps */
var MAP_ROUTINES = {};

//var map;
MAP_ROUTINES.centerMap = new google.maps.LatLng(48.806863, 17.050781);
//var marker;

/* create a map */
MAP_ROUTINES.initialize = function () {
    var mapOptions = {
        zoom: 4,
        center: MAP_ROUTINES.centerMap,
        mapTypeId: google.maps.MapTypeId.TERRAIN,
        mapTypeControl: false,
        streetViewControl: false,
        maxZoom: 16,
        minZoom: 0
    };
    // create the map
    MAP_ROUTINES.map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

/* find out coordinates in a map */
MAP_ROUTINES.coordinateFinder = function () {
    // call google map geocode service
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': 'NYC'}, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            /*// result found
            MAP_ROUTINES.map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: MAP_ROUTINES.map,
                position: results[0].geometry.location
            });*/
            alert('Found');
            //return results[0].geometry.location;
        } else {
            //result no found
            alert('not found');
            //return 'Geocode was not successful for the following reason: ' + status;
        }
    });

}

    
    
    
    
    
    




