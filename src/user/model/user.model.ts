import { Column, DataType, Model, Table } from "sequelize-typescript"

interface IUserAttr {
    full_name: string
    email: string
    password: string
    card_number: string
    is_active: boolean
    token: string
}

@Table({tableName: "User"})
export class User extends Model<User, IUserAttr> {
    
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
            type: DataType.STRING,
            allowNull: false
        })
        declare card_number: string
    
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
    

