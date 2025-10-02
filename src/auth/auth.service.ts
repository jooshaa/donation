import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from "bcrypt"
import { CreateAdminDto } from '../admin/dto/create-admin.dto';
import { AdminService } from '../admin/admin.service';
import { SigninAdminDto } from '../admin/dto/singin-admin.dto';


@Injectable()
export class AuthService {
  constructor(private readonly adminService: AdminService,
    // private readonly jwtservice: JwtService
  ){}

  // private async genereteToken(user: User) {
  //   const paylod = {
  //     id: user.id,
  //     email: user.email,
  //     is_creator: user.roles
  //   }
  //   return { token: this.jwtservice.sign(paylod) }
  // }
  
  async signup(createAdminDto: CreateAdminDto) {
    const candidate = await this.adminService.findByEmail(createAdminDto.email)

    if(!candidate){
      throw new ConflictException("user already exists");
    }
    const hasedPass = await bcrypt.hash(createAdminDto.password, 7);
    createAdminDto.password = hasedPass

    const newUser = await this.adminService.create(createAdminDto)
    return newUser;

  }
  async signin(signinAuthDto: SigninAdminDto) {
    const admin = await this.adminService.findByEmail(signinAuthDto.email)
    if(!admin){
      throw new UnauthorizedException("password or email is wrong");
    }
    const Password = await bcrypt.compare(signinAuthDto.password)
    if(!Password){
      throw new UnauthorizedException("password or email is wrong");
    }
  }
  // return this.genereteToken(user);
}
