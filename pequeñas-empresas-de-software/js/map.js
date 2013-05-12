var map_companies;
var markers = [];
var aCorunna = new google.maps.LatLng(43.356717,-8.40615);
var MAPTYPE_ID = 'companies';

function showCompanies(
	companies
) {
	var pinLocation = new google.maps.Point(7, 55);
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
				new google.maps.Size(50, 57),
				new google.maps.Point(0,0),
				pinLocation
			),
			title: company.name
		});
		markers[i] = marker;
		google.maps.event.addListener(
			marker,
			'click',
			clickOnMarker(company)
		);
	}
}

function clickOnMarker(
        marker
) {
        return function () {
		showCompany(marker);
        };
}

function showCompany(
	company
) {
	$('#companyCard').fadeOut({
		complete: function() {
			$('#companyCard .name').html(company.name);
			$('#companyCard .employees').html(company.employees);
			$('#companyCard .twitter').html(company.twitter);
			$('#companyCard .twitter').attr('href', 'https://twitter.com/' + company.twitter);
			$('#companyCard .web').html(company.web);
			$('#companyCard .web').attr('href', company.web);
console.log(company.technologies);
			var tech = "";
			if (company.technologies != undefined) {
				company.technologies.forEach(function(technology) {
console.log(technology);
					tech += "<li>" + technology + "</li>";
				});
			}
			$('#companyCard .technologies').html(tech);
			$('#companyCard').fadeIn();
		}
	});
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
		zoom: 13,
		center: aCorunna,
		mapTypeControlOptions: {
			mapTypeIds: []
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

