import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ImagesOfProductService } from './images_of_product.service';
import { CreateImagesOfProductDto } from './dto/create-images_of_product.dto';
import { UpdateImagesOfProductDto } from './dto/update-images_of_product.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImagesOfProduct } from './models/images_of_product.model';

@ApiTags("Image_of_Product")
@Controller('images-of-product')
export class ImagesOfProductController {
  constructor(private readonly imagesOfProductService: ImagesOfProductService) {}

  @ApiOperation({summary: "Created Image of Product."})
  @Post()
  @UseInterceptors(FileInterceptor("Image"))
  create(@Body() createImagesOfProductDto: CreateImagesOfProductDto, @UploadedFile() Image: any) {
    return this.imagesOfProductService.create(createImagesOfProductDto, Image);
  }

  @ApiOperation({summary: "Get all image of product."})
  @ApiResponse({
    status: 200,
    description: "List of image of product.",
    type: [ImagesOfProduct]
  })
  @Get()
  findAll() {
    return this.imagesOfProductService.findAll();
  }

  @ApiOperation({summary: "Get by id image of product."})
  @ApiResponse({
    status: 200,
    description: "One image of product.",
    type: ImagesOfProduct
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imagesOfProductService.findOne(+id);
  }

  @ApiOperation({summary: "Update by id image of product."})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImagesOfProductDto: UpdateImagesOfProductDto) {
    return this.imagesOfProductService.update(+id, updateImagesOfProductDto);
  }

  @ApiOperation({summary: "Delete by id image of product."})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imagesOfProductService.remove(+id);
  }
}
