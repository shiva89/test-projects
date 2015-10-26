//D3js

var w = 250,                            //width
    h = w,                            //height
    r = h/2,                            //radius
    //color = d3.scale.category20c();     //builtin range of colors
    colorRange=[ "#55C7E1", "#63D8AC", "#EDC35D", "#325982", "#FF607C", "#afbdce", "#f79534", "#fdd0a2", "#31a354"]
    color = d3.scale.ordinal()
            .range(colorRange);

data = [{"label":"one", "value":20},
    {"label":"two", "value":50},
    {"label":"three", "value":30},
    {
        "label": "Four",
        "value" : 3
    },
    {
        "label": "five",
        "value" : 18
    },
    {
        "label": "six",
        "value" : 26
    },
    {
        "label": "seven",
        "value" : 56
    }
];

var vis = d3.select("#occupation")
    .append("svg:svg")              //create the SVG element inside the <body>
    .data([data])                   //associate our data with the document
    .attr("width", w)           //set the width and height of our visualization (these will be attributes of the <svg> tag
    .attr("height", h)
    .append("svg:g")                //make a group to hold our pie chart
    .attr("transform", "translate(" + r + "," + r + ")")    //move the center of the pie chart from 0, 0 to radius, radius

var arc = d3.svg.arc()              //this will create <path> elements for us using arc data
    .outerRadius(r);

var pie = d3.layout.pie()           //this will create arc data for us given a list of values
    .value(function(d) { return d.value; });    //we must tell it out to access the value of each element in our data array

var arcs = vis.selectAll("g.slice")     //this selects all <g> elements with class slice (there aren't any yet)
    .data(pie)                          //associate the generated pie data (an array of arcs, each having startAngle, endAngle and value properties)
    .enter()                            //this will create <g> elements for every "extra" data element that should be associated with a selection. The result is creating a <g> for every object in the data array
    .append("svg:g")                //create a group to hold each slice (we will have a <path> and a <text> element associated with each slice)
    .attr("class", "slice");    //allow us to style things in the slices (like text)

arcs.append("svg:path")
    .attr("fill", function(d, i) { return color(i); } ) //set the color for each slice to be chosen from the color function defined above
    .attr("d", arc);                                    //this creates the actual SVG path using the associated data (pie) with the arc drawing function

arcs.append("svg:text")                                     //add a label to each slice
    .attr("transform", function(d) {                    //set the label's origin to the center of the arc
        //we have to make sure to set these before calling arc.centroid
        d.innerRadius = r/4;
        d.outerRadius = r;
        return "translate(" + arc.centroid(d) + ")";        //this gives us a pair of coordinates like [50, 50]
    })

    .attr("text-anchor", "middle")                          //center the text on it's origin
    .text(function(d, i) { return data[i].value + "%"; });      //.VALUE GET THE VALUE // "+%" SHOW % ON THE CHART//get the label from our original data array

//3dJS Ends

//count = 0;
//var legend = svg.selectAll(".legend")
//    .data(data).enter()
//    .append("g").attr("class", "legend")
//    .attr("legend-id", function(d) {
//        return count++;
//    })
//    .attr("transform", function(d, i) {
//        return "translate(-60," + (-70 + i * 20) + ")";
//    })
//    .on("click", function() {
//        console.log("#arc-" + $(this).attr("legend-id"));
//        var arc = d3.select("#arc-" + $(this).attr("legend-id"));
//        arc.style("opacity", 0.3);
//        setTimeout(function() {
//            arc.style("opacity", 1);
//        }, 1000);
//    });
//
//legend.append("rect")
//    .attr("x", width / 2)
//    .attr("width", 18).attr("height", 18)
//    .style("fill", function(d) {
//        return color(d.label);
//    });
//legend.append("text").attr("x", width / 2)
//    .attr("y", 9).attr("dy", ".35em")
//    .style("text-anchor", "end").text(function(d) {
//        return d.label;
//    });


var legend = svg.selectAll('g')
    .data([data])
    .enter()
    .append('g')
    .attr('class', 'legend');

legend.append('rect')
    .attr('x', width - 20)
    .attr('y', function(d, i){ return i *  20;})
    .attr('width', 10)
    .attr('height', 10)
    .style('fill', function(d) {
        return color(d.label);
    });

legend.append('text')
    .attr('x', width - 8)
    .attr('y', function(d, i){ return (i *  20) + 9;})
    .text(function(d){ return d.label; });
