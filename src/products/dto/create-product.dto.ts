import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProductDto {
    @ApiProperty({
        example: "Hello",
        description: "Product title."
    })
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty({
        example: "Window",
        description: "Product sub title."
    })
    @IsString()
    @IsNotEmpty()
    sub_title: string;

    @ApiProperty({
        example: 12000,
        description: "Product price."
    })
    @IsNumber()
    @IsNotEmpty()
    price: number;

    @ApiProperty({
        example: "The product is of high quality",
        description: "Product destciption."
    })
    @IsString()
    @IsNotEmpty()
    destciption: string;

    @ApiProperty({
        example: 1,
        description: "Category id (FK)."
    })
    @IsNumber()
    @IsNotEmpty()
    categoryId: number;
}
