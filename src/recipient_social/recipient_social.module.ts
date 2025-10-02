import { Module } from '@nestjs/common';
import { RecipientSocialService } from './recipient_social.service';
import { RecipientSocialController } from './recipient_social.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { RecipientSocial } from './model/recipient_social.model';

@Module({
  imports:[SequelizeModule.forFeature([RecipientSocial])],
  controllers: [RecipientSocialController],
  providers: [RecipientSocialService],
})
export class RecipientSocialModule {}
