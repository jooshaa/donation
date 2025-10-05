import { PartialType } from '@nestjs/mapped-types';
import { CreateShopDto } from './create-shop.dto';

export class UpdateShopDto extends PartialType(CreateShopDto) {
    name: string
    count: number
    price: number
    title: string
    recipientId: number
    categoryId: number
    description: string
}
