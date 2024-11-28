import { IsString } from "class-validator";
import { IsEmail } from "sequelize-typescript";

export class SigninDto {
    @IsString()
    readonly email: string;

    @IsString()
    readonly username: string;
}
