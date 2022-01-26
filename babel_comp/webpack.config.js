var path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/BoilerplateComponent.jsx",
  output: {
    path: path.resolve("lib"),
    filename: "BoilerplateComponent.js",
    libraryTarget: "commonjs2",
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: "babel-loader",
      },
      {
        test: /\.((s[ac]ss)|(css))$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};
