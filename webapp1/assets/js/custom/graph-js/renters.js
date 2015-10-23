//Regular pie chart example
nv.addGraph(function() {
    var chart = nv.models.pieChart()
        .x(function(d) { return d.label })
        .y(function(d) { return d.value })
        .showLabels(true);

    d3.select("#chart2 svg")
        .datum(exampleData())
        .transition().duration(350)
        .call(chart);

    return chart;
});


//Pie chart example data. Note how there is only a single array of key-value pairs.
function exampleData() {
    return  [
        {
            "label": "One",
            "value" : 14
        } ,
        {
            "label": "Two",
            "value" : 13
        } ,
        {
            "label": "Three",
            "value" : 17
        } ,
        {
            "label": "Four",
            "value" : 56
        }
    ];
}

//3dJS

//var width = 960,
//    height = 500,
//    radius = Math.min(width, height) / 2;
//
//var color = d3.scale.ordinal()
//    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);
//
//var arc = d3.svg.arc()
//    .outerRadius(radius - 10)
//    .innerRadius(0);
//
//var pie = d3.layout.pie()
//    .sort(null)
//    .value(function(d) { return d.population; });
//
//var svg = d3.select("#occupation").append("svg")
//    .attr("width", width)
//    .attr("height", height)
//    .append("g")
//    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
//
//d3.json("data.json", function(error, data) {
//
//    data.forEach(function(d) {
//        d.population = +d.population;
//    });
//
//    var g = svg.selectAll(".arc")
//        .data(pie(data))
//        .enter().append("g")
//        .attr("class", "arc");
//
//    g.append("path")
//        .attr("d", arc)
//        .style("fill", function(d) { return color(d.data.age); });
//
//    g.append("text")
//        .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
//        .attr("dy", ".35em")
//        .style("text-anchor", "middle")
//        .text(function(d) { return d.data.age; });
//
//});

