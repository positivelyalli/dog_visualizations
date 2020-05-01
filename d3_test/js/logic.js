var vWidth = 960;
var vHeight = 500;
var vData = {};

// Prepare our physical space
var svg = d3.select("#circle_chart")
            .append("svg")
            .attr('width', vWidth)
            .attr('height', vHeight);

var g = d3.select('#circle_chart svg')
        .append("g");

// Get the data from our CSV file
function fetchDogData(){
    d3.csv('/d3_test/data/sample_dog_data.csv').then(function(dogData, error) {
        if (error) throw error;
        childColumn = dogData.columns[1];
        parentColumn = dogData.columns[0];

        var stratify = d3.stratify()
            .id(d => d[childColumn])
            .parentId(d => d[parentColumn]);
        
        vData = stratify(dogData);

        drawViz(vData);
    });
}

fetchDogData();


function drawViz(vData) {
    // Declare d3 layout
    var vLayout = d3.pack().size([vWidth, vHeight]);

    // Layout + Data
    var vRoot = d3.hierarchy(vData).sum(function (d) { return d.data.Count;});
    var vNodes = vRoot.descendants();
    vLayout(vRoot);
    var vSlices = g.selectAll('circle').data(vNodes).enter().append('circle');

    // Draw on screen
    vSlices.attr('cx', function (d) { return d.x; })
        .attr('cy', function (d) { return d.y; })
        .attr('r', function (d) { return d.r; });
}