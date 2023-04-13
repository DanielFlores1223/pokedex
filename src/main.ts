import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { EnvConfiguration } from './config/env.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v2'); // prefix url http://localhost:3000/api/v2/
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      //activar la transformacion de tipo autmatica
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  console.log('PORT', EnvConfiguration().port);
  await app.listen(EnvConfiguration().port);
}
bootstrap();
