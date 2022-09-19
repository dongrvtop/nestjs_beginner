import { Controller, Get, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from '../auth/Decorator';
import { JwtGuard } from '../auth/Guard';

@Controller('users')
export class UserController {
    @UseGuards(JwtGuard)
    @Get('me')
    getMe(@GetUser() user: User){
        return user;
    }
}
