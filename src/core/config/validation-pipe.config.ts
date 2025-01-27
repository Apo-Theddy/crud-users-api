import { ValidationPipe } from '@nestjs/common';

export class ValidationPipeConfig {
  public static get setup(): ValidationPipe {
    return new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    });
  }
}
