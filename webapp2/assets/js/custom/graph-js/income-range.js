var dataRaw          = [1, 30 , 90 , 50 ,60];
var low  = 3;
var high = 7;
var dataFiltered = [];

$.each(dataRaw, function(i,val) {
    //if(val < low) {
    //    dataFiltered.push({"y":val,"color":"blue"});
    //}
    //else if(val > high) {
    //    dataFiltered.push({"y":val,"color":"red"});
    //}
    //else {
    //    dataFiltered.push(val);
    //}
    dataFiltered.push({"y":val,"color":"#5D85B8"});
});

var options = {
    chart: {
        type:'column',
        style: {
            fontFamily: 'Source Sans Pro",sans-serif',
            fontSize:'14px'
        }
    },
    title: {
        text: ' ',
        style: {
            fontSize:'1em',
            fontWeight:'bold'
        }
    },
    legend: { },
    tooltip: {
        shared: true,
        crossHairs: true,
        useHTML: true
    },
    //plotOptions: {
    //    column: {
    //        color:'#ccc',
    //        groupPadding:0.05,
    //        pointPadding:0.1
    //    },
    //    series: {
    //        shadow: false
    //    }
    //},
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                align: 'center',
                color: '#FFFFFF',
                x: -10
            },
            pointPadding: 0.1,
            groupPadding: 0
        }
    },
    xAxis: {
        categories: ['>$19999', '$20000-$34999', '$35000-$59000', '$60000-$99999', '<$100000'],
        lineColor:'#000',
        lineWidth:.5,
        tickWidth:.5,
        tickLength:3,
        tickColor:'#000',
        title: {
            text: 'X Axis',
            style: {
                color:'#002f56;',
                fontSize:'14px'
            }
        }
    },
    yAxis: {
        lineColor:'#000',
        //lineWidth:.5,
        //tickWidth:.5,
        //tickLength:3,
        tickColor:'#000',
        gridLineWidth:.5,
        gridLineColor:'#5D85B8',
        gridLineDashStyle: 'LongDashDotDot',
        title: {
            text: 'PERCENTAGE',
            rotation:270,
            style: {
                color:'#5D85B8',
                fontSize:'14px'
            }
        }
    },
    series: []
};

$('#incomeRange').highcharts(options);
var chart = $('#incomeRange').highcharts();
chart.addSeries({ name:'Household Income Range', data:dataFiltered });
$('.highcharts-axis-labels text').css({'font-size':'15px', 'fill':'#40638e'} );






