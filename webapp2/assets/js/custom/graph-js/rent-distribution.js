

historicalBarChart = [
    {
        //key: "Cumulative Return",
        values: [
            {
                "label" : "$500-$699" ,
                "value" : 1
            } ,
            {
                "label" : "$700-$899" ,
                "value" : 10
            } ,
            {
                "label" : "$900-$999" ,
                "value" : 12
            } ,
            {
                "label" : "$1000-$1499" ,
                "value" : 19
            } ,
            {
                "label" : "$1500+" ,
                "value" : 90
            }

        ]
    }
];

var rent; // a global
//d3.json("graph-js/rent-distribution.json", function(error, json) {
//    if (error) return console.warn(error);
//    rent = json;
//    visualizeit();
//});
$.ajax({
    url:"graph-js/rent-distribution.json",
    type:"GET",
    success:function(json){
        rent = json;
        visualizeit();
    }

}).done(function(){
    xAxisTextTransform();
});
function visualizeit(){

    nv.addGraph(function() {
        var chart = nv.models.discreteBarChart()
                .x(function(d) { return d.label })
                .y(function(d) { return d.value })
                .staggerLabels(true)
                //.staggerLabels(historicalBarChart[0].values.length > 8)
                .tooltips(false)
                .showValues(true)
                .transitionDuration(250)

            ;

        d3.select('#chart1 svg')
            .datum(rent)
            .call(chart);
        nv.utils.windowResize(chart.update);
        return chart;
    });
}


$(document).ready(function () {

   // $("document").on("resize",  (function(){alert("sdsd")});
    function xAxisTextTransform(){
        $('.bar-graph .nvd3 .nv-axis.nv-x text').attr('transform', 'translate(0,5)').addClass('wsedrft');
    }
    xAxisTextTransform();
    window.addEventListener("resize", xAxisTextTransform);
});

