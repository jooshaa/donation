import { AllowNull, BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { Recipient } from "../../recipient/model/recipient.model"
import { Category } from "../../category/model/category.model"

interface IShopAttr {
    name: string
    count: number
    price: number
    title: string
    recipientId: number
    categoryId: number
    description: string
}

@Table({ tableName: "Shop" })
export class Shop extends Model<Shop, IShopAttr> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    declare id: number

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    declare name: string


    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    declare count: number

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    declare price: number

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    declare title: string

    @ForeignKey(() => Recipient)
    @Column({
        type: DataType.INTEGER,
    })
    declare recipientId: number

    @BelongsTo(() => Recipient)
    recipient: Recipient;


    @ForeignKey(() => Category)
    @Column({
        type: DataType.INTEGER,
    })
    declare categoryId: number

    @BelongsTo(() => Category)
    category: Category;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    declare description: string



}
