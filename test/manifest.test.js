const fs = require('fs')
const dirs = ['./src/16', './src/32', './src/64', './src/128']
const manifest = 'manifest.json'

test_manifest = test('test manifest vs src', () => {
	// count manifest.json
	let rawData = fs.readFileSync(manifest)
	let jsonData = JSON.parse(rawData)
	let manNames = []
	jsonData.forEach((coin) => {
		manNames.push(coin.slug + '.png')
	})
	dirs.forEach((dir) => {
		// count src directory
		let files = fs.readdirSync(dir)
		let srcNames = []
		files.forEach((file) => {
			srcNames.push(file)
		})

		expect(srcNames.sort()).toEqual(manNames.sort())
	})
})

exports.test_manifest = test_manifest