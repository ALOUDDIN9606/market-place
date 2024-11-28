import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Like } from "../../likes/models/like.model";
import { Order } from "../../orders/models/order.model";
import { CardsOfUser } from "../../cards_of_user/models/cards_of_user.model";
import { Basket } from "../../baskets/models/basket.model";

interface IUserCreatedAttr {
    first_name: string;
    last_name: string;
    phone: string;
    email:string;
    username: string;
    hashed_password: string;
    address: string;
}

@Table({tableName: "Users", timestamps: false})
export class User extends Model<User, IUserCreatedAttr>{
    @ApiProperty({
        example: 1,
        description: "User id"
    })
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    id: number;

    @ApiProperty({
        example: "Alouddin",
        description: "User first name"
    })
    @Column({
        type: DataType.STRING
    })
    first_name: string;

    @ApiProperty({
        example: "Xonimqulov",
        description: "User last name"
    })
    @Column({
        type: DataType.STRING
    })
    last_name: string;

    @ApiProperty({
        example: "+998997770011",
        description: "User phone"
    })
    @Column({
        type: DataType.STRING
    })
    phone: string;

    @ApiProperty({
        example: "user123@gmail.com",
        description: "User email"
    })
    @Column({
        type: DataType.STRING
    })
    email:string;

    @ApiProperty({
        example: "newuser@123",
        description: "User username"
    })
    @Column({
        type: DataType.STRING
    })
    username: string;

    @ApiProperty({
        example: "",
        description: "User hashed password"
    })
    @Column({
        type: DataType.STRING
    })
    hashed_password: string;

    @ApiProperty({
        example: "Tosjkent sh Chilonzor t",
        description: "User address"
    })
    @Column({
        type: DataType.STRING
    })
    address: string;

    @HasMany(() => Like)
    like: Like[];

    @HasMany(() => Order)
    order: Order[];

    @HasMany(() => CardsOfUser)
    cardofuser: CardsOfUser[];

    @HasMany(() => Basket)
    basket: Basket[];
}
