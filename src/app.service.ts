import { Injectable, OnModuleInit } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserService } from './user/user.service';

@Injectable()
export class AppService implements OnModuleInit
{
  constructor(private readonly userService: UserService) { }

  async onModuleInit()
  {
    const username = process.env.ADMIN_USERNAME;
    const password = process.env.ADMIN_PASSWORD;

    if (!username || !password)
    {
      console.error('ADMIN_USERNAME and ADMIN_PASSWORD must be set!');
      return;
    }

    const existingUser = await this.userService.findByUsername(username);

    if (!existingUser)
    {
      const hashedPassword = await bcrypt.hash(password, 10);
      await this.userService.create({
        username,
        password: hashedPassword,
        roles: ['admin'],
      });
      console.log(`Admin user "${username}" has been created.`);
    }
    else
    {
      const hashedPassword = await bcrypt.hash(password, 10);
      await this.userService.updatePassword(username, hashedPassword); //? Update password if it exists
      console.log(`Admin user "${username}" already exists. Password has been updated.`);
    }
  }

}