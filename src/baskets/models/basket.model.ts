import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "../../users/models/user.model";
import { Product } from "../../products/models/product.model";

interface IBasketsCreatedAttr {
    productId: number;
    userId: number;
    amount: string;
}

@Table({tableName: "baskets", timestamps: false})
export class Basket extends Model<Basket, IBasketsCreatedAttr> {
    @ApiProperty({
        example: 1,
        description: "Baskets id."
    })
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    id: number;

    @ApiProperty({
        example: 1,
        description: "Product id (FK)."
    })
    @ForeignKey(() => Product)
    @Column({
        type: DataType.INTEGER
    })
    productId: number;
    @BelongsTo(() => Product)
    product: Product;

    @ApiProperty({
        example: 1,
        description: "Users id (FK)."
    })
    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER
    })
    userId: number;
    @BelongsTo(() => User)
    user: User;

    @ApiProperty({
        example: '123',
        description: "Baskets amount."
    })
    @Column({
        type: DataType.STRING
    })
    amount: string;
}
