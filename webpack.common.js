const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    shared: "./src/shared.ts",
    infiniforge: "./src/infiniforge-app.ts",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    fallback: {
      crypto: false,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./pages/index.html",
      filename: "index.html",
      chunks: ["shared"],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: "./pages/cv.html",
      filename: "cv.html",
      chunks: ["shared"],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: "./pages/projects.html",
      filename: "projects.html",
      chunks: ["shared"],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: "./pages/graphic-design.html",
      filename: "graphic-design.html",
      chunks: ["shared"],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: "./pages/infiniforge.html",
      filename: "infiniforge.html",
      chunks: ["shared", "infiniforge"],
    }),
    new CopyPlugin({
      patterns: [{ from: "static", to: "." }],
    }),
  ],
};
