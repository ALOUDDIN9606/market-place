import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "../../users/models/user.model";

interface ICard_of_UserAttr {
    card_number: string;
    expire_date: string;
    card_name: string;
    userId: number;
}

@Table({tableName: "card_of_user", timestamps: false})
export class CardsOfUser extends Model<CardsOfUser, ICard_of_UserAttr>{
    @ApiProperty({
        example: 1,
        description: "Card id user."
    })
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    id: number;

    @ApiProperty({
        example: '1234.7894.1235.7865',
        description: "Card number user."
    })
    @Column({
        type: DataType.STRING
    })
    card_number: string;

    @ApiProperty({
        example: '12/24',
        description: "Card expire date user."
    })
    @Column({
        type: DataType.STRING
    })
    expire_date: string;

    @ApiProperty({
        example: 'HAMKORBANK',
        description: "Card card name user."
    })
    @Column({
        type: DataType.STRING
    })
    card_name: string;

    @ApiProperty({
        example: 1,
        description: "User id (FK)."
    })
    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER
    })
    userId: number;
    @BelongsTo(() => User)
    user: User;
}
