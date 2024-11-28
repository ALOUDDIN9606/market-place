import { Injectable } from '@nestjs/common';
import { CreateBasketDto } from './dto/create-basket.dto';
import { UpdateBasketDto } from './dto/update-basket.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Basket } from './models/basket.model';

@Injectable()
export class BasketsService {
  constructor(@InjectModel(Basket) private basketModel: typeof Basket){}
  create(createBasketDto: CreateBasketDto) {
    return this.basketModel.create(createBasketDto);
  }

  findAll() {
    return this.basketModel.findAll({include: {all:true}});
  }

  findOne(id: number) {
    return this.basketModel.findOne({where: {id}});
  }

  async update(id: number, updateBasketDto: UpdateBasketDto):Promise<Basket> {
    const baskets = await this.basketModel.update(updateBasketDto, {
      where: {id},
      returning: true
    })
    return baskets[1][0];
  }

  remove(id: number) {
    return this.basketModel.destroy({where: {id}});
  }
}
