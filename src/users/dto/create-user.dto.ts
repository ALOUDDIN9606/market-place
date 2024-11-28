import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @ApiProperty({
        example: "Alouddin",
        description: "User first name"
    })
    @IsString()
    @IsNotEmpty()
    first_name: string;

    @ApiProperty({
        example: "Xonimqulov",
        description: "User last name"
    })
    @IsString()
    @IsNotEmpty()
    last_name: string;

    @ApiProperty({
        example: "+998997770011",
        description: "User phone"
    })
    @IsString()
    @IsNotEmpty()
    phone: string;

    @ApiProperty({
        example: "user123@gmail.com",
        description: "User email"
    })
    @IsString()
    @IsNotEmpty()
    email:string;

    @ApiProperty({
        example: "newuser@123",
        description: "User username"
    })
    @IsString()
    @IsNotEmpty()
    username: string;

    @ApiProperty({
        example: "",
        description: "User hashed password"
    })
    hashed_password: string;

    @ApiProperty({
        example: "Tosjkent sh Chilonzor t",
        description: "User address"
    })
    @IsString()
    @IsNotEmpty()
    address: string;
}
