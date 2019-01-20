queue()
    .defer(d3.json, "assets/json/deaths.json")
    .await(makeGraphs,);
    
function makeGraphs(error, deathsData) {
    var ndx = crossfilter(deathsData);
    var country_dim = ndx.dimension(dc.pluck('Country'));
    var population_per_country = country_dim.group().reduceSum(dc.pluck('TotalPopulation'));
    dc.pieChart('#population')
        .height(600)
        .radius(250)
        .transitionDuration(1500)
        .dimension(country_dim)
        .group(population_per_country);
        
    var country_dim = ndx.dimension(dc.pluck('Country'));
    var total_deaths_per_country = country_dim.group().reduceSum(dc.pluck('TotalDeaths'));
    dc.pieChart('#total-deaths')
        .height(600)
        .radius(250)
        .transitionDuration(1500)
        .dimension(country_dim)
        .group(total_deaths_per_country);
        
    
        
    dc.renderAll();
    
}

