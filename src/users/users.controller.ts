import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) { }

    @Get(':id')
    getUserById(@Param('id') id: number): string {
        return this.usersService.getUserById(id);
    }

    @Post()
    addUser(@Body('name') name: string): string {
        return this.usersService.addUser(name);
    }

}
