import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { RecipientSocialService } from './recipient_social.service';
import { CreateRecipientSocialDto } from './dto/create-recipient_social.dto';
import { UpdateRecipientSocialDto } from './dto/update-recipient_social.dto';
import { JwtAuthGuard } from '../common/guards/token.guard';

@Controller('recipient-social')
export class RecipientSocialController {
  constructor(private readonly recipientSocialService: RecipientSocialService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createRecipientSocialDto: CreateRecipientSocialDto) {
    return this.recipientSocialService.create(createRecipientSocialDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.recipientSocialService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recipientSocialService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecipientSocialDto: UpdateRecipientSocialDto) {
    return this.recipientSocialService.update(+id, updateRecipientSocialDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recipientSocialService.remove(+id);
  }
}
