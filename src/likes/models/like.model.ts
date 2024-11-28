import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Product } from "../../products/models/product.model";
import { User } from "../../users/models/user.model";

interface ILikesCreatorAttr {
    productId: number;
    userId: number;
}

@Table({tableName: 'likes', timestamps: false})
export class Like extends Model<Like, ILikesCreatorAttr>{
    @ApiProperty({
       example: 1,
       description: "Like id" 
    })
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    id: number;

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
        example: 1,
        description: "User id (FK)" 
    })
    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER
    })
    userId: number;
    @BelongsTo(() => User)
    user: User;

}
