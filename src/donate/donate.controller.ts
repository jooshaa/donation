import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { DonateService } from './donate.service';
import { CreateDonateDto } from './dto/create-donate.dto';
import { UpdateDonateDto } from './dto/update-donate.dto';
import { JwtAuthGuard } from '../common/guards/token.guard';

@Controller('donate')
export class DonateController {
  constructor(private readonly donateService: DonateService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createDonateDto: CreateDonateDto) {
    return this.donateService.create(createDonateDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.donateService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.donateService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDonateDto: UpdateDonateDto) {
    return this.donateService.update(+id, updateDonateDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.donateService.remove(+id);
  }
}
