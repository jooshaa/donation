import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './model/category.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CategoryService {
  constructor(@InjectModel(Category) private readonly categoryModel: typeof Category) { }
  create(createCategoryDto: CreateCategoryDto) {
    return this.categoryModel.create(createCategoryDto)
  }

  findAll() {
    return this.categoryModel.findAll()
  }

  async findOne(id: number) {
    const category = await this.categoryModel.findByPk(id)
    if (!category) {
      return "not found such a category"
    }
    return category
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const [count, row] = await this.categoryModel.update(updateCategoryDto,
      {
        where: { id },
        returning: true
      })
    return row[0]
  }

  async remove(id: number) {
    const deleted = await this.categoryModel.destroy({ where: { id } });
    if (!deleted) {
      return { message: "not found this kind of id" }
    }
    return { message: `deleted id:${id} ` }
  }
}
