/* eslint-disable prettier/prettier */
import { UsersService } from './users.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { User } from './users.entity';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get()
    index(): Promise<User[]> {
        return this.usersService.getAllUsers()
    }

    @Post('create')
    async createUser(@Body() userData: User): Promise<any> {
        return this.usersService.createUser(userData)
    }

    @Put('update/:id')
    async updateUser(@Param('id') id, @Body() userData: User): Promise<any> {
        return this.usersService.updateUser(userData)
    }

    @Delete('delete/:id')
    async deleteUser(@Param('id') id): Promise<any> {
        return this.usersService.deleteUser(id)
    }
}
