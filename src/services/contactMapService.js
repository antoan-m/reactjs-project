export function contactMap() {
    var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
        mapboxgl.accessToken = 'pk.eyJ1IjoicGFwaW5obyIsImEiOiJja210Zms2eWEwY2V0Mm9wY256MTRkNnhoIn0.EPJd8UcEuknApOGzpcMD-w';
        var map = new mapboxgl.Map({
        container: 'contact-map-placeholder',
        style: 'mapbox://styles/papinho/ckmthaduf40f018o5j3eqwwvp',
        center: [23.336158, 42.695392],
        zoom: 17
});

map.addControl(new mapboxgl.NavigationControl());

map.on('load', function(e) {
    var features = map.queryRenderedFeatures(e.point, {
      layers: ['ob']
    });
  
    if (!features.length) {
      return;
    }
  
    var feature = features[0];
  
    var popup = new mapboxgl.Popup({ offset: [0, -15] })
      .setLngLat(feature.geometry.coordinates)
      .setHTML('<h3>Book Store React Project</h3><p>Local Store</p><p>Working Time: 09:00 - 18:00</p>')
    //   .setHTML('<h3>' + feature.properties.title + '</h3><p>' + feature.properties.description + '</p>')
      .addTo(map);
  });
}