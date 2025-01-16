import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';

@Controller('auth')
@ApiTags('Auth')
export class AuthController
{
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    @ApiOperation({ summary: 'Login' })
    @ApiBody({
        description: 'Provide username and password',
        schema: {
            type: 'object',
            properties: {
                username: { type: 'string', example: 'name' },
                password: { type: 'string', example: 'secure-password' },
            },
        },
    })
    @ApiResponse({ status: 201, description: 'Successfully logged in' })
    @ApiResponse({ status: 401, description: 'Invalid login credentials' })
    async login(@Body() body: { username: string; password: string })
    {
        const result = await this.authService.login(body.username, body.password);
        return result;
    }
}