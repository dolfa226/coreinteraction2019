$(document).ready(function(){
	
	$(".mapicon").click(function(){
		$(".day").hide();
		$(".button").removeClass("active");

	});

	$(".button").click(function(){
	
		var day = $(this).data('day'); 
		console.log("#"+day);
		$(".day#" + day).toggle("slide");
		
		console.log($(".day:not(#" + day + ")"));
		$(".day:not(#" + day + ")").hide();

		$(this).toggleClass("active");
		$(".button").not(this).removeClass("active");

	});

  });


  window.addEventListener('load', function() {

	mapboxgl.accessToken = "pk.eyJ1IjoiYWlyYWRvbGZvIiwiYSI6ImNqdHlnMHk1NjJrYjY0NXBpZW0yOWM4bDEifQ.Z8lJSiAW94_WcK2jm9nkiQ";

	/* Map: This represents the map on the page. */
	var map = new mapboxgl.Map({
		container: "map",
		style: "mapbox://styles/airadolfo/cjubxx09708iq1fn7v82bu33n",
		zoom: 12.3,
		center: [-73.9896298, 40.7410861]
	});

	map.on('load', function() {
		// Add a layer showing the places.
		map.addLayer({
			"id": "places",
			"type": "circle",
			"paint": {
				"circle-radius": 4.5,
				"circle-color": '#666f7f' 
			  },
			"source": {
				"type": "geojson",
				"data": {
					"type": "FeatureCollection",
					"features": [{

						"type": "Feature",
						"properties": {
							"description": "Melt Shop</strong> <br> $31.17 ",
							"icon": "marker",
						},

						"geometry": {
							"type": "Point",
							"coordinates": [-73.989632, 40.733742]
						}
					}, {
					

					}, {
						"type": "Feature",
						"properties": {
							"description": "<strong> Panera</strong> <br>$8.92</p>",
							"icon": "marker"
						},
						"geometry": {
							"type": "Point",
							"coordinates": [-73.989788, 40.734864]
						}


					}, {
						"type": "Feature",
						"properties": {
							"description": "<strong> Ennju</strong> <br>$47.27</p>",
							"icon": "marker"
						},
						"geometry": {
							"type": "Point",
							"coordinates": [-73.991175, 40.737355]
						}

					}, {
						"type": "Feature",
						"properties": {
							"description": "<strong> Luxamor</strong> <br>$5.39</p>",
							"icon": "marker"
						},
						"geometry": {
							"type": "Point",
							"coordinates": [-74.000854, 40.728832]
						}


					}, {
						"type": "Feature",
						"properties": {
							"description": "<strong> Bubby's </strong> <br>$30.03</p>",
							"icon": "marker"
						},
						"geometry": {
							"type": "Point",
							"coordinates": [-74.007706, 40.730168]
						}


					}, {
						"type": "Feature",
						"properties": {
							"description": "<strong> Outro </strong> <br>$14.15</p>",
							"icon": "marker"
						},
						"geometry": {
							"type": "Point",
							"coordinates": [-73.990896, 40.732740]
						}

					}, {
						"type": "Feature",
						"properties": {
							"description": "<strong> Tim Ho Wan Tim </strong> <br>$18.73</p>",
							"icon": "marker"
						},
						"geometry": {
							"type": "Point",
							"coordinates": [-73.989907, 40.731494]
						}

					}, {
						"type": "Feature",
						"properties": {
							"description": "<strong> Cafe Mocha </strong> <br>$24.89</p>",
							"icon": "marker"
						},
						"geometry": {
							"type": "Point",
							"coordinates": [-73.987849, 40.727739]
						}

					}, {
						"type": "Feature",
						"properties": {
							"description": "<strong> Dunkin Donuts </strong> <br>$79.18</p>",
							"icon": "marker"
						},
						"geometry": {
							"type": "Point",
							"coordinates": [-73.994290, 40.736279]
						}

					}, {
						"type": "Feature",
						"properties": {
							"description": "<strong> Eataly</strong> <br>$18.00</p>",
							"icon": "marker"
						},
						"geometry": {
							"type": "Point",
							"coordinates": [-73.9895802, 40.742213]
						}

					}, {
						"type": "Feature",
						"properties": {
							"description": "<strong> Jollibee </strong> <br>$19.89</p>",
							"icon": "marker"
						},
						"geometry": {
							"type": "Point",
							"coordinates": [-73.9911233, 40.7557433]
						}


					}, {
						"type": "Feature",
						"properties": {
							"description": "<strong> Two Little Red Hens </strong> <br>$15.30</p>",
							"icon": "marker"
						},
						"geometry": {
							"type": "Point",
							"coordinates": [-73.9517691, 40.7775092]
						}
						
					}, {
						"type": "Feature",
						"properties": {
							"description": "<strong> La Lanterna </strong> <br>$18.00</p>",
							"icon": "marker"
						},
						"geometry": {
							"type": "Point",
							"coordinates": [-74.003541, 40.7264452]
						}

					}, {
						"type": "Feature",
						"properties": {
							"description": "<strong> Gong Cha </strong> <br>$14.21</p>",
							"icon": "marker"
						},
						"geometry": {
							"type": "Point",
							"coordinates": [-73.986259, 40.733197]
						}

					}, {
						"type": "Feature",
						"properties": {
							"description": "<strong> Teazzi </strong> <br>$22.98</p>",
							"icon": "marker"
						},
						"geometry": {
							"type": "Point",
							"coordinates": [ -73.99584, 40.7371531]
						}

					}, {
						"type": "Feature",
						"properties": {
							"description": "<strong> Sandwicherie </strong> <br>$11.92</p>",
							"icon": "marker"
						},
						"geometry": {
							"type": "Point",
							"coordinates": [ -73.9901007, 40.731615]
						}

					}, {
						"type": "Feature",
						"properties": {
							"description": "<strong> McDonalds</strong> <br>$21.28</p>",
							"icon": "marker"
						},
						"geometry": {
							"type": "Point",
							"coordinates": [ -73.9967494, 40.7378693]
						}


					}, {
						"type": "Feature",
						"properties": {
							"description": "<strong> Ootoya </strong> <br>$82.74</p>",
							"icon": "marker"
						},
						"geometry": {
							"type": "Point",
							"coordinates": [ -73.992794, 40.733446 ]
						}






					}]
				}
			},

		});

		// When a click event occurs on a feature in the places layer, open a popup at the
		// location of the feature, with description HTML from its properties.
		map.on('click', 'places', function(e) {
			var coordinates = e.features[0].geometry.coordinates.slice();
			var description = e.features[0].properties.description;

			// Ensure that if the map is zoomed out such that multiple
			// copies of the feature are visible, the popup appears
			// over the copy being pointed to.
			while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
				coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
			}

			new mapboxgl.Popup()
				.setLngLat(coordinates)
				.setHTML(description)
				.addTo(map);
		});

		// Change the cursor to a pointer when the mouse is over the places layer.
		map.on('mouseenter', 'places', function() {
			map.getCanvas().style.cursor = 'pointer';
		});

		// Change it back to a pointer when it leaves.
		map.on('mouseleave', 'places', function() {
			map.getCanvas().style.cursor = '';
		});
	});


	window.addEventListener('date', function(e) {
		    const videos = document.querySelectorAll("video")
		
		    videos.forEach(video => {
		      video.addEventListener("click", function (){
		        this.play()
		      })
		    })
		    });

});
		

