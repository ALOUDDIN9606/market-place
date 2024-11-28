import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";


export class CreateAdminDto {
    @ApiProperty({
        example: "Anvar", 
        description: "Admin username👤"
    })
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    username: string;

    @ApiProperty({
        example: "Anvar@123", 
        description: "Admin password👤."
    })
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    @MaxLength(20)
    password: string;

    @ApiProperty({
        example: "anvarchik1232@gmail.com", 
        description: "Admin email👤."
    })
    @IsEmail()
    email: string;
}