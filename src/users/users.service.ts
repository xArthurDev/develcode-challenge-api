/* eslint-disable prettier/prettier */
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

  async getAllUsers(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async createUser(user: User): Promise<User> {
    const userId = Math.floor(Math.random() * 10000);
    const hashedPassword = await bcrypt.hash(user.password, 10)
    user = {
      ...user,
      id: userId,
      password: hashedPassword
    };
    return await this.usersRepository.save(user);
  }

  async updateUser(user: User): Promise<UpdateResult> {
    return await this.usersRepository.update(user.id, user);
  }

  async deleteUser(id: string): Promise<DeleteResult> {
    return await this.usersRepository.delete(id);
  }

  async getUserDetailsByUsername(username: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ username });
  }

  async getUserDetails(id: string) {
    return this.usersRepository.findOne(id)
  }
}
