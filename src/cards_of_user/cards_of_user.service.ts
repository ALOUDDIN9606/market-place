import { Injectable } from '@nestjs/common';
import { CreateCardsOfUserDto } from './dto/create-cards_of_user.dto';
import { UpdateCardsOfUserDto } from './dto/update-cards_of_user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { CardsOfUser } from './models/cards_of_user.model';

@Injectable()
export class CardsOfUserService {
  constructor(@InjectModel(CardsOfUser) private cardofuserModel: typeof CardsOfUser){}
  create(createCardsOfUserDto: CreateCardsOfUserDto) {
    return this.cardofuserModel.create(createCardsOfUserDto);
  }

  findAll() {
    return this.cardofuserModel.findAll({include: {all:true}});
  }

  findOne(id: number) {
    return this.cardofuserModel.findOne({where: {id}});
  }

  async update(id: number, updateCardsOfUserDto: UpdateCardsOfUserDto): Promise<CardsOfUser> {
    const card_of_user = await this.cardofuserModel.update(updateCardsOfUserDto, {
      where: {id},
      returning: true
    })
    return card_of_user[1][0];
  }

  remove(id: number) {
    return this.cardofuserModel.destroy({where: {id}});
  }
}
