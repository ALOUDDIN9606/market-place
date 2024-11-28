import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateImagesOfProductDto {
    @ApiProperty({
        example: "url.jpg",
        description: "Image of product."
    })
    @IsString()
    @IsNotEmpty()
    image: string;

    @IsNumber()
    @IsNotEmpty()
    productId: number;
}
