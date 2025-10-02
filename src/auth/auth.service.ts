import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from "bcrypt"
import { CreateAdminDto } from '../admin/dto/create-admin.dto';
import { AdminService } from '../admin/admin.service';
import { SigninAdminDto } from '../admin/dto/singin-admin.dto';
import { JwtService } from '@nestjs/jwt';
import { Admin } from '../admin/model/admin.model';


@Injectable()
export class AuthService {
  constructor(private readonly adminService: AdminService,
    private readonly jwtservice: JwtService
  ){}

  private async generateToken(admin: Admin) {
    const paylod = {
      id: admin.id,
      email: admin.email,
      is_creator: admin.is_creator
    }
    return { token: this.jwtservice.sign(paylod) }
  }
  
  async signup(createAdminDto: CreateAdminDto) {
    const candidate = await this.adminService.findByEmail(createAdminDto.email)

    if(candidate){
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
    const Password = await bcrypt.compare(signinAuthDto.password, admin.password)
    if(!Password){
      throw new UnauthorizedException("password or email is wrong");
    }
    return this.generateToken(admin);
  }
}
