var map; //Map object
var markers = []; //Markers list
var markerCluster; //MarkerClusterer object
var opts; //MarkerClusterer options
var res; //Глобальный jSON - объект
var availableMarkers = []; //Текущий список маркеров
var mapType;
mapType = google.maps.MapTypeId.TERRAIN;
function findMyLocation(map, zoom) {
    if (!zoom)
        zoom = 10;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log(position.coords);
            var pos = new google.maps.LatLng(position.coords.latitude,
                    position.coords.longitude);
            map.setCenter(pos);
            marker = new google.maps.Marker({
                position: pos,
                map: map,
                title: "Текущее местоположение"
            });
            map.setZoom(zoom);
        }, function () {
            handleNoGeolocation(true);
        });
    } else {
        // Browser doesn't support Geolocation
        handleNoGeolocation();
    }
}

function codeAddress(map) {
    var geocoder;
    geocoder = new google.maps.Geocoder();
    var address = document.getElementById('address').value;
    geocoder.geocode({'address': address}, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            for (var i = 0; i < markers.length; i++) {
                markers[i].setMap(map);
            }
            map.setCenter(results[0].geometry.location);
            map.setZoom(11);
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

function calcDistance(lat1, lng1, lat2, lng2) {
    return 111.2 * Math.sqrt(Math.pow((lat1 - lat2), 2) + Math.pow((lng1 - lng2) * Math.cos(Math.PI * lat1 / 180), 2));
}

function findNearest(rad, zoom, end) {
    x = new Date().getTime();
    if (!rad)
        rad = 10; //Макс.удаленность точки
    if (!zoom)
        zoom = 12;
    if (!end)
        end = function () {
            return false;
        };
    var _pos = null;
    // $('#map').css('opacity', 0.5);
    $('#map').css('opacity', 1);
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = new google.maps.LatLng(position.coords.latitude,
                    position.coords.longitude);
            _pos = pos;
            var marker = new google.maps.Marker({
                map: map,
                position: pos,
                title: 'Ваше местоположение'
            });
            for (var i = 0; i < markers.length; i++) {
                markers[i].setMap(null);
            }
            markerCluster.clearMarkers();
            map.setCenter(pos);
            map.setZoom(zoom);
            var nearest = [];

//                nearest = calcNearest(5, _pos);
//                alert(nearest.length);
//                
//                nearest = [];
//                nearest = calcNearest(50, _pos);
//                alert(nearest.length);
//                
//                nearest = [];
//                nearest = calcNearest(100, _pos);
//                alert(nearest.length);
            nearest = calcNearest(rad, _pos);

            for (var i = 0; i < nearest.length; i++) {
                nearest[i].setMap(map);
            }

            markerCluster = new MarkerClusterer(map, nearest, opts);
            $('#map').css('opacity', 1);
        }, function () {

            handleNoGeolocation(true);
        });
    } else {
        // Browser doesn't support Geolocation
        handleNoGeolocation();
    }


}
function calcNearest(rad, position) {
    console.log(position);
    if (!rad)
        rad = 10;
    nearest = [];
    for (var i = 0; i < markers.length; i++) {
        if (calcDistance(markers[i].position.lat(), markers[i].position.lng(), position.lat(), position.lng()) <= rad) {
            nearest.push(markers[i]);
        }
    }
    return nearest;
}
function getNewPoints() {

    console.log(availableMarkers);
    $.ajax({
        type: 'post',
        url: '/index/map-markers',
        data: {list: availableMarkers},
        success: function (data) {
            list = $.parseJSON(data);
            if (list.length) {
                $.each(list, function (k, v) {
                    var pos = new google.maps.LatLng(v.lat, v.lng);
                    var content = v.description;
                    //console.log(v.lat, v.lng)
                    title = v.title;
                    var marker = new google.maps.Marker({
                        position: pos,
                        title: title,
                        icon: '../images/flag.png'
                    });
                    marker.setMap(map);
                    markers.push(marker);
                    availableMarkers.push(v.id);
                    markerCluster = new MarkerClusterer(map, markers, opts);
                })

            }
        }
    })
}

function initialize() {
    //console.log(mapType);

    opts = {styles: [
            {
                textColor: 'black',
                url: '../images/marker.png',
                height: 111,
                width: 60,
                size:[60,111],
                textSize:24
            
            },
            {
                textColor: 'black',
                url: '../images/marker.png',
                height: 111,
                width: 60,
                size:[60,111],
                textSize:24
            },
            {
                textColor: 'black',
                url: '../images/marker.png',                
                height: 111,
                width: 60,
                size:[60,111],
                textSize:24
            }

        ]};
    var mapOptions = {
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [{featureType: "poi.business", elementType: "labels", stylers: [{visibility: "off"}]}]
    };
    map = new google.maps.Map(document.getElementById('map'),
            mapOptions);




    var pos = new google.maps.LatLng(49.992010, 36.234873);
    map.setCenter(pos);
    infowindow = new google.maps.InfoWindow({
        content: 'foobarbax',
        maxWidth: 800,
        disableAutoPan: true
    });
    //findMyLocation(map);
    $.ajax({
        url: '/index/map',
        type: 'post',
        async: false,
        dataType: 'json',
        beforeSend:function(){
            // $('#map').css('opacity', 0.5);
            $('#map').css('opacity', 1);
        },
        success: function (result) {            
            res = result;
        }
    });

    $.each(res, function (k, v) {
        var pos = new google.maps.LatLng(v.lat, v.lng);
        //console.log(v.lat, v.lng)
        title = v.title;
        var marker = new google.maps.Marker({
            position: pos,
            title: title,
            icon: '../images/flag.png'
        });
        google.maps.event.addListener(marker, 'mouseover', function () {
            mcontent = '<b style="font-weight:900 !important;">'+v.title+'</b><br>'+v.description;
            infowindow.setContent(mcontent);
            infowindow.open(map, this);
        });
        google.maps.event.addListener(infowindow, 'closeclick', function () {
            google.maps.event.addListener(marker, 'mouseout', function () {
                infowindow.close();
            });
        });
        google.maps.event.addListener(marker, 'click', function () {
            google.maps.event.clearListeners(marker, 'mouseout');
            mcontent = '<b style="font-weight:900 !important;">'+v.title+'</b><br>'+v.description;
            infowindow.setContent(mcontent);
            infowindow.open(map, this);
        });

        google.maps.event.addListener(marker, 'mouseout', function () {
            infowindow.close();
        });

        markers.push(marker);
        availableMarkers.push(v.id);
    });
    markerCluster = new MarkerClusterer(map, markers, opts);
    getNewPoints();
    intr = window.setInterval(getNewPoints, 120000);
    $('#map').css('height', $(window).height());
    $('#map').css('opacity', 1);
}
google.maps.event.addDomListener(window, 'load', initialize);
$(function () {
    //getNewPoints();        

    $('#myPosition').click(function () {
        //console.log(map);
        findMyLocation(map, 14); //2 параметром передаем зум (необязательно, по умолчанию 12)
    });
    $('#searchAddress').click(function () {
        codeAddress(map);
        return false;
    });
    $('#findNearest').click(function () {
        findNearest(100); //Первый параметр - кол-во километров, второй - зум, по умолчанию 12
        return false;
    })
});