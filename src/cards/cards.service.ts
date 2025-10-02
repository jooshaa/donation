import { Injectable } from '@nestjs/common';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { Card } from './models/card.models';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CardsService {
  constructor(@InjectModel(Card) private readonly cardModel: typeof Card) { }

  create(createCardDto: CreateCardDto) {
    return this.cardModel.create(createCardDto);
  }

  findAll() {
    return this.cardModel.findAll();
  }

async findOne(id: number) {
    const card = await this.cardModel.findByPk(id)
    if (!card) {
      return "not found such a card"
    }
    return card
  }

async update(id: number, updateCardDto: UpdateCardDto) {
  const [count, row] = await this.cardModel.update(updateCardDto,
    {
      where: { id },
      returning: true
    })
  return row[0]
  }

  async remove(id: number) {
    const deleted = await this.cardModel.destroy({ where: { id } });
    if (!deleted) {
      return { message: "not found this kind of id" }
    }
    return { message: `deleted id:${id} ` }
  }
}

