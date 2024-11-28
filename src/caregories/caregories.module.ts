import { Module } from '@nestjs/common';
import { CaregoriesService } from './caregories.service';
import { CaregoriesController } from './caregories.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Category } from './models/caregory.model';
import { FileModule } from 'src/file/file.module';

@Module({
  imports: [SequelizeModule.forFeature([Category]), FileModule],
  controllers: [CaregoriesController],
  providers: [CaregoriesService],
})
export class CaregoriesModule {}
