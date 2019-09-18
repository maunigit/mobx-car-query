try {
	svg_to_png = require('svg-to-png');
	let resolve = require('path').resolve;
	console.log('CONVERSION IS LOADING...');
	//Input and output folders
	input = resolve('.\\assets\\images\\svg-cars');
	output = resolve('.\\assets\\images\\png-cars');
  } catch (error) {
	console.log(error);
  }

//Optional Params, see https://github.com/filamentgroup/svg-to-png
//Dimension of the png
let options = {defaultWidth: 400, defaultHeight: 300};

//Async conversion, returns promise
svg_to_png.convert(input, output, options).then(function(){
	console.log("SVG-TO-PNG CONVERSION OK!!!");
}).catch(error => console.log(error.message));