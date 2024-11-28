import { Injectable } from '@nestjs/common';
import { CreateCaregoryDto } from './dto/create-caregory.dto';
import { UpdateCaregoryDto } from './dto/update-caregory.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './models/caregory.model';
import { FileModule } from 'src/file/file.module';
import { FileService } from 'src/file/file.service';

@Injectable()
export class CaregoriesService {
  constructor(
    @InjectModel(Category) private categoryModel: typeof Category,
    private readonly fileService: FileService
    ){}
  async create(createCaregoryDto: CreateCaregoryDto, image: any): Promise<Category> {
    const fileName = await this.fileService.saveFile(image)
    return this.categoryModel.create({
      ...createCaregoryDto,
      image: fileName
    });
  }

  findAll() {
    return this.categoryModel.findAll({include: {all:true}});
  }

  findOne(id: number) {
    return this.categoryModel.findOne({where: {id}});
  }

  async update(id: number, updateCaregoryDto: UpdateCaregoryDto): Promise<Category> {
    const category = await this.categoryModel.update(updateCaregoryDto, {
      where: {id},
      returning: true
    })
    return category[1][0];
  }

  remove(id: number) {
    return this.categoryModel.destroy({where: {id}});
  }
}
