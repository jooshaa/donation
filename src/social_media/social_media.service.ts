import { Injectable } from '@nestjs/common';
import { CreateSocialMediaDto } from './dto/create-social_media.dto';
import { UpdateSocialMediaDto } from './dto/update-social_media.dto';
import { InjectModel } from '@nestjs/sequelize';
import { SocialMedia } from './model/social_media.model';

@Injectable()
export class SocialMediaService {
constructor(@InjectModel(SocialMedia) private readonly socialMedia: typeof SocialMedia){}

  create(createSocialMediaDto: CreateSocialMediaDto) {
    return this.socialMedia.create(createSocialMediaDto)
  }

  findAll() {
    return this.socialMedia.findAll();
  }

async findOne(id: number) {
    const socialMedia = await this.socialMedia.findByPk(id)
    if (!socialMedia) {
      return "not found such a socialMedia"
    }
    return socialMedia
  
  }

  async update(id: number, updateSocialMediaDto: UpdateSocialMediaDto) {
    const [count, row] = await this.socialMedia.update(updateSocialMediaDto,
      {
        where: { id },
        returning: true
      })
    return row[0]
  }

async  remove(id: number) {
  const deleted = await this.socialMedia.destroy({ where: { id } });
  if (!deleted) {
    return { message: "not found this kind of id" }
  }
  return { message: `deleted id:${id} ` }
  }
}
