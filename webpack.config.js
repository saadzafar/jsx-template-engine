const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");
module.exports = {
  entry: "./src/index.js",
  mode: "production",
  output: {
    path: `${__dirname}/dist`,
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(?:js|jsx|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env"]],
            plugins: [
              [
                "@babel/plugin-transform-react-jsx",
                {
                  runtime: "automatic",
                  importSource: path.resolve(__dirname + "/./"),
                },
              ],
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
