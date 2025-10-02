import { Injectable } from '@nestjs/common';
import { CreateRecipientSocialDto } from './dto/create-recipient_social.dto';
import { UpdateRecipientSocialDto } from './dto/update-recipient_social.dto';
import { InjectModel } from '@nestjs/sequelize';
import { RecipientSocial } from './model/recipient_social.model';

@Injectable()
export class RecipientSocialService {
constructor(@InjectModel(RecipientSocial)private readonly recipientSocial: typeof RecipientSocial){}


  create(createRecipientSocialDto: CreateRecipientSocialDto) {
    this.recipientSocial.create(createRecipientSocialDto)
  }

  findAll() {
    return this.recipientSocial.findAll()
  }

  async findOne(id: number) {
    const recipient = await this.recipientSocial.findByPk(id)
    if (!recipient) {
      return "not found such a recipient"
    }
    return recipient
  }

async   update(id: number, updateRecipientSocialDto: UpdateRecipientSocialDto) {
    const [count, row] = await this.recipientSocial.update(updateRecipientSocialDto,
      {
        where: { id },
        returning: true
      })
    return row[0]
  }

  async remove(id: number) {
    const deleted = await this.recipientSocial.destroy({ where: { id } });
    if (!deleted) {
      return { message: "not found this kind of id" }
    }
    return { message: `deleted id:${id} ` }
  }
}
