import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Product } from './models/product.model';

@ApiTags("Products")
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiOperation({summary: "Created Product."})
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @ApiOperation({summary: "Get all Product."})
  @ApiResponse({
    status: 200,
    description: "List of products.",
    type: [Product]
  })
  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @ApiOperation({summary: "Get by id Product."})
  @ApiResponse({
    status: 200,
    description: "One product.",
    type: Product
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @ApiOperation({summary: "Update by id Product."})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @ApiOperation({summary: "Delete by id Product."})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
