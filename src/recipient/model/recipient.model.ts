
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript"
import { Card } from "../../cards/models/card.models"

interface IRecipient {
    full_name: string
    email: string
    password: string
    address: string
    token: string
}



@Table({tableName: "Recipient"})
export class Recipient extends Model<Recipient, IRecipient> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    declare id:number

    @Column({
        type: DataType.STRING(100),
        allowNull: false
    })
    declare full_name: string

    @Column({
        type: DataType.STRING(200),
        allowNull: false
    })
    declare email: string

    @Column({
        type: DataType.STRING(200),
        allowNull: false
    })
    declare password: string

    @Column({
        type: DataType.STRING(500),
        defaultValue: false
    })
    declare address: string

    @Column({
        type: DataType.STRING(200),
        allowNull: false
    })
    declare token: string

    @HasMany(()=> Card)
    card: Card[]
}

