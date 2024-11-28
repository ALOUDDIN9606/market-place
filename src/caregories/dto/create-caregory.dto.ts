import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateCaregoryDto {
    @ApiProperty({
        example: "IT",
        description: "Caregories type"
    })
    @IsString()
    type: string;

    @IsString()
    @IsOptional()
    image: string;

    @ApiProperty({
        example: "Store ID",
        description: "Store ID"
    })
    @IsString()
    @IsNotEmpty()
    storeId: number;
}
