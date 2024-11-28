import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateLikeDto {
    @ApiProperty({
        example: 1,
        description: "Product id (FK)"
    })
    @IsNumber()
    @IsNotEmpty()
    productId: number;

    @ApiProperty({
        example: 1,
        description: "User id (FK)"
    })
    @IsNumber()
    @IsNotEmpty()
    userId: number;
}
