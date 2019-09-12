var svg_to_png = require('svg-to-png');

svg_to_png.convert("input", "output") // async, returns promise
.then( function(){
	// Do tons of stuff
});