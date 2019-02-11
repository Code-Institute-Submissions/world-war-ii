new Chart(document.getElementById("aircrafts-production"), {
    type: 'line',
    data: {
        labels: [1939,1940,1941,1942,1943,1944,1945],
        datasets: [{
            data: [2141,6068,18466,46907,84853,96270,45852],
            label: "U.S.",
            borderColor: "#3826f6",
            fill: false,
            pointRadius: "5",
            pointBackgroundColor: "#3826f6",
        }, {
            data:[8295,10862,12401,15409,24807,40593,7540],
            label: "Germany",
            borderColor: "#000000",
            fill: false,
        },{
            data: [10382,10565,15737,25436,34900,40300,20900],
            label: "USSR",
            borderColor: "#ff0000",
            fill: false,
        }, {
            data: [7940,15049,20094,23672,26263,26461,12070],
            label: "UK",
            borderColor: "#065535",
            fill: false,
        }, {
            data: [4467,4768,5088,8861,16693,28180,8263],
            label: "Japan",
            borderColor: "#EFB509",
            fill: false,
        }
      ]
    },
    options: {
        title: {
            display: true,
            text: "Click the box to enable or disable country"
        }
    }
});

/*

new Chart(document.getElementById("#naval-forces-chart"), {
    type: 'bar',
    data: {
    labels: ['British Empire', 'USA and territories', 'USSR', 'Germany & territories', 'Italian Empire', 'Japanese Empire', 'Romania'],
			datasets: [{
				label: 'Carriers',
				backgroundColor: '#D6E9C6',
				data: [6]
			}]
    },
    options: {scales: {
    xAxes: [{ stacked: true }],
    yAxes: [{ stacked: true }]
  }}
})



new navalchart(document.getElementById("naval-forces-chart"), {
    type: 'line',
    data: {
        labels: [1939,1940,1941,1942,1943,1944,1945],
        datasets: [{
            data: [2141,6068,18466,46907,84853,96270,45852],
            label: "U.S.",
            borderColor: "#3826f6",
            fill: false,
            pointRadius: "5",
            pointBackgroundColor: "#3826f6",
        }, {
            data:[8295,10862,12401,15409,24807,40593,7540],
            label: "Germany",
            borderColor: "#000000",
            fill: false,
        },{
            data: [10382,10565,15737,25436,34900,40300,20900],
            label: "USSR",
            borderColor: "#ff0000",
            fill: false,
        }, {
            data: [7940,15049,20094,23672,26263,26461,12070],
            label: "UK",
            borderColor: "#065535",
            fill: false,
        }, {
            data: [4467,4768,5088,8861,16693,28180,8263],
            label: "Japan",
            borderColor: "#EFB509",
            fill: false,
        }
      ]
    },
    options: {
        title: {
            display: true,
            text: "Production of aircrafts in WW II per country."
        }
    }
});

*/