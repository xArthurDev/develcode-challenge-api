/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { User } from './users.entity';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async getAllUsers(): Promise<any[]> {
    const users = await this.usersRepository.find();
    return users.map(({ password, ...content }) => content)
  }

  async createUser(user: User): Promise<Object> {
    const userId = Math.floor(Math.random() * 10000);
    const hashedPassword = await bcrypt.hash(user.password, 10)
    user = {
      ...user,
      id: userId,
      password: hashedPassword
    };
    await this.usersRepository.save(user);
    const { password, ...content } = user;
    return content;
  }

  async updateUser(user: any): Promise<UpdateResult> {
    user = await this.usersRepository.update(user.id, user);
    const { password, ...content } = user;
    return content;
  }

  async deleteUser(id: string): Promise<DeleteResult> {
    return await this.usersRepository.delete(id);
  }

  async getUserDetailsByUsername(username: string): Promise<any | undefined> {
    const user = await this.usersRepository.findOne({ username });
    const { password, ...content } = user;
    return content;
  }

  async getUserDetails(id: string) {
    const user = await this.usersRepository.findOne(id)
    const { password, ...content } = user;
    return content;
  }
}
