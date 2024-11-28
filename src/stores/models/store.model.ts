import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Category } from "../../caregories/models/caregory.model";

interface IStoresAttr {
    name: string;
    image: string;
    phone: string;
    location: string;
}

@Table({tableName: 'stores', timestamps: false})
export class Store extends Model<Store, IStoresAttr> {
    @ApiProperty({
        example: 1, 
        description: "Store ID."
    })
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    id: number;

    @ApiProperty({
        example: "Market", 
        description: "Store name."
    })
    @Column({
        type: DataType.STRING
    })
    name: string;

    @Column({
        type: DataType.STRING
    })
    image: string;

    @ApiProperty({
        example: "+998991002030", 
        description: "Store phone."
    })
    @Column({
        type: DataType.STRING
    })
    phone: string;

    @ApiProperty({
        example: "Toshkent sh Chilonzor t", 
        description: "Store location."
    })
    @Column({
        type: DataType.STRING
    })
    location: string;

    @HasMany(() => Category)
    category: Category[];
}
