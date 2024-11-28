import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UpdateUserDto } from '../users/dto/update-user.dto';

import * as bcrypt from "bcrypt";
import {JwtService} from "@nestjs/jwt";
import { UsersService } from '../users/users.service';
import { User } from '../users/models/user.model';
import { SigninDto } from './dto/signin.dto';


@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ){}
  
  async signUp(creatorUserDto: CreateUserDto){
    const candidate = await this.userService.findUserByEmail(creatorUserDto.email);

    if(candidate){
      throw new BadRequestException("Such a user exists.");
    }

    const hashedUsername = await bcrypt.hash(creatorUserDto.username, 7);
    const newUser = await this.userService.create({ ...creatorUserDto, hashed_password: hashedUsername});

    return this.generationToken(newUser);

  }

  async signIn(signInDto: SigninDto){
    const user = await this.userService.findUserByEmail(signInDto.email);

    if(!user){
      throw new BadRequestException("User not fount.")
    }

    const validUsername = await bcrypt.compare(
      signInDto.username,
      user.username
    )

    if(!validUsername){
      throw new UnauthorizedException("User not found")
    }

    return this.generationToken(user);
  }

  async generationToken(user: User){
    const payload = {
      sub: user.id,
      email: user.email,
      username: user.username
    };
    return {token: this.jwtService.sign(payload)};
  }

}
