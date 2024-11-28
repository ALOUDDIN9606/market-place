import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateBasketDto {
    @ApiProperty({
        example: 1,
        description: "Product id (FK)."
    })
    @IsNumber()
    @IsNotEmpty()
    productId: number;

    @ApiProperty({
        example: 1,
        description: "Users id (FK)."
    })
    @IsNumber()
    @IsNotEmpty()
    userId: number;

    @ApiProperty({
        example: '123',
        description: "Baskets amount."
    })
    @IsString()
    @IsNotEmpty()
    amount: string;
}
