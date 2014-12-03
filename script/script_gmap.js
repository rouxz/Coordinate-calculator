/* clear space of name */
(function map_routines () {
    'use strict';
	var map;
	var centerMap = new google.maps.LatLng(48.806863, 17.050781);
	var marker;

    
    
	// create a map
	function initialize() {
		var mapOptions = {
			zoom: 4,
			center: centerMap,
			mapTypeId: google.maps.MapTypeId.TERRAIN,
			mapTypeControl: false,
			streetViewControl: false,
			maxZoom: 16,
			minZoom: 0
		};
		// create the map
		map = new google.maps.Map(document.getElementById('map'), mapOptions);
	}

    // find out coordinates in a map
    function coordinateFinder(value) {
        // call google map geocode service
        geocoder.geocode({ 'address': value}, function (results, status) {
            // result found
            if (status == google.maps.GeocoderStatus.OK) {
                map.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location
                });
                alert("Found");
                return results[0].geometry.location;
            }  
            //result no found
            else {
                alert('not found');
                return 'Geocode was not successful for the following reason: ' + status;
            }
        });

    }
    
    
    
    
    
    
    
	
	/* include map in the web page */
	google.maps.event.addDomListener(window, 'load', initialize);
				
	
	/* load when the DOM is ready */
	$().ready(function () {


		
//		$.getJSON("data/data_feed_vba.json")
//			/* load the map and fill data and markers in it */
//			.done(function(data){
//					
//					/* add all the markers */
//					addMarkers(data);
//					/* add a behaviour to the form */
//					add_form_behaviour();
//					
//			})
//			.fail(function(){
//					/* show that the json loading has failed */
//					$("#messages").html("results loading failed");
//		});

	//end of ready	
    });
}());