

$.get(url).then(function(data){
	//once the data is downloaded
	someFunction(data, "string");
		
}).then(function(data){
	//do a second thing
})

$.get(url).then(someFunction)


$.get(url).then(function(data){
	
	data.forEach(function(item){
		//do stuff to item		
	});
})

var promiseA = $.get(urlA);
var promiseB = $.get(urlB);

$.when([promiseA, promiseB], function(dataA, dataB){
	
})
