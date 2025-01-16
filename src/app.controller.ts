import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController
{
  constructor(private readonly appService: AppService) { }

  @Get('protected-endpoint')
  @UseGuards(AuthGuard('jwt'))
  getProtectedData()
  {
    return { message: 'You have access to the protected endpoint!' };
  }
}