const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'temp'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
  },
  stats: 'detailed',
};
