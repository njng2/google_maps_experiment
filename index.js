function initMap(){ 

  //loading maps with MLH head coordinates
    const mlh = {lat: 40.74027254470804,lng: -73.98371972435318};
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: { lat:40.7359, lng: 73.9911}
    });
      //The marker, positioned at MLH headquarters heh
      const marker = new google.maps.Marker({
        position: mlh,
        map: map,
      });
      
      //locations for marker clusteirng
      const locations = [
        { lat: 40.7031, lng: -74.0160 },//battery park
        { lat: 40.7812, lng: -73.9665 },//central park 
        { lat: 40.7536, lng: -73.9832 },//bryant park 
        { lat: 40.6602, lng: -73.9690 },//prospect park
        { lat: 40.7605, lng: -73.9510 },//roosevelt island
        { lat: 40.6995, lng: -74.0396 },//ellis island
        { lat: 40.7505, lng: -73.9934 },//madison square garden
        { lat: 40.7426, lng: -73.9878 },//madison square park 
      ];



      //creating custom markers now
      const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const markers = locations.map((location, i) =>{
        return new google.maps.Marker({
          position:location, 
          label: labels [i% labels.length],
        });
      });

      // Add a marker clusterer to manage the markers.
    new MarkerClusterer(map, markers, {
      imagePath:"m"
    });
     
  


     
}




/* 
Major League Hacking PBC 
P.O. BOX #438 
149 EAST 23RD STREET
NEW YORK, NY 10159 
UNITED STATES

40.74027254470804, -73.98371972435318


*/