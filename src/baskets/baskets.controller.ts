import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BasketsService } from './baskets.service';
import { CreateBasketDto } from './dto/create-basket.dto';
import { UpdateBasketDto } from './dto/update-basket.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Basket } from './models/basket.model';

@ApiTags("Baskets")
@Controller('baskets')
export class BasketsController {
  constructor(private readonly basketsService: BasketsService) {}

  @ApiOperation({summary: "Created Basket."})
  @Post()
  create(@Body() createBasketDto: CreateBasketDto) {
    return this.basketsService.create(createBasketDto);
  }

  @ApiOperation({summary: "Get all Baskets."})
  @ApiResponse({
    status: 200,
    description: "List of Baskets.",
    type: [Basket]
  })
  @Get()
  findAll() {
    return this.basketsService.findAll();
  }

  @ApiOperation({summary: "Get by id Baskets."})
  @ApiResponse({
    status: 200,
    description: "One Baskets.",
    type: Basket
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.basketsService.findOne(+id);
  }

  @ApiOperation({summary: "Update by id Baskets."})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBasketDto: UpdateBasketDto) {
    return this.basketsService.update(+id, updateBasketDto);
  }

  @ApiOperation({summary: "Delete by id Baskets."})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.basketsService.remove(+id);
  }
}
