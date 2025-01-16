import { Module } from '@nestjs/common';
import { AppController } from '../app.controller';
import { AppService } from '../app.service';
import { AuthModule } from '../auth/auth.module';
import { ProtectedController } from './protected.controller';
import { UserModule } from 'src/user/user.module';

@Module({
    imports: [
        AuthModule,
        UserModule
    ],
    controllers: [ProtectedController],
    providers: [],
})

export class ProtectedModule { }