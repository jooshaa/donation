import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { paymentMehtod } from "./enum_method"
import { User } from "../../user/model/user.model"
import { Donate } from "../../donate/model/donate.model"
import { Order } from "../../order/model/order.model"



interface IPayment {
    userId: number
    donateId: number
    orderId: number
    payment_method: paymentMehtod
}

@Table({ tableName: "Payment" })
export class Payment extends Model<Payment, IPayment> {

    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    declare id: number

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
    })
    declare userId: number

    @BelongsTo(() => User)
    user: User

    @ForeignKey(() => Donate)
    @Column({
        type: DataType.INTEGER,
    })
    declare donateId: number

    @BelongsTo(() => Donate)
    donate: Donate


    @ForeignKey(() => Order)
    @Column({
        type: DataType.INTEGER,
    })
    declare orderId: number

    @BelongsTo(() => Order)
    order: Order

    @Column({
        type: DataType.ENUM(...Object.values(paymentMehtod)),
    }) declare status: paymentMehtod



}
