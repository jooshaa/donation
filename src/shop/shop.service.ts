import { Injectable } from '@nestjs/common';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Shop } from './model/shop.model';

@Injectable()
export class ShopService {
  constructor(@InjectModel(Shop) private readonly shopModel: typeof Shop){}
  create(createShopDto: CreateShopDto) {
    return this.shopModel.create(createShopDto)
  }

  findAll() {
    return this.shopModel.findAll()
  }

  async findOne(id: number) {
    const shop = await this.shopModel.findByPk(id)
    if (!shop) {
      return "not found such a shop"
    }
    return shop
  }

  async  update(id: number, updateShopDto: UpdateShopDto) {
    const [count, row] = await this.shopModel.update(updateShopDto,
      {
        where: { id },
        returning: true
      })
    return row[0]
  }

  async remove(id: number) {
    const deleted = await this.shopModel.destroy({ where: { id } });
    if (!deleted) {
      return { message: "not found this kind of id" }
    }
    return { message: `deleted id:${id} ` }
  }
}
