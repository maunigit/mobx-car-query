try {
	svg_to_png = require('svg-to-png');
	let resolve = require('path').resolve;
	console.log('CONVERSION IS LOADING...');
	input = resolve('.\\assets\\images\\svg-cars');
	output = resolve('.\\assets\\images\\png-cars');
  } catch (e) {
	console.log(e);
  }

//Optional Params, see https://github.com/filamentgroup/svg-to-png
let options = {defaultWidth: 400, defaultHeight: 300};

svg_to_png.convert(input, output, options) // async, returns promise
.then( function(){
	console.log("SVG-TO-PNG CONVERSION OK!!!");
}).catch(error => console.log(error.message));