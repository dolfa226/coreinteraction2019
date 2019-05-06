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
		zoom: 13.5,
		center: [-73.993257, 40.733138]
	});

	map.on('load', function() {
		// Add a layer showing the places.
		map.addLayer({
			"id": "places",
			"type": "circle",
			"paint": {
				"circle-radius": 4,
				"circle-color": '#666f7f' 
			  },
			"source": {
				"type": "geojson",
				"data": {
					"type": "FeatureCollection",
					"features": [{

						"type": "Feature",
						"properties": {
							"description": "<strong>Melt Shop</strong> <br>16.18</p>",
							"icon": "marker",
						},

						"geometry": {
							"type": "Point",
							"coordinates": [-73.989632, 40.733742] //not appearing
						}
					}, {
						

						"type": "Feature",
						"properties": {
							"description": "<strong>Amorino</strong> <br>$6.59</p>",
							"icon": "marker"
						},
						"geometry": {
							"type": "Point",
							"coordinates": [-73.993866, 40.732887]
						}
					}, {

						"type": "Feature",
						"properties": {
							"description": "<strong>Sweet Green</strong> <br>$13.88</p>",
							"icon": "marker"
						},
						"geometry": {
							"type": "Point",
							"coordinates": [-73.992456, 40.734057]
						}

					}, {
						"type": "Feature",
						"properties": {
							"description": "<strong>Starbucks</strong> <br>$13.88</p>",
							"icon": "marker"
						},
						"geometry": {
							"type": "Point",
							"coordinates": [-73.991084, 40.736239]
						}

					}, {
						"type": "Feature",
						"properties": {
							"description": "<strong>Joe's Coffee</strong> <br>$4.50</p>",
							"icon": "marker"
						},
						"geometry": {
							"type": "Point",
							"coordinates": [-73.993309, 40.735088]
						}

					}, {
						"type": "Feature",
						"properties": {
							"description": "<strong> O Cafe</strong> <br>$4.00</p>",
							"icon": "marker"
						},
						"geometry": {
							"type": "Point",
							"coordinates": [-73.997789, 40.735884]
						}

					}, {
						"type": "Feature",
						"properties": {
							"description": "<strong> Merci Market</strong> <br>$2.65</p>",
							"icon": "marker"
						},
						"geometry": {
							"type": "Point",
							"coordinates": [-73.993967, 40.735031]
						}

					}, {
						"type": "Feature",
						"properties": {
							"description": "<strong> Panera</strong> <br>$8.26</p>",
							"icon": "marker"
						},
						"geometry": {
							"type": "Point",
							"coordinates": [-73.989788, 40.734864]
						}

					}, {
						"type": "Feature",
						"properties": {
							"description": "<strong> Boba Guys</strong> <br>$5.44</p>",
							"icon": "marker",

						},
						"geometry": {
							"type": "Point",
							"coordinates": [-73.994156, 40.730137]
						}

					}, {
						"type": "Feature",
						"properties": {
							"description": "<strong> Ennju</strong> <br>$14.15</p>",
							"icon": "marker"
						},
						"geometry": {
							"type": "Point",
							"coordinates": [-73.991175, 40.737355]
						}

					}, {
						"type": "Feature",
						"properties": {
							"description": "<strong> Pret A Manger</strong> <br>$3.26</p>",
							"icon": "marker"
						},
						"geometry": {
							"type": "Point",
							"coordinates": [-73.991257, 40.733409]
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
							"description": "<strong> Murray's Bagels</strong> <br>$4.63</p>",
							"icon": "marker"
						},
						"geometry": {
							"type": "Point",
							"coordinates": [-73.998585, 40.744781]
						}

					}, {
						"type": "Feature",
						"properties": {
							"description": "<strong> Space194</strong> <br>$7.07</p>",
							"icon": "marker"
						},
						"geometry": {
							"type": "Point",
							"coordinates": [-73.983422, 40.729747]
						}


					}, {
						"type": "Feature",
						"properties": {
							"description": "<strong> S'MAC East Village</strong> <br>$8.98</p>",
							"icon": "marker"
						},
						"geometry": {
							"type": "Point",
							"coordinates": [-73.983649, 40.730168]
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
							"description": "<strong> Tortaria </strong> <br>$23.50</p>",
							"icon": "marker"
						},
						"geometry": {
							"type": "Point",
							"coordinates": [-73.823161, 42.677058]
						}

					}, {
						"type": "Feature",
						"properties": {
							"description": "<strong> Pressed Juicery </strong> <br>$6.00</p>",
							"icon": "marker"
						},
						"geometry": {
							"type": "Point",
							"coordinates": [-73.992508, 40.735794]
						}

					}, {
						"type": "Feature",
						"properties": {
							"description": "<strong> Outro </strong> <br>$5.44</p>",
							"icon": "marker"
						},
						"geometry": {
							"type": "Point",
							"coordinates": [-73.990896, 40.732740]
						}

					}, {
						"type": "Feature",
						"properties": {
							"description": "<strong> Tim Ho Wan Tim </strong> <br>$21.83</p>",
							"icon": "marker"
						},
						"geometry": {
							"type": "Point",
							"coordinates": [-73.989907, 40.731494]
						}

					}, {
						"type": "Feature",
						"properties": {
							"description": "<strong> Tim Ho Wan Tim </strong> <br>$21.83</p>",
							"icon": "marker"
						},
						"geometry": {
							"type": "Point",
							"coordinates": [-73.989907, 40.731494]
						}


					}, {
						"type": "Feature",
						"properties": {
							"description": "<strong> Cafe Mocha </strong> <br>$23.00</p>",
							"icon": "marker"
						},
						"geometry": {
							"type": "Point",
							"coordinates": [-73.987849, 40.727739]
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
		

