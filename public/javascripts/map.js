var map, infoWindow, currPos, currPosMarker, waypts, wayptsList, cols, place;

function initMap() {
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 32.8801,
            lng: -117.2340
        },
        zoom: 13,
        styles: [
	    {
	        "featureType": "administrative.country",
	        "elementType": "geometry.stroke",
	        "stylers": [
	            {
	                "visibility": "on"
	            },
	            {
	                "weight": "0.75"
	            }
	        ]
	    },
	    {
	        "featureType": "administrative.country",
	        "elementType": "labels.text.fill",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "landscape.natural",
	        "elementType": "geometry",
	        "stylers": [
	            {
	                "color": "#d0e3b4"
	            }
	        ]
	    },
	    {
	        "featureType": "landscape.natural.terrain",
	        "elementType": "geometry",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "poi",
	        "elementType": "labels.icon",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.attraction",
	        "elementType": "geometry.fill",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.attraction",
	        "elementType": "geometry.stroke",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.attraction",
	        "elementType": "labels.text.fill",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.attraction",
	        "elementType": "labels.text.stroke",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.attraction",
	        "elementType": "labels.icon",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.business",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.government",
	        "elementType": "geometry.fill",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.government",
	        "elementType": "labels.text.fill",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.medical",
	        "elementType": "geometry",
	        "stylers": [
	            {
	                "color": "#fbd3da"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.medical",
	        "elementType": "geometry.fill",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.medical",
	        "elementType": "labels.text.fill",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.medical",
	        "elementType": "labels.text.stroke",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.park",
	        "elementType": "geometry",
	        "stylers": [
	            {
	                "color": "#bde6ab"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.park",
	        "elementType": "geometry.stroke",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.park",
	        "elementType": "labels.text.fill",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.park",
	        "elementType": "labels.text.stroke",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "road",
	        "elementType": "geometry.fill",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "road",
	        "elementType": "geometry.stroke",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "road",
	        "elementType": "labels",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "road",
	        "elementType": "labels.text.fill",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "road",
	        "elementType": "labels.text.stroke",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "road",
	        "elementType": "labels.icon",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "road.highway",
	        "elementType": "geometry.fill",
	        "stylers": [
	            {
	                "color": "#ffe15f"
	            },
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "road.highway",
	        "elementType": "geometry.stroke",
	        "stylers": [
	            {
	                "color": "#efd151"
	            },
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "road.highway",
	        "elementType": "labels.text.fill",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "road.highway",
	        "elementType": "labels.text.stroke",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "road.highway",
	        "elementType": "labels.icon",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "road.highway.controlled_access",
	        "elementType": "labels.text.fill",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "road.highway.controlled_access",
	        "elementType": "labels.icon",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "road.arterial",
	        "elementType": "geometry.fill",
	        "stylers": [
	            {
	                "color": "#ffffff"
	            },
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "road.local",
	        "elementType": "geometry.fill",
	        "stylers": [
	            {
	                "color": "black"
	            }
	        ]
	    },
	    {
	        "featureType": "transit.station.airport",
	        "elementType": "geometry.fill",
	        "stylers": [
	            {
	                "color": "#cfb2db"
	            }
	        ]
	    },
	    {
	        "featureType": "water",
	        "elementType": "geometry",
	        "stylers": [
	            {
	                "color": "#a2daf2"
	            }
	        ]
	    }]
    });
    infoWindow = new google.maps.InfoWindow;
    waypts = [];
    wayptsList = document.getElementById('waypoints');
    var places = wayptsList.getElementsByTagName('li');
    for (var i = 0; i < places.length; i++) {
        waypts.push({
            location: places[i].getAttribute('data-value'),
            stopover: true
        });
    }

    var input = document.getElementById('new-waypoint');
    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', map);
    autocomplete.addListener('place_changed', function() {
		place = autocomplete.getPlace();
		var address = autocomplete.formatted_address;
    });

    cols = document.querySelectorAll('.points');
    [].forEach.call(cols, function (col) {
        col.addEventListener('dragstart', handleDragStart, false);
        col.addEventListener('dragenter', handleDragEnter, false)
        col.addEventListener('dragover', handleDragOver, false);
        col.addEventListener('dragleave', handleDragLeave, false);
        col.addEventListener('drop', handleDrop, false);
        col.addEventListener('dragend', handleDragEnd, false);
    });

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            // infoWindow.setPosition(pos);
            // infoWindow.setContent('Location found.');
            // infoWindow.open(map);
            map.setCenter(pos);
            currPos = pos;

            currPosMarker = new google.maps.Marker({
                position: currPos,
                map: map,
                title: 'You are here.',
                animation: google.maps.Animation.DROP,
                visible: true,
                icon: "http://maps.google.com/mapfiles/kml/paddle/blu-stars.png"
            });

            infoWindow.setContent('You are here.');
            infoWindow.open(map, currPosMarker);

            currPosMarker.addListener('click', function() {
                if (currPosMarker.open) {
                    infoWindow.open(map, currPosMarker);
                    currPosMarker.open = false;
                } else {
                    infoWindow.close();
                    currPosMarker.open = true;
                }
            });
        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }

    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById('directions-panel'));

    document.getElementById('add-waypoint-btn').addEventListener('click', function() {
        addWaypoint(waypts);
    });

    document.getElementById('submit').addEventListener('click', function() {
        // hide current location's marker
        currPosMarker.setVisible(false);
        infoWindow.close();
        currPosMarker.open = true;

        calculateAndDisplayRoute(directionsService, directionsDisplay, currPos, waypts);
    });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}

function addWaypoint(waypts) {
    /*var newWaypoint = document.getElementById('newWaypoint').value;
    if (newWaypoint != '') {
	    waypts.push({
	    	location: newWaypoint,
	    	stopover: true
	    });
	    var li = document.createElement('li');
	    li.appendChild(document.createTextNode(newWaypoint));
	    li.className += "points";
	    li.draggable = true;
	    li.setAttribute('data-value', document.getElementById('newWaypoint').value);
	    wayptsList.appendChild(li);
	    document.getElementById('waypoints').appendChild(li);
	    document.getElementById('newWaypoint').value = '';

	    cols = document.querySelectorAll('.points');
	    [].forEach.call(cols, function (col) {
	        col.addEventListener('dragstart', handleDragStart, false);
	        col.addEventListener('dragenter', handleDragEnter, false)
	        col.addEventListener('dragover', handleDragOver, false);
	        col.addEventListener('dragleave', handleDragLeave, false);
	        col.addEventListener('drop', handleDrop, false);
	        col.addEventListener('dragend', handleDragEnd, false);
	    });
	}*/
	var newWaypoint = place.name;
    if (newWaypoint != '') {
	    waypts.push({
	    	location: document.getElementById('new-waypoint').value,
	    	stopover: true
	    });
	    var li = document.createElement('li');
	    li.appendChild(document.createTextNode(newWaypoint));
	    li.className += "points";
	    li.draggable = true;
	    li.setAttribute('data-value', document.getElementById('new-waypoint').value);
	    wayptsList.appendChild(li);
	    document.getElementById('waypoints').appendChild(li);
	    document.getElementById('new-waypoint').value = '';

	    cols = document.querySelectorAll('.points');
	    [].forEach.call(cols, function (col) {
	        col.addEventListener('dragstart', handleDragStart, false);
	        col.addEventListener('dragenter', handleDragEnter, false)
	        col.addEventListener('dragover', handleDragOver, false);
	        col.addEventListener('dragleave', handleDragLeave, false);
	        col.addEventListener('drop', handleDrop, false);
	        col.addEventListener('dragend', handleDragEnd, false);
	    });
	}
}

function calculateAndDisplayRoute(directionsService, directionsDisplay, pos, waypts) {
	/* var waypts = [];
    var checkboxArray = document.getElementById('waypoints');
    var places = checkboxArray.getElementsByTagName('li');
    for (var i = 0; i < places.length; i++) {
        waypts.push({
            location: places[i].getAttribute('data-value'),
            stopover: true
        });
    }*/

    /*for (var i = 0; i < checkboxArray.length; i++) {
    	//if (checkboxArray.options[i].selected) {
    		waypts.push({
                location: checkboxArray[i].value,
                stopover: true
            });
       // }
    }*/

    for (var i = 0; i < waypts.length; i++) {
    	waypts[i].stopover = true;
    }

    waypts.slice(-1)[0].stopover = false;

    directionsService.route({
        origin: currPos,
        destination: waypts.slice(-1)[0].location,
        waypoints: waypts,
        optimizeWaypoints: true,
        travelMode: 'DRIVING'
    }, function(response, status) {
        if (status === 'OK') {
            directionsDisplay.setDirections(response);
            /*var route = response.routes[0];
		      var summaryPanel = document.getElementById('directions-panel');
		      summaryPanel.innerHTML = '';
		      // For each route, display summary information.
		      for (var i = 0; i < route.legs.length; i++) {
		        var routeSegment = i + 1;
		        if (route.legs[i].start_address == route.legs[i].end_address) {
		        	break;
		        }
		        summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment +
		            '</b><br>';
		        summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
		        summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
		        summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
    		}*/
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}

var dragSrcEl = null;
var srcIndex = -1;
var index = -1;

function handleDragStart(e) {
    // Target (this) element is the source node.
    //this.style.opacity = '0.4';

    dragSrcEl = this;
    for (var i = 0; i < waypts.length; i++) {
    	if (waypts[i].location == this.getAttribute('data-value')) {
    		srcIndex = i;
    		break;
    	}
    }

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
    console.log('-- D R A G G I N G --');
    console.log(dragSrcEl.innerHTML);
    e.dataTransfer.setData('text/plain', this.getAttribute('data-value'));
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault(); // Necessary. Allows us to drop.
    }

    e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

    return false;
}

function handleDragEnter(e) {
    // this / e.target is the current hover target.
    this.classList.add('over');
}

function handleDragLeave(e) {
    this.classList.remove('over');  // this / e.target is previous target element.
}

function handleDrop(e) {
    // this/e.target is current target element.

    if (e.stopPropagation) {
        e.stopPropagation(); // Stops some browsers from redirecting.
    }

    // Don't do anything if dropping the same column we're dragging.
    if (dragSrcEl != this) {
        // Set the source column's HTML to the HTML of the column we dropped on.
        dragSrcEl.innerHTML = this.innerHTML;

        for (var i = 0; i < waypts.length; i++) {
        	if (waypts[i].location == this.getAttribute('data-value')) {
        		index = i;
        		break;
        	}
        }
        waypts[srcIndex].location = this.getAttribute('data-value');
        waypts[index].location = dragSrcEl.getAttribute('data-value');

        dragSrcEl.setAttribute('data-value', this.getAttribute('data-value'));
        this.innerHTML = e.dataTransfer.getData('text/html');
        this.setAttribute('data-value', e.dataTransfer.getData('text/plain'));

        console.log('-- PRINTING HTML AFTER DROP --');
        console.log(dragSrcEl.innerHTML); //what you drag to
        console.log(this.innerHTML); // what youre dragging
    }

    return false;
}

function handleDragEnd(e) {
    // this/e.target is the source node.

    [].forEach.call(cols, function (col) {
        col.classList.remove('over');
    });
}

/*var cols = document.querySelectorAll('.points');
[].forEach.call(cols, function (col) {
    col.addEventListener('dragstart', handleDragStart, false);
    col.addEventListener('dragenter', handleDragEnter, false)
    col.addEventListener('dragover', handleDragOver, false);
    col.addEventListener('dragleave', handleDragLeave, false);
    col.addEventListener('drop', handleDrop, false);
    col.addEventListener('dragend', handleDragEnd, false);
});*/
