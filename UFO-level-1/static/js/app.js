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

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    console.log(inputValue);
});
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

    console.log(filteredData);

    // filteredData.forEach(function())


