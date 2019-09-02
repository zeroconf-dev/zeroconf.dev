module.exports = (loader, env) => ({
	test: loader.test,
	include: loader.include,
	rules: [
		{
			loader: loader.loader,
			options: {
				...loader.options,
				plugins: [...loader.options.plugins, 'relay'],
				presets: [loader.options.presets[0], 'linaria/babel'],
			},
		},
		{
			loader: 'linaria/loader',
			options: {
				displayName: env !== 'production',
				cacheDirectory: 'src/.linaria-cache',
				sourceMap: env !== 'production',
				babelOptions: {
					presets: loader.options.presets,
				},
			},
		},
	],
});
