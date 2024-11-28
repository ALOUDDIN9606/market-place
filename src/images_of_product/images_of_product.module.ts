import { Module } from '@nestjs/common';
import { ImagesOfProductService } from './images_of_product.service';
import { ImagesOfProductController } from './images_of_product.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ImagesOfProduct } from './models/images_of_product.model';
import { FileModule } from '../file/file.module';

@Module({
  imports: [SequelizeModule.forFeature([ImagesOfProduct]), FileModule],
  controllers: [ImagesOfProductController],
  providers: [ImagesOfProductService],
})
export class ImagesOfProductModule {}
