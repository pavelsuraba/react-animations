import { DIST, PORT } from './constants';
import path from 'path';
import express from 'express';
import webpack from 'webpack';
import config from './webpack.config';
import open from 'open';

const app = express();
const compiler = webpack(config);
const __dev__ = process.env.NODE_ENV === 'development';

if(__dev__) {
    app.use(require('webpack-dev-middleware')(compiler, {
        contentBase: DIST,
        hot: true,
        inline: true,
        compress: true,
        noInfo: false,
        stats: { colors: true }
    }));

    app.use(require('webpack-hot-middleware')(compiler));
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.pug'));
});

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    if(__dev__) {
        open(`http://localhost:${PORT}/`);
    }
    console.log(`Listening at http://localhost:${PORT}`);
});
