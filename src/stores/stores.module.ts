import { Module } from '@nestjs/common';
import { StoresService } from './stores.service';
import { StoresController } from './stores.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Store } from './models/store.model';
import { FileModule } from '../file/file.module';

@Module({
  imports: [SequelizeModule.forFeature([Store]), FileModule],
  controllers: [StoresController],
  providers: [StoresService],
})
export class StoresModule {}
