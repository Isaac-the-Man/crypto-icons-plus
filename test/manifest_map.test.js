const manifestData = require('../manifest.min.json')
const mapData = require('../map.min.json')

test('Test manifest.json against map.json.', () => {
	// parse in sets
	const manifestSet = new Set(manifestData.map(data => data.slug))
	const mapSet = new Set()
	Object.values(mapData).forEach(data => data.forEach(mapSet.add, mapSet))

	// compare sets
	expect(manifestSet).toEqual(mapSet)
})