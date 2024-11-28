import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AdminModule } from './admin/admin.module';
import { StoresModule } from './stores/stores.module';
import { CaregoriesModule } from './caregories/caregories.module';
import { LikesModule } from './likes/likes.module';
import { OrdersModule } from './orders/orders.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { CardsOfUserModule } from './cards_of_user/cards_of_user.module';
import { BasketsModule } from './baskets/baskets.module';
import { ImagesOfProductModule } from './images_of_product/images_of_product.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env', isGlobal: true
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.PG_HOST,
      port: Number(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASS,
      database: process.env.PG_DB,
      autoLoadModels: true,
      sync: { alter: true },
      synchronize: true,
      logging: true
    }),
    AdminModule,
    StoresModule,
    CaregoriesModule,
    LikesModule,
    OrdersModule,
    UsersModule,
    ProductsModule,
    CardsOfUserModule,
    BasketsModule,
    ImagesOfProductModule,
    AuthModule
  ],
})
export class AppModule { }
