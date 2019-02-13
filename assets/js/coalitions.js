queue()
    .defer(d3.tsv, "assets/data/coalitions.tsv")
    .await(coalitionsChart);
    

