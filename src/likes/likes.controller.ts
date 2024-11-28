import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LikesService } from './likes.service';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Like } from './models/like.model';

@ApiTags("LIkes")
@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @ApiOperation({summary: "Created Like"})
  @Post()
  create(@Body() createLikeDto: CreateLikeDto) {
    return this.likesService.create(createLikeDto);
  }

  @ApiOperation({summary: "Get all Like."})
  @ApiResponse({
    status: 200,
    description: "List of Likes.",
    type: [Like]
  })
  @Get()
  findAll() {
    return this.likesService.findAll();
  }

  @ApiOperation({summary: "Get by id Like."})
  @ApiResponse({
    status: 200,
    description: "One Like.",
    type: Like
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.likesService.findOne(+id);
  }

  @ApiOperation({summary: "Update by id Like."})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLikeDto: UpdateLikeDto) {
    return this.likesService.update(+id, updateLikeDto);
  }

  @ApiOperation({summary: "Delete by id Like."})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.likesService.remove(+id);
  }
}
