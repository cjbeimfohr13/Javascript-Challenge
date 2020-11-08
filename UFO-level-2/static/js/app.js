// from data.js
var tableData = data;

console.log(tableData);

var tbody = d3.select("tbody");

tableData.forEach(function(ufoSighting){
    console.log(ufoSighting);

    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(function([key,value]){
        console.log(key,value);

        var cell = row.append("td");
        cell.text(value);
    });


});

var button = d3.select("#filter-btn"); 
button.on("click",function() {
    
    d3.select("tbody").html("");
    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);

    console.log(filteredData);

    filteredData.forEach(function(sighting){
    
        console.log(sighting);

        var row = tbody.append("tr");
        Object.entries(sighting).forEach(function([key,value]){
        console.log(key,value);

        var cell = row.append("td");
        cell.text(value);
    });
    });
});
