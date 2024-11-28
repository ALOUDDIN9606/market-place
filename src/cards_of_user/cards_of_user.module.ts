import { Module } from '@nestjs/common';
import { CardsOfUserService } from './cards_of_user.service';
import { CardsOfUserController } from './cards_of_user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { CardsOfUser } from './models/cards_of_user.model';

@Module({
  imports: [SequelizeModule.forFeature([CardsOfUser])],
  controllers: [CardsOfUserController],
  providers: [CardsOfUserService],
})
export class CardsOfUserModule {}
