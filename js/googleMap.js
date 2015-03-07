/** With help from http://www.w3schools.com/googleapi/tryit.asp?filename=tryhtml_map_overlays_marker **/
var myCenter=new google.maps.LatLng(40.72362,-73.99586);

function initialize()
{
var mapProp = {
  center:myCenter,
  zoom:18,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker=new google.maps.Marker({
  position:myCenter,
  });

marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);