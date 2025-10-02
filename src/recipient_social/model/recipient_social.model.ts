import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { SocialMedia } from "../../social_media/model/social_media.model"
import { Recipient } from "../../recipient/model/recipient.model"

interface IRecipient_social {
    socialMediaId: number
    recipientId: number
    social_url: string

}

@Table({ tableName: "RecipientSocial" })
export class RecipientSocial extends Model<RecipientSocial, IRecipient_social> {

    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    declare id: number

    @ForeignKey(()=>SocialMedia)
    @Column({
        type: DataType.INTEGER
    })
    declare socialMedia: number;

    @ForeignKey(()=>Recipient)
    @Column({
        type: DataType.INTEGER
    })
    declare recipientId: number;

    @Column({
        type: DataType.STRING(2000)
    })
    declare social_url: string
}