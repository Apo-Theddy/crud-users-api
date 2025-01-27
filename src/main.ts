import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipeConfig } from './core/config/validation-pipe.config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(compression())

  app.enableCors({ origin: '*' });

  const config = new DocumentBuilder()
    .setTitle('Users API')
    .setDescription('CRUD API for users')
    .setVersion('1.0')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api/v1/docs', app, documentFactory);

  app.setGlobalPrefix('api/v1');

  app.useGlobalPipes(ValidationPipeConfig.setup);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
