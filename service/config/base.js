const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  profile: true,
  mode: "development", // 开发环境
  entry: path.resolve(__dirname, '../../src/main.ts'), // 入口文件
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: 'js/[name].js',
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, '../../src')
    },
    extensions: ['.js', '.json', '.vue', 'jsx', '.ts', '.tsx']
  },
  module: {
    // loader
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, '../../src'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
          options: {
            // transpileOnly: true, // 关闭项目运行时的类型检查
            appendTsSuffixTo: ["\\.vue$"], // 给 .vue文件添加个 .ts后缀用于编译。
            // happyPackMode: true,
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        type: 'asset',
        generator: { filename: 'img/[contenthash:8][ext][query]' },
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(), // vue3语法糖 与此配合使用 
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      templateContent: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>admin webpack</title>
          <meta name="viewport" content="width=device-width, initial-scale=1">
        </head>
        <body>
          <div id="app"></div>
        </body>
      </html>
      `
    })
  ],
  devServer: {
    // contentBase: path.resolve(__dirname, "./dist"),
    port: 8083,
    historyApiFallback: true, // 支持history
    static: {
      directory: path.resolve(__dirname, "../../public")
    }
  }
}