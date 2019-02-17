// deaths.json to var

var deathsJson = {
  "deaths": [{
      "Country": "Belgium",
      "TotalPopulation": 8387000,
      "MilitaryDeaths": 12000,
      "CivilianDeathsDueMilitaryActivity": 76000,
      "CivilianDeathsDueFamineDisease": 0,
      "TotalDeaths": 88000,
      "MilitaryWounded": 55513,
      "Partnership": "Alliance"
    },
    {
      "Country": "Canada",
      "TotalPopulation": 11267000,
      "MilitaryDeaths": 42000,
      "CivilianDeathsDueMilitaryActivity": 1600,
      "CivilianDeathsDueFamineDisease": 0,
      "TotalDeaths": 43600,
      "MilitaryWounded": 53174,
      "Partnership": "Alliance"
    },
    {
      "Country": "Czechoslovakia",
      "TotalPopulation": 14612000,
      "MilitaryDeaths": 46000,
      "CivilianDeathsDueMilitaryActivity": 320000,
      "CivilianDeathsDueFamineDisease": 0,
      "TotalDeaths": 355000,
      "MilitaryWounded": 8017,
      "Partnership": "Axis"
    },
    {
      "Country": "France",
      "TotalPopulation": 41680000,
      "MilitaryDeaths": 210000,
      "CivilianDeathsDueMilitaryActivity": 390000,
      "CivilianDeathsDueFamineDisease": 0,
      "TotalDeaths": 600000,
      "MilitaryWounded": 390000,
      "Partnership": "Alliance"
    },
    {
      "Country": "Germany",
      "TotalPopulation": 69300000,
      "MilitaryDeaths": 5318000,
      "CivilianDeathsDueMilitaryActivity": 3000000,
      "CivilianDeathsDueFamineDisease": 0,
      "TotalDeaths": 7400000,
      "MilitaryWounded": 7300000,
      "Partnership": "Axis"
    },
    {
      "Country": "Italy",
      "TotalPopulation": 44394000,
      "MilitaryDeaths": 341000,
      "CivilianDeathsDueMilitaryActivity": 153200,
      "CivilianDeathsDueFamineDisease": 0,
      "TotalDeaths": 514000,
      "MilitaryWounded": 320000,
      "Partnership": "Axis"
    },
    {
      "Country": "Japan",
      "TotalPopulation": 71380000,
      "MilitaryDeaths": 2300000,
      "CivilianDeathsDueMilitaryActivity": 800000,
      "CivilianDeathsDueFamineDisease": 0,
      "TotalDeaths": 3100000,
      "MilitaryWounded": 326000,
      "Partnership": "Axis"
    },
    {
      "Country": "Netherland",
      "TotalPopulation": 8729000,
      "MilitaryDeaths": 6700,
      "CivilianDeathsDueMilitaryActivity": 187300,
      "CivilianDeathsDueFamineDisease": 16000,
      "TotalDeaths": 210000,
      "MilitaryWounded": 2860,
      "Partnership": "Alliance"
    },
    {
      "Country": "Poland",
      "TotalPopulation": 34849000,
      "MilitaryDeaths": 240000,
      "CivilianDeathsDueMilitaryActivity": 5820000,
      "CivilianDeathsDueFamineDisease": 0,
      "TotalDeaths": 6000000,
      "MilitaryWounded": 766606,
      "Partnership": "Alliance"
    },
    {
      "Country": "Soviet Union",
      "TotalPopulation": 188793000,
      "MilitaryDeaths": 11400000,
      "CivilianDeathsDueMilitaryActivity": 10000000,
      "CivilianDeathsDueFamineDisease": 9000000,
      "TotalDeaths": 27000000,
      "MilitaryWounded": 14685593,
      "Partnership": "Alliance"
    },
    {
      "Country": "United Kingdom",
      "TotalPopulation": 47760000,
      "MilitaryDeaths": 383700,
      "CivilianDeathsDueMilitaryActivity": 67200,
      "CivilianDeathsDueFamineDisease": 0,
      "TotalDeaths": 450900,
      "MilitaryWounded": 376239,
      "Partnership": "Alliance"
    },
    {
      "Country": "United States",
      "TotalPopulation": 131028000,
      "MilitaryDeaths": 407300,
      "CivilianDeathsDueMilitaryActivity": 12100,
      "CivilianDeathsDueFamineDisease": 0,
      "TotalDeaths": 419400,
      "MilitaryWounded": 671801,
      "Partnership": "Alliance"
    }
  ]
};

// take allies countries from json

var allies = deathsJson.deaths.map(function(d) {
  if (d.Partnership === "Alliance") {
    return d.Country + " - " + d.Partnership + "<br>";
  }
});

// take axis countries from json

var axis = deathsJson.deaths.map(function(d) {
  if (d.Partnership === "Axis") {
    return d.Country + " - " + d.Partnership + "<br>";
  }
});

// put var in to dom and get rid of commas

document.getElementById("allies").innerHTML = allies.join("");
document.getElementById("axis").innerHTML = axis.join("");

//target with jQuery css to style paragraphs and toggle them

$("#allies").css({
  "display": "none",
  "margin-left": "40px",
  "font-family": "'Staatliches', sans-serif",
  "text-tranform": "uppercase",
  "color": "c10000",
  "font-size": "20px"
});

$("#axis").css({
  "display": "none",
  "margin-left": "40px",
  "font-family": "'Staatliches', sans-serif",
  "text-tranform": "uppercase",
  "color": "c10000",
  "font-size": "20px"
});


$("#axis-button").click(function() {
  $("#axis").toggle("slow");
});

$("#allies-button").click(function() {
  $("#allies").toggle("slow");
});
