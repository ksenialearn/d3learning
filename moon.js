/*d3.select("body").append("svg")
.attr("width", 50)
.attr("height", 50)
.append("circle")
.attr("cx", 25)
.attr("cy", 25)
.attr("r", 25)
.style("fill", "purple");*/



var moon = d3.select("#moon");

moon.attr("cx", 100).attr("cy",100);

var timer = d3.selectAll(".phase.timer");

timer.text(time);


