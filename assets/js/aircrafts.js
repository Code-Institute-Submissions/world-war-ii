Chart.defaults.global.responsive = true;

var aircraftData = {
    labels: [1939, 1940, 1941, 1942, 1943, 1944, 1945],
    datasets: [{
        data: [2141, 6068, 18466, 46907, 84853, 96270, 45852],
        label: "U.S.",
        borderColor: "#3826f6",
        fill: false,
    }, {
        data: [8295, 10862, 12401, 15409, 24807, 40593, 7540],
        label: "Germany",
        borderColor: "#000000",
        fill: false,
    }, {
        data: [10382, 10565, 15737, 25436, 34900, 40300, 20900],
        label: "USSR",
        borderColor: "#ff0000",
        fill: false,
    }, {
        data: [7940, 15049, 20094, 23672, 26263, 26461, 12070],
        label: "UK",
        borderColor: "#065535",
        fill: false,
    }, {
        data: [4467, 4768, 5088, 8861, 16693, 28180, 8263],
        label: "Japan",
        borderColor: "#EFB509",
        fill: false,
    }]
};

var aircraftOptions = {
    legend: {
        position: "top"
    },
    title: {
        display: true,
        text: "Click the box to enable or disable country"
    }
};


var aircraftProduction = new Chart(document.getElementById("aircrafts-production"), {
    type: 'line',
    data: aircraftData,
    options: aircraftOptions
});
