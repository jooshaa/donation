import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ICategoryAttr{
    name: string
}

@Table({tableName: "Category"})
export class Category extends Model<Category, ICategoryAttr>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    declare id : number

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    declare name    : string
}
