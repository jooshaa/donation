
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { RecipientSocial } from "../../recipient_social/model/recipient_social.model";

interface ISocialMediaAttr {
    social_media: string
    iconic_url: string
}

@Table({ tableName: "socialMedia" })
export class SocialMedia extends Model<SocialMedia, ISocialMediaAttr> {

    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    declare id: number

    @Column({
        type: DataType.STRING(50),
        allowNull: false
    })
    declare social_media : string

    @Column({
        type: DataType.STRING(2000),
        allowNull: false
    })
    declare iconic_url: string
     
    @HasMany(()=>RecipientSocial)
    recipientSocial: RecipientSocial[]

}
