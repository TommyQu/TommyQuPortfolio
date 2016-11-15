$(document).ready(function() {
    $('.fancybox').fancybox({
        padding : 0,
        openEffect  : 'elastic',
        closeBtn: true,
        autoScale: true,
        width: 800,
        height: 1500
    });

	google.charts.load('current', {'packages':['corechart']});
	google.charts.setOnLoadCallback(drawChart);
	function drawChart() {
		//Draw Java Donut
		var data = google.visualization.arrayToDataTable([
		  ['Effort', 'Amount given'],
		  ['Java', 90],
		  ['', 10]
		]);

		var options = {
			backgroundColor: 'transparent',
			pieHole: 0.5,
			slices: {
		  		1: {
					color: 'transparent'
				}
			},
			legend: 'none'
		};

		var chart = new google.visualization.PieChart(document.getElementById('java-donut'));
		chart.draw(data, options);

		//Draw Android Donut
		var androidData = google.visualization.arrayToDataTable([
		  ['Effort', 'Amount given'],
		  ['Android', 85],
		  ['', 15]
		]);

		var androidOptions = {
		  backgroundColor: 'transparent',
		  pieHole: 0.5,
		  slices: {
			0: {
				color: 'red'
			},
		  	1: {
		  		color: 'transparent'
		  	}
		  },
		  legend: 'none'
		};

		var androidChart = new google.visualization.PieChart(document.getElementById('android-donut'));
		androidChart.draw(androidData, androidOptions);

		//Draw Cordova Donut
		var cordovaData = google.visualization.arrayToDataTable([
		  ['Effort', 'Amount given'],
		  ['Cordova', 85],
		  ['', 15]
		]);

		var cordovaOptions = {
		  backgroundColor: 'transparent',
		  pieHole: 0.5,
		  slices: {
			0: {
				color: 'orange'
			},
		  	1: {
		  		color: 'transparent'
		  	}
		  },
		  legend: 'none'
		};

		var cordovaChart = new google.visualization.PieChart(document.getElementById('cordova-donut'));
		cordovaChart.draw(cordovaData, cordovaOptions);
	}


	$(".fancybox-thumb").fancybox({
		prevEffect	: 'elastic',
		nextEffect	: 'elastic',
		helpers	: {
			title	: {
				type: 'outside'
			},
			thumbs	: {
				width	: 50,
				height	: 50
			}
		}
	});
});