import { Controller, Post, Body, HttpCode, HttpStatus, Res, Response } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { SigninDto } from './dto/signin.dto';

@ApiTags("AUTH")
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({summary: "New user registration"})
  @ApiResponse({
    status: 201,
    description: "Registered user.",
    type: String
  })
  @Post('signup')
  async signUn(@Body() createUserDto: CreateUserDto){
    return this.authService.signUp(createUserDto);
  }

  @ApiOperation({summary: "Login to the system."})
  @HttpCode(HttpStatus.OK)
  @Post('signin')
  async signIp(@Body() signInDto: SigninDto){
    return this.authService.signIn(signInDto);
  }

  

}
