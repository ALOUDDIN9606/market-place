import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { CaregoriesService } from './caregories.service';
import { CreateCaregoryDto } from './dto/create-caregory.dto';
import { UpdateCaregoryDto } from './dto/update-caregory.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Category } from './models/caregory.model';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags("Categorealar")
@Controller('caregories')
export class CaregoriesController {
  constructor(private readonly caregoriesService: CaregoriesService) {}

  @ApiOperation({summary: "Yangi categoreya qushish"})
  @Post()
  @UseInterceptors(FileInterceptor("image"))
  create(@Body() createCaregoryDto: CreateCaregoryDto, @UploadedFile() image: any) {
    return this.caregoriesService.create(createCaregoryDto, image);
  }

  @ApiOperation({summary: "Barcha kategoreyalarni kurish."})
  @ApiResponse({
    status: 200,
    description: "List of categores",
    type: [Category]
  })
  @Get()
  findAll() {
    return this.caregoriesService.findAll();
  }

  @ApiOperation({summary: "ID orqale bitta categoryni kurish."})
  @ApiResponse({
    status: 200,
    description: "List of categores",
    type: Category
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.caregoriesService.findOne(+id);
  }

  @ApiOperation({summary: "Category malumotlarini yangilash."})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCaregoryDto: UpdateCaregoryDto) {
    return this.caregoriesService.update(+id, updateCaregoryDto);
  }

  @ApiOperation({summary: "Id orqale bitta categoryni uchirish."})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.caregoriesService.remove(+id);
  }
}
