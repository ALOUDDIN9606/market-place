import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Category } from "../../caregories/models/caregory.model";
import { Like } from "../../likes/models/like.model";
import { Order } from "../../orders/models/order.model";
import { Basket } from "../../baskets/models/basket.model";
import { ImagesOfProduct } from "../../images_of_product/models/images_of_product.model";

interface IProductsCreatedAttr {
    title: string;
    sub_title: string;
    price: number;
    destciption: string;
    categoryId: number;
}

@Table({ tableName: 'products', timestamps: false})
export class Product extends Model<Product, IProductsCreatedAttr> {
    @ApiProperty({
        example: 1,
        description: "Product id"
    })
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    id: number;

    @ApiProperty({
        example: "Flaves",
        description: "Product title."
    })
    @Column({
        type: DataType.STRING
    })
    title: string;

    @ApiProperty({
        example: "Flaves",
        description: "Product sub title."
    })
    @Column({
        type: DataType.STRING
    })
    sub_title: string;

    @ApiProperty({
        example: 12000,
        description: "Product price."
    })
    @Column({
        type: DataType.DECIMAL
    })
    price: number;

    @ApiProperty({
        example: "Flaves sweet tamle drink.",
        description: "Product destciption."
    })
    @Column({
        type: DataType.STRING
    })
    destciption: string;

    @ApiProperty({
        example: 1,
        description: "Category id (FK)."
    })
    @ForeignKey(() => Category)
    @Column({
        type: DataType.INTEGER
    })
    categoryId: number;
    @BelongsTo(() => Category)
    category: Category;

    @HasMany(() => Like)
    like: Like[];

    @HasMany(() => Order)
    order: Order[];

    @HasMany(() => Basket)
    basket: Basket[];

    @HasMany(() => ImagesOfProduct)
    imageofproduct: ImagesOfProduct[];
}
