const fs = require('fs')
const dir = './src'
const manifest = 'manifest.json'

test_manifest = test('test manifest vs src', () => {
	// count src directory
	let files = fs.readdirSync(dir)
	let srcNames = []
	files.forEach((file) => {
		srcNames.push(file)
	})
	// count manifest.json
	let rawData = fs.readFileSync(manifest)
	let jsonData = JSON.parse(rawData)
	let manNames = []
	jsonData.forEach((coin) => {
		manNames.push(coin.slug)
	})

	expect(srcNames.sort()).toEqual(manNames.sort())
})

exports.test_manifest = test_manifest