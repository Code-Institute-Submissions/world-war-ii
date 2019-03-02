queue()
    .defer(d3.json, "assets/data/deaths.json")
    .await(deathsCharts);

// Pie charts with number of deaths and population in WW II

function deathsCharts(error, fallen) {
    var ndx = crossfilter(fallen);
    var country_dim = ndx.dimension(dc.pluck('Country'));
    var population_per_country = country_dim.group().reduceSum(dc.pluck('TotalPopulation'));


    //Chart with total population

    dc.pieChart('#population')
        .width(600)
        .height(400)
        .radius(250)
        .transitionDuration(1500)
        .dimension(country_dim)
        .group(population_per_country)
        .useViewBoxResizing(true)
        .legend(dc.legend().x(10).y(20).itemHeight(15).autoItemWidth(true).gap(2).horizontal(false));


    //Chart with total death

    var country_dim = ndx.dimension(dc.pluck('Country'));
    var total_deaths_per_country = country_dim.group().reduceSum(dc.pluck('TotalDeaths'));
    dc.pieChart('#total-deaths')
        .width(600)
        .height(400)
        .radius(250)
        .transitionDuration(1500)
        .dimension(country_dim)
        .group(total_deaths_per_country)
        .useViewBoxResizing(true)
        .legend(dc.legend().x(10).y(20).itemHeight(15).autoItemWidth(true).gap(2).horizontal(false));

    //Chart with total wounded

    var country_dim = ndx.dimension(dc.pluck('Country'));
    var total_wounded_per_country = country_dim.group().reduceSum(dc.pluck('MilitaryWounded'));
    dc.pieChart('#total-wounded')
        .width(600)
        .height(400)
        .radius(250)
        .transitionDuration(1500)
        .dimension(country_dim)
        .group(total_wounded_per_country)
        .useViewBoxResizing(true)
        .legend(dc.legend().x(10).y(20).itemHeight(15).autoItemWidth(true).gap(2).horizontal(false));

    // sum all population from each country

    sumAllPopulation = ndx.groupAll().reduceSum(function(d) {
        return d.TotalPopulation;
    });

    var sumPopulation = dc.numberDisplay('#sum-population');

    // counter of all population with xx0,000,000 format

    sumPopulation.group(sumAllPopulation)
        .formatNumber(d3.format(",.f"))
        .valueAccessor(function(d) { return d; });

    sumAllDeaths = ndx.groupAll().reduceSum(function(d) {
        return d.TotalDeaths;
    });

    var sumDeaths = dc.numberDisplay('#sum-deaths');

    // counter of all deaths with xx0,000,000 format

    sumDeaths.group(sumAllDeaths)
        .formatNumber(d3.format(",.f"))
        .valueAccessor(function(d) { return d; });

    sumAllWounded = ndx.groupAll().reduceSum(function(d) {
        return d.MilitaryWounded;
    });

    var sumWounded = dc.numberDisplay('#sum-wounded');

    // counter of all wounded with xx0,000,000 format

    sumWounded.group(sumAllWounded)
        .formatNumber(d3.format(",.f"))
        .valueAccessor(function(d) { return d; });


    dc.renderAll();

}
