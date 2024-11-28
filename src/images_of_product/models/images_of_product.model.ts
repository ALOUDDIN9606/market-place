import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Product } from "../../products/models/product.model";


interface IImageOfProductAttr {
    image: string;
    productId: number;
}

@Table({ tableName: "image_of_product", timestamps: false})
export class ImagesOfProduct extends Model<ImagesOfProduct, IImageOfProductAttr> {
    @ApiProperty({
        example: 1, 
        description: "Iamge of Product id."
    })
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    id: number;

    @Column({
        type: DataType.STRING
    })
    image: string;

    @ApiProperty({
        example: 1, 
        description: "Product id (FK)"
    })
    @ForeignKey(() => Product)
    @Column({
        type: DataType.INTEGER
    })
    productId: number;
    @BelongsTo(() => Product)
    product: Product;
}
