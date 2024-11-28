import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateOrderDto {
    @ApiProperty({
        example: 1,
        description: "User id (FK)"
    })
    @IsNumber()
    @IsNotEmpty()
    userId: number;

    @ApiProperty({
        example: 1,
        description: "Product id (FK)"
    })
    @IsNumber()
    @IsNotEmpty()
    productId: number;

    @ApiProperty({
        example: "1",
        description: "Orders amount"
    })
    @IsString()
    @IsNotEmpty()
    amount: string;

    @ApiProperty({
        example: 12000,
        description: "Orders total price"
    })
    @IsNumber()
    @IsNotEmpty()
    total_price: number;

    @ApiProperty({
        example: "2024-10-10",
        description: "Orders date_of_order"
    })
    @IsString()
    @IsNotEmpty()
    date_of_order: string;

    @ApiProperty({
        example: "Card",
        description: "Orders payment_type"
    })
    @IsNotEmpty()
    payment_type: string;
}
