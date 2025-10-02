import { AllowNull, BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { Recipient } from "../../recipient/model/recipient.model"

interface ICardAttr {
    card_type: string
    card_number: string
    recipientId: number
    expirty_date: string
}

@Table({ tableName: "Card" })
export class Card extends Model<Card, ICardAttr> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    declare id: number

    @Column({
        type: DataType.STRING(20),
        allowNull: false
    })
    declare card_type: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    declare card_number: string
    
    @ForeignKey(()=>Recipient)
    @Column({
        type: DataType.INTEGER,
    })
    declare recipientId: number

    @BelongsTo(()=>Recipient)
    recipient: Recipient;

    @Column({
        type: DataType.STRING(5),
        allowNull: false
    })
    declare expirty_date: string
}
