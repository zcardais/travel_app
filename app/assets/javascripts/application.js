// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function () {

	function initialize() {
		var myLatlng = new google.maps.LatLng(latitude, longitude);

		var mapOptions = {
			center: myLatlng,
			zoom: 8,
			scrollwheel: false
		};

		var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

		var image = 'http://cdnpix.com/show/imgs/ad495c3de9ec8afdf8cc8b8c704171e3.jpg';

		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			animation: google.maps.Animation.DROP,
			icon: image;
		});

		var contentString = '<h2>'+ address + '</h2>' + '<p>'+ desription + '</p>';

		var infowindow = new google.maps.InfoWindow({
			content: contentString
		});

		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);

		});

	}

	google.maps.event.addDomListener(window, 'load', initialize);
});