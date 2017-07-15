import { Response } from '@angular/http';
import * as path from "path" // normalize the paths : http://stackoverflow.com/questions/9756567/do-you-need-to-use-path-join-in-node-js
import express = require('express');
import bodyParser = require("body-parser");
import compression = require("compression");
import methodOverride = require("method-override");
import cookieParser = require("cookie-parser");
import morgan = require("morgan");
import errorHandler = require("error-handler");
import setAPI from "./api";


export class Routes {

  protected basePath: string;

  //protected api: database.API;

  constructor(NODE_ENV: string) {

    switch (NODE_ENV) {
      case 'production':
        this.basePath = 'client';
        break;
      case 'development':
        this.basePath = 'dist/client';
        break;
    }

  }

  defaultRoute(req: express.Request, res: express.Response) {
    res.sendFile('index.html', { root: path.join(process.cwd(), this.basePath) });
  }

  paths(app: express.Application) {
    setAPI(app);

    app.get('/', (req: express.Request, res: express.Response) => {
      this.defaultRoute(req, res);
    });

    app.get('*', (req: express.Request, res: express.Response) => {
      this.defaultRoute(req, res);
    });
  }

}
