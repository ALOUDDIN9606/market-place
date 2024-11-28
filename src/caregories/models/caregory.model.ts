import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Store } from "../../stores/models/store.model";
import { Product } from "../../products/models/product.model";

interface ICategoriesAttr {
    type: string;
    image: string;
    storeId: number;
}


@Table({ tableName: 'categores', timestamps: false})
export class Category extends Model<Category, ICategoriesAttr> {
    @ApiProperty({
        example: 1,
        description: "Unical ID (autoIncrement)"
    })
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    id: number;

    @ApiProperty({
        example: "type",
        description: "Categories type"
    })
    @Column({
        type: DataType.STRING
    })
    type: string;

    @Column({
        type: DataType.STRING
    })
    image: string

    @ApiProperty({
        example: "store id",
        description: "store id"
    })
    @ForeignKey(() => Store)
    @Column({
        type: DataType.INTEGER
    })
    storeId: number;

    @BelongsTo(() => Store)
    store: Store;

    @HasMany(() => Product)
    product: Product[];
}
