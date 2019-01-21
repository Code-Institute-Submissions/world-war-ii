/* queue()
    .defer(d3.json, "assets/data/partnerships.tsv")
    .awaitAll();

var countryChart = dc.sunburstChart("#country-chart");
var partnershipsChart = dc.pieChart("#partnerships-chart");

d3.tsv("assets/data/partnerships.tsv").then(function (partnerships) {
    var ndx = crossfilter(partnerships);
    var countryDimension = ndx.dimension(function(d) {
        return d.country.split('/');
    });
    
    countryGroup = countryDimension.group().reduceSum(function (d) {
        return d.population;
    });
    
    partnershipsDimension = ndx.dimension(function (d) {
        return d.partnerships;
    });
    
    partnershipsyGroup = countryDimension.group().reduceSum(function (d) {
        return d.population;
    });
    
    countryChart
        .width(700)
        .height(640)
        .dimension(countryDimension)
        .group(countryGroup)
        .legend(dc.legend());
    partnershipsChart
        .width(200)
        .height(200)
        .innerRadius(50)
        .dimension(partnershipsDimension)
        .group(partnershipsyGroup);
    dc.renderAll();
    
}); */

var chart3 = dc.rowChart("#test3");
var chart2 = dc.rowChart("#test2");
var chart = dc.sunburstChart("#test");
d3.csv("assets/data/morley.csv").then(function(experiments) {
    var ndx = crossfilter(experiments),
        runDimension = ndx.dimension(function (d) {
            return [d.Expt, d.Run];
        });
    var speedSumGroup = runDimension.group().reduceSum(function (d) {
        return d.Speed;
    });
    var runOnlyDimension = ndx.dimension(function (d) {
        return d.Run;
    });
    var runOnlySpeedGroup = runOnlyDimension.group().reduceSum(function (d) {
        return d.Speed;
    });
    var exptOnlyDimension = ndx.dimension(function (d) {
        return d.Expt;
    });
    var exptOnlySpeedGroup = exptOnlyDimension.group().reduceSum(function (d) {
        return d.Speed;
    });
    chart3
        .width(200)
        .height(200)
        .dimension(exptOnlyDimension)
        .group(exptOnlySpeedGroup);
    chart2
        .width(200)
        .height(200)
        .dimension(runOnlyDimension)
        .group(runOnlySpeedGroup);
    chart
        .width(768)
        .height(480)
        .innerRadius(100)
        .dimension(runDimension)
        .group(speedSumGroup)
        .legend(dc.legend());
    dc.renderAll();
});
