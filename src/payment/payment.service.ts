import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { Payment } from './model/payment.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class PaymentService {
  constructor(@InjectModel(Payment) private readonly paymentModel: typeof Payment){}
  create(createPaymentDto: CreatePaymentDto) {
    return this.paymentModel.create(createPaymentDto)
  }

  findAll() {
    return this.paymentModel.findAll()
  }

  async findOne(id: number) {
    const order = await this.paymentModel.findByPk(id)
    if (!order) {
      return "not found such a order"
    }
    return order
  }

  async update(id: number, updatePaymentDto: UpdatePaymentDto) {
    const [count, row] = await this.paymentModel.update(updatePaymentDto,
      {
        where: { id },
        returning: true
      })
    return row[0]
  }

  async remove(id: number) {
    const deleted = await this.paymentModel.destroy({ where: { id } });
    if (!deleted) {
      return { message: "not found this kind of id" }
    }
    return { message: `deleted id:${id} ` }
  }
}
