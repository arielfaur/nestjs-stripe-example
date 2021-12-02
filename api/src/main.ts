import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
 
  const config = new DocumentBuilder()
    .setTitle('Ticket payment app')
    .setDescription('Stripe integration API description')
    .setVersion('1.0')
    // .addTag('tickets')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT);
}

dotenv.config();
bootstrap();
