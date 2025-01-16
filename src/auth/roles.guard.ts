import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate
{
    constructor(private reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean
    {
        const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler());
        if (!requiredRoles)
        {
            return true; //* No specific 'Roles' needed :>
        }

        const request = context.switchToHttp().getRequest();
        const user = request.user;

        if (!user || !user.roles.some((role: string) => requiredRoles.includes(role)))
        {
            throw new ForbiddenException('You do not have permission (roles) to access this resource.');
        }

        return true;
    }

}