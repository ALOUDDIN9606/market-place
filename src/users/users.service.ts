import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userModel: typeof User){}
  create(createUserDto: CreateUserDto) {
    return this.userModel.create(createUserDto);
  }

  findUserByEmail(email: string){
    return this.userModel.findOne({
      where: {email},
      include: {
        all:true,
        attributes: ["value"],
        through: {attributes: []}
      }
    });
  }

  findAll() {
    return this.userModel.findAll({include: {all:true}});
  }

  findOne(id: number) {
    return this.userModel.findOne({where: {id}});
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const users = await this.userModel.update(updateUserDto, {
      where: {id},
      returning: true
    })
    return users[1][0];
  }

  remove(id: number) {
    return this.userModel.destroy({where: {id}});
  }
}
