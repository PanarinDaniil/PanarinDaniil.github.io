google.maps.event.addDomListener(window, 'load', init);
var map;
function init() {
  var mapOptions = {
    center: new google.maps.LatLng(50.00468,36.252039),
    zoom: 17,
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.DEFAULT,
    },
    disableDoubleClickZoom: true,
    mapTypeControl: false,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
    },
    scaleControl: false,
    scrollwheel: false,
    panControl: false,
    streetViewControl: false,
    draggable : true,
    overviewMapControl: false,
    overviewMapControlOptions: {
      opened: false,
    },
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  }
  var mapElement = document.getElementById('panarinaelita');
  var map = new google.maps.Map(mapElement, mapOptions);
  var locations = [
    ['Aelita-tour', 'Наш профиль - массовый туризм. Профессионально работая и хорошо разбираясь в современной ситуации на туристическом рынке. Мы выбираем надежные авиакомпании и ведущие цепочки гостиниц и способны предложить широкие возможности для отдыха туристов!', '(050) 141-11-87', 'aelita-tour2008@mail.ru', 'http://www.aelita-tour.com.ua/', 50.004376,  36.253544, 'http://panarin.zz.vc/aelitta/images/marker.png']
  ];
  for (i = 0; i < locations.length; i++) {
    if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
    if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
    if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
    if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
    if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
    marker = new google.maps.Marker({
      icon: markericon,
      position: new google.maps.LatLng(locations[i][5], locations[i][6]),
      map: map,
      title: locations[i][0],
      desc: description,
      tel: telephone,
      email: email,
      web: web
    });
    if (web.substring(0, 7) != "http://") {
      link = "http://" + web;
    } else {
      link = web;
    }
    bindInfoWindow(marker, map, locations[i][0], description, telephone, email, web, link);
  }
  function bindInfoWindow(marker, map, title, desc, telephone, email, web, link) {
    var infoWindowVisible = (function () {
      var currentlyVisible = false;
      return function (visible) {
        if (visible !== undefined) {
          currentlyVisible = visible;
        }
        return currentlyVisible;
      };
    }());
    iw = new google.maps.InfoWindow();
    var html= "<div style='color:#000;background-color:#fff;padding:5px;width:100%;overflow:hidden;'><img src='images/map-logo.png' alt='Aelta - tour' class='map-image'/><div class='right-map'><h4>"+title+"</h4><p>"+desc+"</p><p>"+telephone+"</p><a href='mailto:"+email+"' >"+email+"</a><a href='"+link+"'' >"+web+"</a></div></div>";
    iw = new google.maps.InfoWindow({content:html});
    iw.open(map,marker);
    infoWindowVisible(true);
    google.maps.event.addListener(marker, 'click', function() {
      if (infoWindowVisible()) {
        iw.close();
        infoWindowVisible(false);
      } else {
        var html= "<div style='color:#000;background-color:#fff;padding:5px;width:100%;overflow:hidden;'><img src='images/map-logo.png' alt='Aelta - tour' class='map-image'/><div class='right-map'><h4>"+title+"</h4><p>"+desc+"</p><p>"+telephone+"</p><a href='mailto:"+email+"' >"+email+"</a><a href='"+link+"'' >"+web+"</a></div></div>";
        iw = new google.maps.InfoWindow({content:html});
        iw.open(map,marker);
        infoWindowVisible(true);
      }
    });
    google.maps.event.addListener(iw, 'closeclick', function () {
      infoWindowVisible(false);
    });
  }
}