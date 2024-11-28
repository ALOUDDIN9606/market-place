// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import { ValidationPipe } from '@nestjs/common';
// import * as cookieParser from "cookie-parser";


// async function startApp() {
//   const PORT = Number(process.env.PORT);
//   const app = await NestFactory.create(AppModule);
//   app.useGlobalPipes(new ValidationPipe());
//   app.use(cookieParser());
//   app.setGlobalPrefix('/api');
//   await app.listen(PORT, () => console.log('Server running on port', PORT));
// }
// startApp();


import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import createServer from '@vendia/serverless-express';
import * as express from 'express';


let cachedServer: (arg0: any, arg1: any) => any;

async function bootstrap() {
  const expressApp = express();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));
  app.enableCors(); // Agar kerak bo'lsa
  await app.init();
  return createServer({ app: expressApp });
}

export const handler = async (event: any, context: any) => {
  if (!cachedServer) {
    cachedServer = await bootstrap();
  }
  return cachedServer(event, context);
};
