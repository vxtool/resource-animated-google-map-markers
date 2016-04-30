$(document).ready(function(){

  var map;
  var markerArr=[];

  function initialize() {
    var mapOptions = {
      zoom: 9,
      mapTypeControl: false,
      center: new google.maps.LatLng(42.36, -71.06)
    };
    map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // image from external URL
    var myIcon ='https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/cheshire1-icon.png';

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

    //gets GeoJSON from external file
    $.getJSON( "http://codepen.io/kevinkononenko/pen/dMKzgG.js", function(data) {
        var length= data.features.length
        for (var i=0; i < length; i++){
          var eachData = data.features[i].properties
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
      });

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


  // use jQuery to change the markers animation based on toggle button
  $('.btn').click(function(){
    var type = $(this).data('anim');
    $('#markerLayer img').css('animation', type+ ' 1s infinite alternate');
    $('#markerLayer img').css('-webkit-animation', type+ ' 1s infinite alternate')
  })

});
