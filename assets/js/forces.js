queue()
    .defer(d3.json, "assets/data/airforces.json")
    .await(airforcesCharts);


// function that use dc.js to create charts and shows the aircraft forces

function airforcesCharts(error, airforce) {
    var ndx = crossfilter(airforce);
    var powerDim = ndx.dimension(dc.pluck('Power'));
    var totalPerPower = powerDim.group().reduceSum(dc.pluck('Total'));


    // bar chart with numbers of aircrafts by country
    powerAirforce = dc.barChart("#total-power-airforce");

    powerAirforce
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(powerDim)
        .group(totalPerPower)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Power")
        .height(500)
        .width(1000)
        .useViewBoxResizing(true)
        .yAxis().ticks(15);

    // below I put pie charts for each type of aircraft by country

    var powerDim = ndx.dimension(dc.pluck('Power'));
    var fightersPerCountry = powerDim.group().reduceSum(dc.pluck('Fighters'));

    dc.pieChart("#fighters")
        .width(300)
        .height(300)
        .radius(120)
        .useViewBoxResizing(true)
        .innerRadius(30)
        .dimension(powerDim)
        .group(fightersPerCountry)
        .legend(dc.legend().x(-3).y(1).legendWidth(10).gap(25));

    var powerDim = ndx.dimension(dc.pluck('Power'));
    var attackPerCountry = powerDim.group().reduceSum(dc.pluck('Attack'));

    dc.pieChart("#attack")
        .width(300)
        .height(300)
        .radius(120)
        .useViewBoxResizing(true)
        .innerRadius(30)
        .dimension(powerDim)
        .group(attackPerCountry)
        .legend(dc.legend().x(-3).y(1).legendWidth(10).gap(25));

    var powerDim = ndx.dimension(dc.pluck('Power'));
    var bombersPerCountry = powerDim.group().reduceSum(dc.pluck('Bombers'));

    dc.pieChart("#bombers")
        .width(300)
        .height(300)
        .radius(120)
        .useViewBoxResizing(true)
        .innerRadius(30)
        .dimension(powerDim)
        .group(bombersPerCountry)
        .legend(dc.legend().x(-3).y(1).legendWidth(10).gap(25));

    var powerDim = ndx.dimension(dc.pluck('Power'));
    var reconPerCountry = powerDim.group().reduceSum(dc.pluck('Recon'));

    dc.pieChart("#recon")
        .width(300)
        .height(300)
        .radius(120)
        .useViewBoxResizing(true)
        .innerRadius(30)
        .dimension(powerDim)
        .group(reconPerCountry)
        .legend(dc.legend().x(-3).y(1).legendWidth(10).gap(25));

    var powerDim = ndx.dimension(dc.pluck('Power'));
    var transportPerCountry = powerDim.group().reduceSum(dc.pluck('Transport'));

    dc.pieChart("#transport")
        .width(300)
        .height(300)
        .radius(120)
        .useViewBoxResizing(true)
        .innerRadius(30)
        .dimension(powerDim)
        .group(transportPerCountry)
        .legend(dc.legend().x(-3).y(1).legendWidth(10).gap(25));

    var powerDim = ndx.dimension(dc.pluck('Power'));
    var trainingPerCountry = powerDim.group().reduceSum(dc.pluck('Training'));

    dc.pieChart("#training")
        .width(300)
        .height(300)
        .radius(120)
        .useViewBoxResizing(true)
        .innerRadius(30)
        .dimension(powerDim)
        .group(trainingPerCountry)
        .legend(dc.legend().x(-3).y(1).legendWidth(10).gap(25));

    var powerDim = ndx.dimension(dc.pluck('Power'));
    var otherPerCountry = powerDim.group().reduceSum(dc.pluck('Other'));

    dc.pieChart("#other")
        .width(300)
        .height(300)
        .radius(120)
        .useViewBoxResizing(true)
        .innerRadius(30)
        .dimension(powerDim)
        .group(otherPerCountry)
        .legend(dc.legend().x(-3).y(1).legendWidth(10).gap(25));

    dc.renderAll();
}


queue()
    .defer(d3.json, "assets/data/landforces.json")
    .await(landForceCharts);

function landForceCharts(error, landForces) {


    var ndx = crossfilter(landForces);
    var powerDim = ndx.dimension(dc.pluck('Power'));

    var artillery = powerDim.group().reduceSum(function(d) {
        return +d.Artillery / 100;
    });
    var mortars = powerDim.group().reduceSum(function(d) {
        return +d.Mortars / 100;
    });
    var tanks = powerDim.group().reduceSum(function(d) {
        return +d.TanksandSPGs / 100;
    });
    var armoured = powerDim.group().reduceSum(function(d) {
        return +d.ArmouredVehicles / 100;
    });
    var other = powerDim.group().reduceSum(function(d) {
        return +d.OtherVehicles / 100;
    });
    var machineGuns = powerDim.group().reduceSum(function(d) {
        return +d.MachineGuns / 100;
    });


    dc.barChart("#land-forces-bar")
        .dimension(powerDim)
        .group(artillery, "Artillery")
        .stack(mortars, "Mortars")
        .stack(tanks, "Tanks")
        .stack(armoured, "Armoured Vehicles")
        .stack(other, "Other Vehicles")
        .stack(machineGuns, "Machine Guns")
        .width(1000)
        .height(400)
        .useViewBoxResizing(true)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .yAxisLabel("Amount x 1000")
        .xAxisLabel("Power / Country")
        .legend(dc.legend().x(50).y(5));

    dc.renderAll();
}
