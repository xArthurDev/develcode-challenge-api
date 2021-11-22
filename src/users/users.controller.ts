/* eslint-disable prettier/prettier */
import { UsersService } from './users.service';
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { User } from './users.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  index(): Promise<User[]> {
    return this.usersService.getAllUsers();
  }

  @Post('create')
  async createUser(@Body() userData: User): Promise<any> {
    return this.usersService.createUser(userData);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getUserDetails(@Param('id') id): Promise<any> {
    return this.usersService.getUserDetails(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put('update/:id')
  async updateUser(@Param('id') id, @Body() userData: User): Promise<any> {
    return this.usersService.updateUser(userData);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('delete/:id')
  async deleteUser(@Param('id') id): Promise<any> {
    return this.usersService.deleteUser(id);
  }
}

