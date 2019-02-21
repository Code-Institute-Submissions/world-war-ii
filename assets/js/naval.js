//copy json file to variable

var naval = {
    "navalforces": [{
            "Power": "British Empire",
            "Coalition": "Allies",
            "Carriers": 65,
            "Battleships": 20,
            "Cruisers": 101,
            "Destroyers": 461,
            "Frigates": 209,
            "Corvettes": 387,
            "Sloops": 33,
            "Patrol": 4209,
            "Submarines": 238,
            "Mining": 1244,
            "Landingcrafts": 9538,
            "Personnel": 1227415
        },
        {
            "Power": "USA and territories",
            "Coalition": "Allies",
            "Carriers": 124,
            "Battleships": 10,
            "Cruisers": 48,
            "Destroyers": 349,
            "Frigates": 440,
            "Corvettes": 0,
            "Sloops": 0,
            "Patrol": 0,
            "Submarines": 245,
            "Mining": 0,
            "Landingcrafts": 35000,
            "Personnel": 0
        },
        {
            "Power": "USSR",
            "Coalition": "Allies",
            "Carriers": "",
            "Battleships": 2,
            "Cruisers": 2,
            "Destroyers": 25,
            "Frigates": 0,
            "Corvettes": 0,
            "Sloops": 0,
            "Patrol": 0,
            "Submarines": 52,
            "Mining": 0,
            "Landingcrafts": 0,
            "Personnel": 0
        },
        {
            "Power": "Germany & territories",
            "Coalition": "Axis",
            "Carriers": 1,
            "Battleships": 2,
            "Cruisers": "",
            "Destroyers": 17,
            "Frigates": 0,
            "Corvettes": 0,
            "Sloops": 0,
            "Patrol": 0,
            "Submarines": 1152,
            "Mining": "",
            "Landingcrafts": 540,
            "Personnel": 1500000
        },
        {
            "Power": "Italian Empire",
            "Coalition": "Axis",
            "Carriers": 1,
            "Battleships": 3,
            "Cruisers": 6,
            "Destroyers": 6,
            "Frigates": 0,
            "Corvettes": 0,
            "Sloops": 0,
            "Patrol": 0,
            "Submarines": 63,
            "Mining": 0,
            "Landingcrafts": 0,
            "Personnel": 0
        },
        {
            "Power": "Japanese Empire",
            "Coalition": "Axis",
            "Carriers": 18,
            "Battleships": 2,
            "Cruisers": 9,
            "Destroyers": 63,
            "Frigates": 0,
            "Corvettes": 0,
            "Sloops": 0,
            "Patrol": 0,
            "Submarines": 199,
            "Mining": "",
            "Landingcrafts": 0,
            "Personnel": 0
        },
        {
            "Power": "Romania",
            "Coalition": "Axis",
            "Carriers": 0,
            "Battleships": 0,
            "Cruisers": 0,
            "Destroyers": 0,
            "Frigates": 0,
            "Corvettes": 0,
            "Sloops": 0,
            "Patrol": 8,
            "Submarines": 2,
            "Mining": 5,
            "Landingcrafts": 0,
            "Personnel": 0
        }
    ]
};

// varables that fetch data for each naval unit

var power = naval.navalforces.map(function(d) {
    return d.Power;
});

var carriers = naval.navalforces.map(function(d) {
    return d.Carriers;
});

var battleships = naval.navalforces.map(function(d) {
    return d.Battleships;
});

var cruiser = naval.navalforces.map(function(d) {
    return d.Cruisers;
});

var destroyers = naval.navalforces.map(function(d) {
    return d.Destroyers;
});

var frigates = naval.navalforces.map(function(d) {
    return d.Frigates;
});


var corvettes = naval.navalforces.map(function(d) {
    return d.Corvettes;
});

var sloops = naval.navalforces.map(function(d) {
    return d.Sloops;
});

var patrol = naval.navalforces.map(function(d) {
    return d.Patrol;
});

var submarines = naval.navalforces.map(function(d) {
    return d.Submarines;
});

var mining = naval.navalforces.map(function(d) {
    return d.Mining;
});

var landingCrafts = naval.navalforces.map(function(d) {
    return d.Landingcrafts;
});


// horizontal bar chart created with charts.js

new Chart(document.getElementById("naval-forces-chart"), {
    type: 'horizontalBar',
    data: {
        labels: power,
        datasets: [{
                label: 'Carriers',
                backgroundColor: 'rgba(234, 189, 93, 0.6)',
                borderColor: 'rgba(234, 189, 93, 1)',
                data: carriers
            }, {
                label: 'Battleships',
                backgroundColor: 'rgba(203, 91, 90, 0.6)',
                borderColor: 'rgba(203, 91, 90, 1)',
                data: battleships
            }, {
                label: 'Cruisers',
                backgroundColor: 'rgba(172, 85, 122, 0.6)',
                borderColor: 'rgba(172, 85, 122, 1)',
                data: cruiser
            }, {
                label: 'Destroyers',
                backgroundColor: 'rgba(141, 76, 125, 0.6)',
                borderColor: 'rgba(141, 76, 125, 1)',
                data: destroyers
            }, {
                label: 'Frigates',
                backgroundColor: 'rgba(107, 64, 110, 0.6)',
                borderColor: 'rgba(107, 64, 110, 1)',
                data: frigates
            }, {
                label: 'Corvettes',
                backgroundColor: 'rgba(64, 50, 79, 0.6)',
                borderColor: 'rgba(64, 50, 79, 1)',
                data: corvettes
            }, {
                label: 'Sloops',
                backgroundColor: 'rgba(159, 93, 234, 0.6)',
                borderColor: 'rgba(159, 93, 234, 1)',
                data: sloops
            }, {
                label: 'Submarines',
                backgroundColor: 'rgba(172, 85, 98, 0.6)',
                borderColor: 'rgba(172, 85, 98, 1)',
                data: submarines
            }
        ]
    },

    // options with description and bar width and spaces between categories(countries)

    options: {
        title: {
            display: true,
            text: 'Click the box to enable or disable naval unit'
        },
        scales: {
            yAxes: [{
                barPercentage: 1,
                categoryPercentage: 0.9
            }],
        },
        legend: {
            position: "right"
        }
    }
});
