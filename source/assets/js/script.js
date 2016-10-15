(function(exports, d) {
  function domReady(fn, context) {

    function onReady(event) {
      d.removeEventListener("DOMContentLoaded", onReady);
      fn.call(context || exports, event);
    }

    function onReadyIe(event) {
      if (d.readyState === "complete") {
        d.detachEvent("onreadystatechange", onReadyIe);
        fn.call(context || exports, event);
      }
    }

    d.addEventListener && d.addEventListener("DOMContentLoaded", onReady) ||
    d.attachEvent      && d.attachEvent("onreadystatechange", onReadyIe);
  }

  exports.domReady = domReady;
})(window, document);

domReady(function(event) {
  var map;
  var markerArr = [];

  function initialize() {
    var mapOptions = {
      zoom: 9,
      mapTypeControl: false,
      center: new google.maps.LatLng(-22.906847, -43.172896)
    };

    var features = [
      { "type": "Feature", "properties": {
        "Company": null,
        "StoreID": null,
        "Site_Store_Facility Name": null,
        "Type of Facility": null,
        "Fac_simple": null,
        "Street Address": null,
        "City": "Rio de Janeiro",
        "State": "RJ",
        "Zip": null,
        "OnlineDate": null,
        "Capacity": null,
        "System Mounting": null,
        "NEM": null,
        "Solar Installer Company": null,
        "Solar System Owner": null,
        "Facility Owner": null,
        "Facility Tenant": null,
        "Notes": null,
        "New": 0,
        "LocationGeo": null,
        "Latitude": -22.906847,
        "Longitude": -43.172896,
        "Confidence": "High",
        "AddyCheck": null
      }, "geometry": { "type": "Point", "coordinates": [ -43.172896, -22.906847 ] } }
    ];

    map = new google.maps.Map(document.querySelector('[data-js="map"]'), mapOptions);

    var myIcon ='assets/css/img/icon.png';
    //https://developers.google.com/maps/documentation/javascript/reference#Icon
    var catIcon = {
      url: myIcon,
      size: new google.maps.Size(100, 60),
      scaledSize: new google.maps.Size(70, 60),
      origin: new google.maps.Point(-15,0)
    };

    for (var i=0, length = features.length; i < length; i++){
      var eachData = features[i].properties
      var latLng = new google.maps.LatLng(eachData.Latitude, eachData.Longitude);
      var marker = new google.maps.Marker({
          position:latLng,
          map: map,
          icon: catIcon,
          optimized: false,
          title: markerArr.length.toString()
      });
      markerArr.push(marker);
      google.maps.event.addListener(marker, 'click', function() {
        var thisTitle= Number(this.title);
      })
    }
    // https://developers.google.com/maps/documentation/javascript/reference#OverlayView
    var myoverlay = new google.maps.OverlayView();
    myoverlay.draw = function () {
      this.getPanes().markerLayer.id = 'target';
    };
    myoverlay.setMap(map);
  }

  initialize();
});
