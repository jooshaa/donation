import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './model/admin.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class AdminService {
  constructor(@InjectModel(Admin) private readonly adminModel: typeof Admin) { }
  create(createAdminDto: CreateAdminDto) {
    return this.adminModel.create(createAdminDto);
  }

  findAll() {
    return this.adminModel.findAll();
  }

  async findOne(id: number) {
    const admin = await this.adminModel.findByPk(id)
    if (!admin) {
      return "not found such a admin"
    }
    return admin
  }
  

  async update(id: number, updateAdminDto: UpdateAdminDto) {
    const [count, row] = await this.adminModel.update(updateAdminDto,
      {
        where: { id },
        returning: true
      })
    return row[0]
  }

  async remove(id: number) {
    const deleted = await this.adminModel.destroy({ where: { id } });
    if (!deleted) {
      return { message: "not found this kind of id" }
    }
    return { message: `deleted id:${id} ` }
  }
}
