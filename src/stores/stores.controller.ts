import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { StoresService } from './stores.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Store } from './models/store.model';

@ApiTags('Store')
@Controller('stores')
export class StoresController {
  constructor(private readonly storesService: StoresService) {}

  @ApiOperation({summary: "Yangi store qushish"})
  @Post()
  @UseInterceptors(FileInterceptor("image"))
  create(@Body() creatorStoreDto: CreateStoreDto, @UploadedFile() image: any) {
    return this.storesService.create(creatorStoreDto, image);
  }
  
  @ApiOperation({summary: "Barcha storelarni kurish"})
  @ApiResponse({
    status: 200,
    description: "List of store",
    type: [Store]
  })
  @Get()
  findAll() {
    return this.storesService.findAll();
  }

  @ApiOperation({summary: "ID orqale bitta storelar kurish"})
  @ApiResponse({
    status: 200,
    description: "Get by id store",
    type: Store
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.storesService.findOne(+id);
  }

  @ApiOperation({summary: "Id orqale storeni yangilash."})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStoreDto: UpdateStoreDto) {
    return this.storesService.update(+id, updateStoreDto);
  }

  @ApiOperation({summary: "Id orqale storeni uchirish."})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.storesService.remove(+id);
  }
}
