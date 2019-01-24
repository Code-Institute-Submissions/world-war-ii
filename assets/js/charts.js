queue()
    .defer(d3.json, "assets/data/deaths.json")
    .await(deathsCharts);

function deathsCharts(error, deathsData) {

    var ndx = crossfilter(deathsData);
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


