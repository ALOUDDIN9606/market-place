import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IAdminAttributes {
    role: string;
    username: string;
    hashed_password: string;
    email: string;
}

@Table({ tableName: 'admin' })
export class Admin extends Model<Admin, IAdminAttributes> {
    @ApiProperty({
        example: 1,
        description: "Foydalanuvchining unical ID raqami (autoIncrement)"
    })
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    })
    id: string;

    @ApiProperty({
        example: "ADMIN",
        description: "Admin role"
    })
    @Column({
        type: DataType.ENUM('superadmin', 'admin'),
        allowNull: false,
        defaultValue: 'admin'
    })
    role: string;

    @ApiProperty({
        example: "Anvar",
        description: "Admin username"
    })
    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    username: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    hashed_password: string;

    @ApiProperty({
        example: "anvarchik1232@gmail.com",
        description: "Admin email"
    })
    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    email: string;
}