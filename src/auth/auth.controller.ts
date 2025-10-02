import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninAdminDto } from '../admin/dto/singin-admin.dto';
import { CreateAdminDto } from '../admin/dto/create-admin.dto';




@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post("signup")
  signup(@Body() createAdminDto: CreateAdminDto) {
    return this.authService.signup(createAdminDto);
  }

  @Post("signin")
  signin(@Body() signinAuthDto: SigninAdminDto) {
    return this.authService.signin(signinAuthDto);
  }
}
