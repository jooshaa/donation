import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { RecipientService } from './recipient.service';
import { CreateRecipientDto } from './dto/create-recipient.dto';
import { UpdateRecipientDto } from './dto/update-recipient.dto';
import { JwtAuthGuard } from '../common/guards/token.guard';

@Controller('recipient')
export class RecipientController {
  constructor(private readonly recipientService: RecipientService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createRecipientDto: CreateRecipientDto) {
    return this.recipientService.create(createRecipientDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.recipientService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recipientService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecipientDto: UpdateRecipientDto) {
    return this.recipientService.update(+id, updateRecipientDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recipientService.remove(+id);
  }
}
