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
    d3.csv('/d3_test/data/breed_count_weight.csv').then(function(dogData, error) {
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
    var vRoot = d3.hierarchy(vData).sum(function (d) { return d.data.licensecount;});
    var vNodes = vRoot.descendants();
    vLayout(vRoot);
    var vSlices = g.selectAll('circle').data(vNodes).enter().append('circle');

    // Draw on screen
    vSlices.attr('cx', function (d) { return d.x; })
        .attr('cy', function (d) { return d.y; })
        .attr('r', function (d) { return d.r; });
    
    vSlices.on("click", selectBreedInfo);
        
}

// circle.on("click", selectBreedInfo);

let format = d3.format(",d")
let current_circle = undefined;

function selectBreedInfo(d) {
  // cleanup previous selected circle
  if(current_circle !== undefined){      
    current_circle.attr("id", "circle");
    svg.selectAll("#details-popup").remove();
  }

  // select the circle
  current_circle = d3.select(this);
  current_circle.attr("id", "selected_circle");

  let textblock = svg.selectAll("#details-popup")
    .data([d])
    .enter()
    .append("g")
    .attr("id", "details-popup")
    .attr("font-size", 16)
    .attr("font-family", "sans-serif")
    .attr("text-anchor", "start")
    .attr("transform", d => `translate(10, 20)`);

  textblock.append("text")
    .text(d => d.data.data.breedname + " Breed")
    .attr("font-weight", "bold")
    .attr("y", "16");

  textblock.append("text")
    .text(d => "Licenses Issued: " + d.data.data.licensecount)
    .attr("y", "40");

  textblock.append("text")
    .text(d => "AKC BreedGroup: " + d.data.data.breedgroup)
    .attr("y", "64");

//   textblock.append("text")
//     .text(d => "Breed: " + d.data.data.Breed)
//     .attr("y", "48");

  textblock.append("text")
    .text(d => "Average Weight: " + d.data.data.avgweight + "lbs.")
    .attr("y", "88");
}

