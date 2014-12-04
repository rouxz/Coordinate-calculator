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

/*clear all the markers on a map */
MAP_ROUTINES.clearMarkers = function (){
    
}



/* find out coordinated in a map */
/* return results via a callback function */
MAP_ROUTINES.coordinateFinder = function (city, callback) {
    // call google map geocode service
    var geocoder = new google.maps.Geocoder();
    if (city.trim().length > 0){
        geocoder.geocode({ 'address': city.trim()}, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                // result found
                MAP_ROUTINES.map.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    map: MAP_ROUTINES.map,
                    position: results[0].geometry.location
                });
                callback(city, results[0].geometry.location);
            } else {
                //result no found
                alert('not found');
                //return 'Geocode was not successful for the following reason: ' + status;
            }
        });
    };
    

}



/* find out coordinates in a map */
/* query is asked via a list separated by semicolon */
MAP_ROUTINES.coordinateFinderList = function (city_list, callback) {
    // call google map geocode service
    var i = 0;
    var array_city = city_list.split(";");
    //iterate through the list of array
    for (i = 0; i < array_city.length; i++){
        MAP_ROUTINES.coordinateFinder(array_city[i], callback);
    };

}

    
    
    
    
    
    




