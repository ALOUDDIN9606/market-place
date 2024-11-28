import { Module } from '@nestjs/common';
import { BasketsService } from './baskets.service';
import { BasketsController } from './baskets.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Basket } from './models/basket.model';

@Module({
  imports: [SequelizeModule.forFeature([Basket])],
  controllers: [BasketsController],
  providers: [BasketsService],
})
export class BasketsModule {}
