import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript"

interface IAdminAttr{
    full_name: string
    email: string
    password: string
    is_creator: boolean
    is_active: boolean
    token: string
}

@Table({tableName: "Admin"})
export class Admin extends Model<Admin, IAdminAttr> {
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
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    declare is_creator: boolean

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    declare is_active: boolean

    @Column({
        type: DataType.STRING(200),
        allowNull: false
    })
    declare token: string
}
