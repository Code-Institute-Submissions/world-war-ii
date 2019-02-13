queue()
    .defer(d3.json, "assets/data/airforces.json")
    .await(airforcesCharts);

// function that use dc.js to create charts and shows the aircraft forces

function airforcesCharts(error, airforce) {
    var ndx = crossfilter(airforce);
    var power_dim = ndx.dimension(dc.pluck('Power'));
    var total_per_power = power_dim.group().reduceSum(dc.pluck('Total'));

    // bar chart with numbers of aircrafts by country

    dc.barChart("#total-power-airforce")
        .width(800)
        .height(300)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
       /*
        .colorAccessor(function(d) {
            if (d.colation == "Allies") {
                return "test1";
            }
            else {
                return "test2";
            }
        })
        .colors(d3.scale.ordinal().domain(["test1", "test2"])
        
        
        .range(["blue", "red"]))
        */
        .dimension(power_dim)
        .group(total_per_power)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Power")
        .yAxis().ticks(15);

    // below I put pie charts for each type of aircraft by country

    var power_dim = ndx.dimension(dc.pluck('Power'));
    var fighters_per_country = power_dim.group().reduceSum(dc.pluck('Fighters'));

    dc.pieChart("#fighters")
        .width(400)
        .height(300)
        .radius(120)
        .innerRadius(30)
        .dimension(power_dim)
        .group(fighters_per_country)
        .legend(dc.legend().x(-3).y(1).legendWidth(10).gap(25))

    var power_dim = ndx.dimension(dc.pluck('Power'));
    var attack_per_country = power_dim.group().reduceSum(dc.pluck('Attack'));

    dc.pieChart("#attack")
        .width(400)
        .height(300)
        .radius(120)
        .innerRadius(30)
        .dimension(power_dim)
        .group(attack_per_country)
        .legend(dc.legend().x(-3).y(1).legendWidth(10).gap(25))

    var power_dim = ndx.dimension(dc.pluck('Power'));
    var bombers_per_country = power_dim.group().reduceSum(dc.pluck('Bombers'));

    dc.pieChart("#bombers")
        .width(400)
        .height(300)
        .radius(120)
        .innerRadius(30)
        .dimension(power_dim)
        .group(bombers_per_country)
        .legend(dc.legend().x(-3).y(1).legendWidth(10).gap(25))

    var power_dim = ndx.dimension(dc.pluck('Power'));
    var recon_per_country = power_dim.group().reduceSum(dc.pluck('Recon'));

    dc.pieChart("#recon")
        .width(400)
        .height(300)
        .radius(120)
        .innerRadius(30)
        .dimension(power_dim)
        .group(recon_per_country)
        .legend(dc.legend().x(-3).y(1).legendWidth(10).gap(25))

    var power_dim = ndx.dimension(dc.pluck('Power'));
    var transport_per_country = power_dim.group().reduceSum(dc.pluck('Transport'));

    dc.pieChart("#transport")
        .width(400)
        .height(300)
        .radius(120)
        .innerRadius(30)
        .dimension(power_dim)
        .group(transport_per_country)
        .legend(dc.legend().x(-3).y(1).legendWidth(10).gap(25))

    var power_dim = ndx.dimension(dc.pluck('Power'));
    var training_per_country = power_dim.group().reduceSum(dc.pluck('Training'));

    dc.pieChart("#training")
        .width(400)
        .height(300)
        .radius(120)
        .innerRadius(30)
        .dimension(power_dim)
        .group(training_per_country)
        .legend(dc.legend().x(-3).y(1).legendWidth(10).gap(25))

    var power_dim = ndx.dimension(dc.pluck('Power'));
    var other_per_country = power_dim.group().reduceSum(dc.pluck('Other'));

    dc.pieChart("#other")
        .width(400)
        .height(300)
        .radius(120)
        .innerRadius(30)
        .dimension(power_dim)
        .group(other_per_country)
        .legend(dc.legend().x(-3).y(1).legendWidth(10).gap(25))

    dc.renderAll();
}



queue()
    .defer(d3.json, "assets/data/landforces.json")
    .await(landForceCharts);

function landForceCharts(error, landForces) {


    var ndx = crossfilter(landForces);
    var power_dim = ndx.dimension(dc.pluck('Power'));

    var artillery = power_dim.group().reduceSum(function(d) {
        return +d.Artillery;
    });
    var mortars = power_dim.group().reduceSum(function(d) {
        return +d.Mortars;
    });
    var tanks = power_dim.group().reduceSum(function(d) {
        return +d.TanksandSPGs;
    });
    var armoured = power_dim.group().reduceSum(function(d) {
        return +d.ArmouredVehicles;
    });
    var other = power_dim.group().reduceSum(function(d) {
        return +d.OtherVehicles;
    });
    var machine_guns = power_dim.group().reduceSum(function(d) {
        return +d.MachineGuns;
    });



    dc.barChart("#land-forces-bar")
        .width(800)
        .height(500)
        .dimension(power_dim)
        .yAxisLabel("Amount")
        .xAxisLabel("Power")
        .group(artillery, "Artillery")
        .stack(mortars, "Mortars")
        .stack(tanks, "Tanks")
        .stack(armoured, "Armoured Vehicles")
        .stack(other, "Other Vehicles")
        .stack(machine_guns, "Machine Guns")
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .legend(dc.legend().x(150).y(5))
        

    dc.renderAll();


}
