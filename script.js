'use strict'; //strict mode: catch silly errors

//Use the jQuery selector function $() to access the '#face' img
//assign that element to a variable

var face = $('#face');

var isSurprised = false;

face.click(function(){
	//will be called when we click
	if(!isSurprised){
		face.attr('src', 'img/surprised.png');
		isSurprised = true;
	}
	else {
		face.attr('src', 'img/happy.png');		
		isSurprised = false;
	}
});


/* D3 WORK! */

var svg = d3.select('svg');
// var circle = svg.append('circle');
// circle.attr('cx', 150);
// circle.attr('cy', 150);
// circle.attr('r', 35);
// circle.attr('fill', 'green');

// var circle2 = svg.append('circle'); //add another
// circle2.attr({cx:120, cy:140, r:35, fill:'red'});

var dataList = [
   {id:1, name:'A', sleep:1},
   {id:2, name:'B', sleep:3},
   {id:3, name:'C', sleep:6},
];

var rectList = d3.select('svg').selectAll('rect');

var dataJoin = rectList.data(dataList);

dataJoin
	.attr({x:10, height:40})
	.attr('y', function(d){
		return d.id*50;
	})
	.attr('width', function(dataItem){
		return dataItem.sleep*20;
	});
