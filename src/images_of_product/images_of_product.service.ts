import { Injectable } from '@nestjs/common';
import { CreateImagesOfProductDto } from './dto/create-images_of_product.dto';
import { UpdateImagesOfProductDto } from './dto/update-images_of_product.dto';
import { InjectModel } from '@nestjs/sequelize';
import { ImagesOfProduct } from './models/images_of_product.model';
import { FileService } from '../file/file.service';
import { ApiOperation } from '@nestjs/swagger';

@Injectable()
export class ImagesOfProductService {
  constructor(
    @InjectModel(ImagesOfProduct) private imageofProductModel: typeof ImagesOfProduct,
    private readonly fileService: FileService
  ){
}
  @ApiOperation({summary: "Created Image_of_Product."})
  async create(createImagesOfProductDto: CreateImagesOfProductDto, image: any): Promise<ImagesOfProduct> {
    const filename = await this.fileService.saveFile(image)
    return this.imageofProductModel.create({
      ...createImagesOfProductDto,
      image: filename
    });
  }

  findAll() {
    return this.imageofProductModel.findAll({include: {all:true}});
  }

  findOne(id: number) {
    return this.imageofProductModel.findOne({where: {id}});
  }

  async update(id: number, updateImagesOfProductDto: UpdateImagesOfProductDto): Promise<ImagesOfProduct> {
    const image_of_products = await this.imageofProductModel.update(updateImagesOfProductDto, {
      where: {id},
      returning: true
    })
    return image_of_products[1][0];
  }

  remove(id: number) {
    return this.imageofProductModel.destroy({where: {id}});
  }
}
