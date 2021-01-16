module.exports = ({ config }) => {
	config.module.rules.push({
		test: /\.(ts|tsx)$/,
		use: [
			{
				loader: require.resolve("awesome-typescript-loader"),
				options: {
					presets: [["react-app", { flow: false, typescript: true }]],
					configFileName: "./.storybook/tsconfig.json"
				}
			},
			{
				loader: require.resolve("react-docgen-typescript-loader")
			}
		]
	}, {
		test: /\.(sass|css|scss)$/,
		use: [
			'style-loader',
			'css-loader',
			{
				loader: "postcss-loader",
				options: {
					plugins: () => [
						require("autoprefixer")()
					],
				},
			},
			'sass-loader',
		]
	})
	config.resolve.extensions.push(".ts", ".tsx")

	return config
}