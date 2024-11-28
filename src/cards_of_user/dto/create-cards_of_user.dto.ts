import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCardsOfUserDto {
    @ApiProperty({
        example: '1234.7894.1235.7865',
        description: "Card number user."
    })
    @IsString()
    @IsNotEmpty()
    card_number: string;

    @ApiProperty({
        example: '12/24',
        description: "Card expire date user."
    })
    @IsString()
    @IsNotEmpty()
    expire_date: string;

    @ApiProperty({
        example: 'HAMKORBANK',
        description: "Card card name user."
    })
    @IsString()
    @IsNotEmpty()
    card_name: string;

    @ApiProperty({
        example: 1,
        description: "User id (FK)."
    })
    @IsNumber()
    @IsNotEmpty()
    userId: number;
}
