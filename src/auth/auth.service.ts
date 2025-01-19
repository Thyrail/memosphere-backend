import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user/user.service';
import { User } from '../user/schemas/user.schema';

@Injectable()
export class AuthService
{
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
    ) { }

    //* Validates the user's credentials
    async validateUser(username: string, password: string): Promise<Partial<User>>
    {
        const user = await this.userService.findByUsername(username);

        if (!user)
        {
            throw new UnauthorizedException('Invalid username or password.');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid)
        {
            throw new UnauthorizedException('Invalid username or password.');
        }

        //* Return only necessary user fields
        return {
            // _id: user._id,
            username: user.username,
            roles: user.roles,
        };
    }

    //* Log in a user and generates a JWT token
    async login(username: string, password: string): Promise<{ accessToken: string }>
    {
        const validatedUser = await this.validateUser(username, password);

        //* Generate the JWT payload
        const payload = {
            username: validatedUser.username,
            // sub: validatedUser._id,
            roles: validatedUser.roles,
        };

        //* Create JWT token
        const accessToken = this.jwtService.sign(payload);

        return { accessToken };
    }


}