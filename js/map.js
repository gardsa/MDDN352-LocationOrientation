var center,
    map,
    userLocation;

function initMap() {
  center = new google.maps.LatLng(-40.9006, 174.8860);
  var mapOptions = {
    zoom: 5,
    center: center,
    scrollwheel: false,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM
    },
  }
  map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(locationFound);
  } else {
    alert('Geolocation is not supported by this browser.');
  }
}

function locationFound(position){
  userLocation = {lat: position.coords.latitude, lng: position.coords.longitude};
  addMarker(userLocation);
  getLocationInfo(userLocation);
  map.setCenter(userLocation);
  map.setZoom(10);
}

function addMarker(userLocation) {
  var marker = new google.maps.Marker({
    position: userLocation,
    map: map
  });
}

function getLocationInfo(userLocation) {
  var lat = document.getElementById('lat'),
      lng = document.getElementById('lng');

  lat.innerHTML = userLocation.lat;
  lng.innerHTML = userLocation.lng;
  findAddress(userLocation);
}

function findAddress(userLocation) {
  var geocoder = new google.maps.Geocoder;
  var addr =  document.getElementById('addr');

  geocoder.geocode({'location': userLocation}, function(results, status) {
    if (status === 'OK') {
      if (results[0]) {
        addr.innerHTML = results[0].formatted_address;
      }
      else {
        window.alert('No results found');
      }
    }
    else {
      window.alert('Geocoder failed due to: ' + status);
    }
  });
}

document.addEventListener('DOMContentLoaded', function(){
  getLocation();
});
