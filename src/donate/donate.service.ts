import { Injectable } from '@nestjs/common';
import { CreateDonateDto } from './dto/create-donate.dto';
import { UpdateDonateDto } from './dto/update-donate.dto';
import { Donate } from './model/donate.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class DonateService {
  constructor(@InjectModel(Donate) private readonly donateModel: typeof Donate) { }
  create(createDonateDto: CreateDonateDto) {
    return this.donateModel.create(createDonateDto)
  }

  findAll() {
    return this.donateModel.findAll()
  }

  async findOne(id: number) {
    const donate = await this.donateModel.findByPk(id)
    if (!donate) {
      return "not found such a donate"
    }
    return donate
  }

  async update(id: number, updateDonateDto: UpdateDonateDto) {
    const [count, row] = await this.donateModel.update(updateDonateDto,
      {
        where: { id },
        returning: true
      })
    return row[0]
  }

  async remove(id: number) {
    const deleted = await this.donateModel.destroy({ where: { id } });
    if (!deleted) {
      return { message: "not found this kind of id" }
    }
    return { message: `deleted id:${id} ` }
  }
}
