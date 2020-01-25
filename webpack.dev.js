const merge = require("webpack-merge"); // webpack-merge
const defaultConfig = require("@wordpress/scripts/config/webpack.config"); // 汎用設定をインポート

module.exports = merge(defaultConfig, {
	mode: "development",
	devtool: "source-map"
});
