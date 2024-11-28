import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Order } from './models/order.model';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order) private ordersModel: typeof Order){}
  create(createOrderDto: CreateOrderDto) {
    return this.ordersModel.create(createOrderDto);
  }

  findAll() {
    return this.ordersModel.findAll({include: {all:true}});
  }

  findOne(id: number) {
    return this.ordersModel.findOne({where: {id}});
  }

  async update(id: number, updateOrderDto: UpdateOrderDto): Promise<Order> {
    const orders = await this.ordersModel.update(updateOrderDto, {
      where: {id},
      returning: true
    })
    return orders[1][0];
  }

  remove(id: number) {
    return this.ordersModel.destroy({where: {id}});
  }
}
