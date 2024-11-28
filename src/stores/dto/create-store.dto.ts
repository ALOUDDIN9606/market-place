import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateStoreDto {
    @ApiProperty({
        example: "Market", 
        description: "Store name"
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    image: string;

    @ApiProperty({
        example: "+998991002030", 
        description: "Store photo."
    })
    @IsString()
    @IsNotEmpty()
    phone: string;

    @ApiProperty({
        example: "Toshkent sh Chilonzor t", 
        description: "Store location."
    })
    @IsString()
    @IsNotEmpty()
    location: string;
}
