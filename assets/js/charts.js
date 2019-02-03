queue()
    .defer(d3.json, "assets/data/deaths.json")
    .await(deathsCharts);

// Pie charts with number of deaths and population in WW II

function deathsCharts(error, fallen) {
    var ndx = crossfilter(fallen);
    var country_dim = ndx.dimension(dc.pluck('Country'));
    var population_per_country = country_dim.group().reduceSum(dc.pluck('TotalPopulation'));


    dc.pieChart('#population')
        .height(600)
        .radius(250)
        .transitionDuration(1500)
        .dimension(country_dim)
        .group(population_per_country)
        .legend(dc.legend().x(10).y(20).itemHeight(15).gap(5));

    var country_dim = ndx.dimension(dc.pluck('Country'));
    var total_deaths_per_country = country_dim.group().reduceSum(dc.pluck('TotalDeaths'));
    dc.pieChart('#total-deaths')
        .height(600)
        .radius(250)
        .transitionDuration(1500)
        .dimension(country_dim)
        .group(total_deaths_per_country)
        .legend(dc.legend().x(10).y(20).itemHeight(15).gap(5));


    var country_dim = ndx.dimension(dc.pluck('Country'));
    var total_wounded_per_country = country_dim.group().reduceSum(dc.pluck('MilitaryWounded'));
    dc.pieChart('#total-wounded')
        .height(600)
        .radius(250)
        .transitionDuration(1500)
        .dimension(country_dim)
        .group(total_wounded_per_country)
        .legend(dc.legend().x(10).y(20).itemHeight(15).gap(5));


    sumAllPopulation = ndx.groupAll().reduceSum(function(d) {
        return d.TotalPopulation;
    });

    var sumPopulation = dc.numberDisplay('#sum-population');

    sumPopulation.group(sumAllPopulation)
        .formatNumber(d3.format(",.f"))
        .valueAccessor(function(d) { return d; });

    sumAllDeaths = ndx.groupAll().reduceSum(function(d) {
        return d.TotalDeaths;
    });

    var sumDeaths = dc.numberDisplay('#sum-deaths');

    sumDeaths.group(sumAllDeaths)
        .formatNumber(d3.format(",.f"))
        .valueAccessor(function(d) { return d; });

    sumAllWounded = ndx.groupAll().reduceSum(function(d) {
        return d.MilitaryWounded;
    });

    var sumWounded = dc.numberDisplay('#sum-wounded');

    sumWounded.group(sumAllWounded)
        .formatNumber(d3.format(",.f"))
        .valueAccessor(function(d) { return d; });


    dc.renderAll();

}


queue()
    .defer(d3.json, "assets/data/airforces.json")
    .await(airforcesCharts);


function airforcesCharts(error, airforce) {
    var ndx = crossfilter(airforce);
    var all = ndx.groupAll();
    var power_dim = ndx.dimension(dc.pluck('Power'));
    var total_per_power = power_dim.group().reduceSum(dc.pluck('Total'));

    var powerColors = d3.scale.ordinal()
        .domain(["Allies", "Axis"])
        .range(["blue", "red"]);

    // bar chart with numbers of aircrafts by country

    dc.barChart("#total-power-airforce")
        .width(800)
        .height(300)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .colors(powerColors)
        .colorAccessor(function(d) {
            if (d.Coalition === "Allies") {
                return "Allies";
            }
            else {
                return "Axis";
            }
        })
        .dimension(power_dim)
        .group(total_per_power)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Power")
        .yAxis().ticks(15);

    var power_dim = ndx.dimension(dc.pluck('Power'));
    var fighters_per_country = power_dim.group().reduceSum(dc.pluck('Fighters'));

    dc.pieChart("#fighters")
        .width(300)
        .height(300)
        .radius(120)
        .innerRadius(30)
        .dimension(power_dim)
        .group(fighters_per_country)
        .legend(dc.legend().x(1).y(1))
        
    var power_dim = ndx.dimension(dc.pluck('Power'));
    var attack_per_country = power_dim.group().reduceSum(dc.pluck('Attack'));

    dc.pieChart("#attack")
        .width(300)
        .height(300)
        .radius(120)
        .innerRadius(30)
        .dimension(power_dim)
        .group(attack_per_country)
        .legend(dc.legend().x(1).y(1))
        
    var power_dim = ndx.dimension(dc.pluck('Power'));
    var bombers_per_country = power_dim.group().reduceSum(dc.pluck('Bombers'));

    dc.pieChart("#bombers")
        .width(300)
        .height(300)
        .radius(120)
        .innerRadius(30)
        .dimension(power_dim)
        .group(bombers_per_country)
        .legend(dc.legend().x(1).y(1))

    var power_dim = ndx.dimension(dc.pluck('Power'));
    var recon_per_country = power_dim.group().reduceSum(dc.pluck('Recon'));

    dc.pieChart("#recon")
        .width(300)
        .height(300)
        .radius(120)
        .innerRadius(30)
        .dimension(power_dim)
        .group(recon_per_country)
        .legend(dc.legend().x(1).y(1))
    
    var power_dim = ndx.dimension(dc.pluck('Power'));
    var transport_per_country = power_dim.group().reduceSum(dc.pluck('Transport'));

    dc.pieChart("#transport")
        .width(300)
        .height(300)
        .radius(120)
        .innerRadius(30)
        .dimension(power_dim)
        .group(transport_per_country)
        .legend(dc.legend().x(1).y(1))

    var power_dim = ndx.dimension(dc.pluck('Power'));
    var training_per_country = power_dim.group().reduceSum(dc.pluck('Training'));

    dc.pieChart("#training")
        .width(300)
        .height(300)
        .radius(120)
        .innerRadius(30)
        .dimension(power_dim)
        .group(training_per_country)
        .legend(dc.legend().x(1).y(1))

    var power_dim = ndx.dimension(dc.pluck('Power'));
    var other_per_country = power_dim.group().reduceSum(dc.pluck('Other'));

    dc.pieChart("#other")
        .width(300)
        .height(300)
        .radius(120)
        .innerRadius(30)
        .dimension(power_dim)
        .group(other_per_country)
        .legend(dc.legend().x(1).y(1))

    dc.renderAll();
}
