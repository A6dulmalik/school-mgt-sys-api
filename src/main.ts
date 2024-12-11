/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  //Swagger Configuration
  const config = new DocumentBuilder()
  .setVersion('1.0')
  .setTitle('School Management System')
  .setDescription('A school management system api')
  .setTermsOfService('http://localhost:3001/terms-of-service')
  .setLicense('MIT', 'https://github.com/git/git-scm.com/blob/gh-pages/MIT-LICENSE.txt')
  .addServer('http://localhost:3001')
  .build();
  
  //Instantiate Document
  const document = SwaggerModule.createDocument(app, config)

  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
