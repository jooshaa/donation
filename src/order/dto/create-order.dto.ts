import { OrderStatus } from "../model/enum_orders"


export class CreateOrderDto {
    location: string
    userId: number
    shopId: number
    status: OrderStatus
}
