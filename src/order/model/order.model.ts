import {  BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { User } from "../../user/model/user.model"
import { Shop } from "../../shop/model/shop.model"
import { OrderStatus } from "./enum_orders"




interface IOrder{
    location: string
    userId: number
    shopId: number
    status: OrderStatus
}

@Table({tableName: "Orders"})
export class Order extends Model<Order, IOrder> {

    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    declare id : number

    @Column({
        type: DataType.STRING,
    })
    declare location: string

    @ForeignKey(()=> User)
    @Column({
        type: DataType.INTEGER,
    })
    declare userId: number

    @BelongsTo(()=>User)
    user: User

    @ForeignKey(() => Shop)
    @Column({
        type: DataType.INTEGER,
    })
    declare shopId: number

    @BelongsTo(() => Shop)
    shop: Shop

    @Column({
        type: DataType.ENUM(...Object.values(OrderStatus)),
        defaultValue: OrderStatus.pending,

    })declare status: OrderStatus
}
