function initMap(){ 
    const mlh = {lat: 40.74027254470804,lng: -73.98371972435318};
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: mlh,
      });
      // The marker, positioned at Uluru
      const marker = new google.maps.Marker({
        position: mlh,
        map: map,
      })
}




/* 
Major League Hacking PBC 
P.O. BOX #438 
149 EAST 23RD STREET
NEW YORK, NY 10159 
UNITED STATES

40.74027254470804, -73.98371972435318


*/