import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as bodyParser from 'body-parser';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { IncomingMessage, ServerResponse } from 'http';

/**
 * Adds raw body to the request object (required by Stripe webhooks)
 * @param req 
 * @param res 
 * @param buf 
 * @param encoding 
 * @returns 
 */
const rawBodyBuffer = (req: IncomingMessage, res: ServerResponse, buf: Buffer, encoding: BufferEncoding) => {
  if (!req.headers['stripe-signature']) { return; }

  if (buf && buf.length) {
    req['rawBody'] = buf.toString(encoding || 'utf8');
  }
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  // use body parser middleware to return raw body
  app.use(bodyParser.urlencoded({ verify: rawBodyBuffer, extended: true }));
  app.use(bodyParser.json({ verify: rawBodyBuffer }));

  const config = new DocumentBuilder()
    .setTitle('Ticket payment app')
    .setDescription('Stripe integration API description')
    .setVersion('1.0')
    // .addTag('tickets')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3000);
}

dotenv.config();
bootstrap();
