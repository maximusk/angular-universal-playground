import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { enableProdMode } from '@angular/core';
import * as express from 'express';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { AppServerModule } from './server.module';

enableProdMode();

const app = express();
const PORT = process.env.PORT || 4000;

// https://github.com/angular/universal/tree/master/modules/express-engine
app.engine('html', ngExpressEngine({
    bootstrap: AppServerModule
}));

app.set('view engine', 'html');
app.set('views', 'src/views');

// Server static files from /browser
app.get('*.*', express.static('.', {
    maxAge: '1y'
}));

// ALl regular routes use the Universal engine
app.get('*', (req, res) => {
    res.render('index', {req});
});

// Start up the Node server
app.listen(PORT, () => {
    console.log(`Node Express server listening on http://localhost:${PORT}`);
});
