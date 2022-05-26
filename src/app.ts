import express, { NextFunction, Request, Response } from "express";

import bodyParser from "body-parser";
import dotenv from 'dotenv';
import { logger, exceptionsHandler } from "./middleware";
import morgan from "morgan";
import 'reflect-metadata';
import {cleanUpDatabase, loadCountriesAsync, loadGlobalAsync} from "./startup/startup";
import AppDataSource from "./common/appDataSource";
import {countryRouter} from "./resources/country/country.router";
import {globalRouter} from "./resources/global/global.router";
import {covidRouter} from "./resources/covid/covid.router";

AppDataSource.initialize()
    .then(() => logger.info("Data Source has been initialized!"))
    .then(async () => await startup())
    .catch(err => logger.error("Error during Data Source initialization:\n" + err.message));

dotenv.config();
const app: express.Application = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use(morgan('[:date[Europe/Minsk]] :method :url :status :response-time ms :body', {
  stream: { write: message => logger.http(message) }
}));

app.use(exceptionsHandler);

app.use('/countries', countryRouter);
app.use('/global', globalRouter)
app.use('/covid', covidRouter)

process.on('unhandledRejection', (error: Error) => logger.error(error));
process.on('uncaughtException', (error: Error) => logger.error(error));

const startup = async () => {
  try {
    await cleanUpDatabase()
    await loadCountriesAsync()
    await loadGlobalAsync()
    logger.info('Successfully loaded date.')
  } catch (err: any) {
    logger.error('Failed to load data: ' + err.message)
  }
}

export default app
