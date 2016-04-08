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
		var data = google.visualization.arrayToDataTable([
		  ['Effort', 'Amount given'],
		  ['Java', 90],
		  ['', 10]
		]);

		var options = {
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

		var androidData = google.visualization.arrayToDataTable([
		  ['Effort', 'Amount given'],
		  ['Android', 85],
		  ['', 15]
		]);

		var androidOptions = {
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
	}

});