const fs = require('fs')
const dirs = ['./src/16', './src/32', './src/64', './src/128']
const man = require('../manifest.json')

dirs.forEach((dir) => {
	// count src directory
	let files = fs.readdirSync(dir)
	console.log(`${dir} contains ${files.length} files`)
})
// count manifest
console.log(`manifest contains ${man.length} files`)