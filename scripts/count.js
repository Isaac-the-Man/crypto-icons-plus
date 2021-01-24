const fs = require('fs')
const dirs = ['./src/16', './src/32', './src/64', './src/128']

dirs.forEach((dir) => {
	// count src directory
	let files = fs.readdirSync(dir)
	console.log(`${dir} contains ${files.length} files`)
})