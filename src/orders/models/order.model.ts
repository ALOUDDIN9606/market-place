import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "../../users/models/user.model";
import { Product } from "../../products/models/product.model";

interface IOrdersCreatorAttr {
    userId: number;
    productId: number;
    amount: string;
    total_price: number;
    date_of_order: string;
    payment_type: string;
}

@Table({tableName: 'orders', timestamps: false})
export class Order extends Model<Order, IOrdersCreatorAttr>{
    @ApiProperty({
        example: 1,
        description: "Orders id"
    })
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    id: number;

    @ApiProperty({
        example: 1,
        description: "USer id (FK)"
    })
    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER
    })
    userId: number;
    @BelongsTo(() => User)
    user: User;

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

    @ApiProperty({
        example: "1",
        description: "Orders amount"
    })
    @Column({
        type: DataType.STRING
    })
    amount: string;

    @ApiProperty({
        example: 12000,
        description: "Orders total_price"
    })
    @Column({
        type: DataType.DECIMAL
    })
    total_price: number;

    @ApiProperty({
        example: "2024-10-10",
        description: "Orders date_of_order"
    })
    @Column({
        type: DataType.DATE
    })
    date_of_order: string;

    @ApiProperty({
        example: "Card",
        description: "Orders payment_type"
    })
    @Column({
        type: DataType.STRING
    })
    payment_type: string;
}
