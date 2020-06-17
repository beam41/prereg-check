const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: "production",
  entry: './src/index.ts',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname),
      '~': path.resolve(__dirname)
    }
  },
  output: {
    ecmaVersion: 2020,
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
}
