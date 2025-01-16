import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';
import { RolesGuard } from './auth/roles.guard';

dotenv.config();

async function bootstrap()
{
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;

  // Globally register the RolesGuard
  app.useGlobalGuards(new RolesGuard(new Reflector()));

  if (process.env.NODE_ENV !== 'production')
  {
    const config = new DocumentBuilder()
      .setTitle('MemoSphere API')
      .setDescription('The API for MemoSphere.')
      .setVersion('1.0')
      .addBearerAuth(
        {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      )
      .build();
    const document = SwaggerModule.createDocument(app, config);

    // Middleware for Swagger Basic Authentication
    app.use('/api', (req, res, next) =>
    {
      const auth = {
        login: process.env.SWAGGER_USER,
        password: process.env.SWAGGER_PASSWORD,
      };

      const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
      const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

      if (login && password && login === auth.login && password === auth.password)
      {
        return next();
      }

      res.set('WWW-Authenticate', 'Basic realm="401"');
      res.status(401).send('Authentication required.');
    });

    SwaggerModule.setup('api', app, document);
  }

  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
}

bootstrap();