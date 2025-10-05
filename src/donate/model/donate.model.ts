import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { Recipient } from "../../recipient/model/recipient.model"
import { User } from "../../user/model/user.model"

interface IDonate {
    recipientId: number
    userId: number
    notification: string
    is_anonimPay: boolean
}

@Table({ tableName: "Donate" })
export class Donate extends Model<Donate, IDonate> {

    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    declare id: number

    @ForeignKey(() => Recipient)
    @Column({
        type: DataType.INTEGER,
    })
    declare recipientId: number

    @BelongsTo(() => Recipient)
    recipient: Recipient;

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
    })
    declare userId: number

    @BelongsTo(() => User)
    user: User

    @Column({
        type: DataType.STRING(2000),
    })
    declare location: string

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    declare is_anonimPay: boolean

}
