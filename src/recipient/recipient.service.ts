import { Injectable } from '@nestjs/common';
import { CreateRecipientDto } from './dto/create-recipient.dto';
import { UpdateRecipientDto } from './dto/update-recipient.dto';
import { Recipient } from './model/recipient.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class RecipientService {
  constructor(@InjectModel(Recipient) private readonly recipientModel: typeof Recipient) { }
  create(createRecipientDto: CreateRecipientDto) {
    return this.recipientModel.create(createRecipientDto)
  }

  findAll() {
    return this.recipientModel.findAll();
  }

  async findOne(id: number) {
    const recipient = await this.recipientModel.findByPk(id)
    if (!recipient) {
      return "not found such a recipient"
    }
    return recipient
  }


  async update(id: number, updateRecipientDto: UpdateRecipientDto) {
    const [count, row] = await this.recipientModel.update(updateRecipientDto,
      {
        where: { id },
        returning: true
      })
    return row[0]
  }

  async remove(id: number) {
    const deleted = await this.recipientModel.destroy({ where: { id } });
    if (!deleted) {
      return { message: "not found this kind of id" }
    }
    return { message: `deleted id:${id} ` }
  }
}
