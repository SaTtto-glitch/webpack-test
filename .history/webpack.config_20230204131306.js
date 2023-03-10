const path = require("path");
const fs = require("fs");

module.exports = {
  mode: "development",
  entry: "./server/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "babel-loader",
            options: {
              configFile: path.resolve(__dirname, "tsconfig.json"),
            },
          },
        ],
      },
      
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 9000,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json",".jsx"],
  },
  target: "node",
  resolve: {
    fallback: {
      fs: false,
    },
  },
};
