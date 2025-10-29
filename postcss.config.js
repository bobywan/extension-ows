import crypto from 'node:crypto'

const md5 = (string) => crypto.createHash('md5').update(string).digest('hex')

export default function postCssConfig(api) {
	const isProduction = api.mode === 'production'

	return {
		plugins: [
			'postcss-import',
			'postcss-url',
			[
				'postcss-custom-properties-transformer',
				{
					transformer: ({ property }) => {
						// CSS custom properties with the "_" prefix are exempted of transformation
						// to enable dark mode override on SVG fill properties.
						// The prefix is automatically removed in CSS files. Read access to the property must be without the prefix
						if (property.startsWith('_')) {
							return property.slice(1)
						}
						if (isProduction) {
							return md5(property).slice(0, 5)
						}
						return property
					}
				}
			],
			[
				'postcss-preset-env',
				{
					browsers: [
						'chrome > 80',
						'firefox > 70',
						'safari > 11',
						'defaults',
						'not dead'
					].join(','),
					stage: 2,
					features: {
						'custom-properties': {
							warnings: true,
							preserve: true
						},

						// postcss-preset-env@7.8.0 enables native "postcss-nesting"
						// which should be disabled to avoid invalid CSS with "postcss-nested"
						'nesting-rules': false
					}
				}
			],
			'postcss-nested',
			[
				'postcss-custom-media',
				{
					preserve: false
				}
			]
		]
	}
}
