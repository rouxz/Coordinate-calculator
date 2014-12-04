'use strict';
var COORDINATE_FINDER = COORDINATE_FINDER || {};


    
    
	
/* include map in the web page */
google.maps.event.addDomListener(window, 'load', MAP_ROUTINES.initialize);


/* for implementation */
/* ------------------ */
COORDINATE_FINDER.retrieveCoordinate = function () {
    
    
    
    function displayResults(value, position){
        var display = '<li class="results_el">' + value + ' : ' + position + '</li>';
        $("#results_list").append(display);
    };
    
    /* clear the map */
    MAP_ROUTINES.clearMarkers();
    
    /* clear all info within sections */ 
    $('.results_el').remove();
    
    MAP_ROUTINES.coordinateFinderList($('#city').val(), displayResults);
    
    
};


/* load when the DOM is ready */
/*
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
//});

