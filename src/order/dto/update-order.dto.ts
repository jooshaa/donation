import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';
import { OrderStatus } from '../model/enum_orders';


export class UpdateOrderDto extends PartialType(CreateOrderDto) {
    location: string
    userId: number
    shopId: number
    status: OrderStatus
}
