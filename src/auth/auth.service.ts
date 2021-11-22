/* eslint-disable prettier/prettier */
import { UsersService } from './../users/users.service';

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string) {
    const user = await this.usersService.getUserDetailsByUsername(username);

    if (user) {
      const isPasswordMatch = await bcrypt.compare(pass, user.password)
      if (isPasswordMatch) {
        const { password, ...result } = user;
        return result;
      }
    }

    throw new HttpException('Incorrect password or username', HttpStatus.UNAUTHORIZED);
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
