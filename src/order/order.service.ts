import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Order } from './model/order.model';

@Injectable()
export class OrderService {
  constructor(@InjectModel(Order) private readonly orederModel: typeof Order) { }
  create(createOrderDto: CreateOrderDto) {
    return this.orederModel.create(createOrderDto)
  }

  findAll() {
    return this.orederModel.findAll()
  }

  async findOne(id: number) {
    const order = await this.orederModel.findByPk(id)
    if (!order) {
      return "not found such a order"
    }
    return order
  }

  async  update(id: number, updateOrderDto: UpdateOrderDto) {
    const [count, row] = await this.orederModel.update(updateOrderDto,
      {
        where: { id },
        returning: true
      })
    return row[0]
  }

  async  remove(id: number) {
    const deleted = await this.orederModel.destroy({ where: { id } });
    if (!deleted) {
      return { message: "not found this kind of id" }
    }
    return { message: `deleted id:${id} ` }
  }
}
