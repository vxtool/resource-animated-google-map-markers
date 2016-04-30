$(function(){

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
        "Company": "Boston Scientific",
        "StoreID": null,
        "Site_Store_Facility Name": "Boston Scientific - Quincy Location",
        "Type of Facility": null,
        "Fac_simple": null,
        "Street Address": "500 Commander Shea Boulevard",
        "City": "Quincy",
        "State": "MA",
        "Zip": "2171",
        "OnlineDate": null,
        "Capacity": "1200",
        "System Mounting": null,
        "NEM": null,
        "Solar Installer Company": null,
        "Solar System Owner": null,
        "Facility Owner": null,
        "Facility Tenant": null,
        "Notes": null,
        "New": 0,
        "LocationGeo": "500 Commander Shea Boulevard Quincy, MA",
        "Latitude": -22.906847,
        "Longitude": -43.172896,
        "Confidence": "High",
        "AddyCheck": "500 Commander Shea Boulevard Quincy, MA"
      }, "geometry": { "type": "Point", "coordinates": [ -43.172896, -22.906847 ] } }
    ];

    map = new google.maps.Map(document.getElementById('js-map'), mapOptions);

    var myIcon ='assets/css/img/icon.png';

    //preparing the image so it can be used as a marker
    //https://developers.google.com/maps/documentation/javascript/reference#Icon
    //includes hacky fix "size" to allow for wobble
    var catIcon = {
      url: myIcon,
      size: new google.maps.Size(100, 60),
      scaledSize: new google.maps.Size(70, 60),
      origin: new google.maps.Point(-15,0)
    }
    /*
    //If you want to do this without wobble animation no need for hacky fix
    var catIcon = {
      url: myIcon,
      size: new google.maps.Size(70, 60),
      scaledSize: new google.maps.Size(70, 60),
      origin: new google.maps.Point(0,0)
    }*/

    for (var i=0, length = features.length; i < length; i++){
      var eachData = features[i].properties
      var latLng = new google.maps.LatLng(eachData.Latitude, eachData.Longitude);
      var marker = new google.maps.Marker({
          position:latLng,
          map: map,
          // set the icon as catIcon declared above
          icon: catIcon,
          // must use optimized false for CSS
          optimized: false,
          title: markerArr.length.toString()
      });
      markerArr.push(marker);
      //add a click handler that does nothing at the moment
      google.maps.event.addListener(marker, 'click', function() {
        var thisTitle= Number(this.title);
        //$('#markerLayer img').eq(thisTitle)
      })
    }

    // Overlay view allows you to organize your markers in the DOM
    // https://developers.google.com/maps/documentation/javascript/reference#OverlayView
    var myoverlay = new google.maps.OverlayView();
    myoverlay.draw = function () {
      // add an id to the layer that includes all the markers so you can use it in CSS
      this.getPanes().markerLayer.id='markerLayer';
    };
    myoverlay.setMap(map);
  }

  initialize();
});
