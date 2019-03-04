import express from 'express';
import path from 'path';

const app = express();

const webpack = require('webpack');
const config = require('../../config/webpack.dev');
const compiler = webpack(config);

const webpackDevMiddleware = require('webpack-dev-middleware')(
  compiler,
  config.devServer
);

const webpackHotMiddleware = require('webpack-hot-middleware')(compiler);

app.use(webpackDevMiddleware);
app.use(webpackHotMiddleware);

const staticMiddleware = express.static('dist');

app.use(staticMiddleware);

app.listen(8080, () => console.log('Server is listening in port 8080'));
