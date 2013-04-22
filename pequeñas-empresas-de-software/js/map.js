var map_companies;
var markers = [];
var aCorunna = new google.maps.LatLng(43.356717,-8.40615);
var MAPTYPE_ID = 'companies';

function showCompanies(
	companies
) {
	var pinLocation = new google.maps.Point(15, 110);
	var image = './img/pin.png';
	for (var i in markers) {
		marker = markers[i];
		marker.setMap(null);
	}
	markers = [];
	for (var i in companies) {
		company = companies[i];
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(company.lat, company.lng),
			map: map_companies,
			icon: new google.maps.MarkerImage(
				'./img/pin.png',
				new google.maps.Size(100, 113),
				new google.maps.Point(0,0),
				pinLocation
			),
			title: company.name
		});
		markers[i] = marker;
	}
}

function setUpMapCompanies(
	companies
) {
	var stylez = [
		{
			featureType: "water",
			elementType: "all",
			stylers: [
				{ hue: '#cdcdc1' },
				{ saturation: -76 },
				{ lightness: 8 },
				{ visibility: 'on' }
			]
		}
	];

	var mapOptions = {
		zoom: 12,
		center: aCorunna,
		mapTypeControlOptions: {
			mapTypeIds: [google.maps.MapTypeId.ROADMAP, MAPTYPE_ID]
		},
		mapTypeId: MAPTYPE_ID
	};

	map_companies = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

	var myLatLng = new google.maps.LatLng(43.367776,-8.406222);

	showCompanies(companies);
      
	var styledMapOptions = { name: "Company" };

	var jayzMapType = new google.maps.StyledMapType(stylez, styledMapOptions);
  
	map_companies.mapTypes.set(MAPTYPE_ID, jayzMapType);
}

