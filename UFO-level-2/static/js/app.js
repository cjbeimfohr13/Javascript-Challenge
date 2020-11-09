// from data.js
var tableData = data;


var tbody = d3.select("tbody");

tableData.forEach(function(ufoSighting){

    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(function([key,value]){

        var cell = row.append("td");
        cell.text(value);
    });


});

var button = d3.select("#filter-btn"); 
button.on("click",function() {
    
    d3.select("tbody").html("");
    d3.event.preventDefault();

    var dateInputElement = d3.select("#datetime");
    var dateInputValue = dateInputElement.property("value");
    var cityInputElement = d3.select("#city");
    var cityInputValue= cityInputElement.property("value");
    var stateInputElement = d3.select("#state");
    var stateInputValue= stateInputElement.property("value");
    var countryInputElement = d3.select("#country");
    var countryInputValue= countryInputElement.property("value");
    var shapeInputElement = d3.select("#shape");
    var shapeInputValue= shapeInputElement.property("value");


    var filteredData = tableData
    if(dateInputValue!==""){
        console.log('filtering by date: ', dateInputValue)
        filteredData = tableData.filter(ufo => ufo.datetime === dateInputValue);
    }
    if(cityInputValue!=="") {
        console.log('filtering by city: ', cityInputValue)
        filteredData = filteredData.filter(ufo => ufo.city === cityInputValue);
    }
    if(stateInputValue!=="") {
        console.log('filtering by state: ', stateInputValue)
        filteredData = filteredData.filter(ufo => ufo.state === stateInputValue);
    }
    if(countryInputValue!=="") {
        console.log('filtering by country: ', countryInputValue)
        filteredData = filteredData.filter(ufo => ufo.country === countryInputValue);
    }
    if(shapeInputValue!=="") {
        console.log('filtering by shape: ', shapeInputValue)
        filteredData = filteredData.filter(ufo => ufo.shape === shapeInputValue);
    }


    filteredData.forEach(function(sighting){
    

        var row = tbody.append("tr");
        Object.entries(sighting).forEach(function([key,value]){

        var cell = row.append("td");
        cell.text(value);
    });
    });
});
