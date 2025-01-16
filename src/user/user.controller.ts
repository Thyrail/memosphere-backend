import { Controller, Get, Post, Patch, Body, Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@ApiBearerAuth()
@Controller('user')
@UseGuards(RolesGuard) //! Activate roles for the whole Controller!
export class UserController
{
    constructor(private readonly userService: UserService) { }

    @Get(':username')
    @Roles('admin')
    @ApiOperation({ summary: 'Find a user by username' })
    @ApiResponse({ status: 200, description: 'User found' })
    @ApiResponse({ status: 403, description: 'Forbidden' })
    findByUsername(@Param('username') username: string)
    {
        return this.userService.findByUsername(username);
    }

    @Post()
    @Roles('admin')
    @ApiOperation({ summary: 'Create a new user' })
    @ApiResponse({ status: 201, description: 'User created' })
    @ApiResponse({ status: 403, description: 'Forbidden' })
    createUser(@Body() user: { username: string; password: string; roles: string[] })
    {
        return this.userService.create(user);
    }

    @Patch(':username/password')
    @Roles('admin')
    @ApiOperation({ summary: 'Update user password' })
    @ApiResponse({ status: 200, description: 'Password updated' })
    @ApiResponse({ status: 403, description: 'Forbidden' })
    updatePassword(@Param('username') username: string, @Body('password') password: string)
    {
        return this.userService.updatePassword(username, password);
    }

}