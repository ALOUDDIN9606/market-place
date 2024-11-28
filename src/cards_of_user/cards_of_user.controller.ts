import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CardsOfUserService } from './cards_of_user.service';
import { CreateCardsOfUserDto } from './dto/create-cards_of_user.dto';
import { UpdateCardsOfUserDto } from './dto/update-cards_of_user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CardsOfUser } from './models/cards_of_user.model';

@ApiTags("Card_of_user")
@Controller('cards-of-user')
export class CardsOfUserController {
  constructor(private readonly cardsOfUserService: CardsOfUserService) {}

  @ApiOperation({summary: "Created Card of User."})
  @Post()
  create(@Body() createCardsOfUserDto: CreateCardsOfUserDto) {
    return this.cardsOfUserService.create(createCardsOfUserDto);
  }

  @ApiOperation({summary: "get all Card of Users."})
  @ApiResponse({
    status: 200,
    description: "List of card of user.",
    type: [CardsOfUser]
  })
  @Get()
  findAll() {
    return this.cardsOfUserService.findAll();
  }

  @ApiOperation({summary: "get by id Card of Users."})
  @ApiResponse({
    status: 200,
    description: "One card of user.",
    type: CardsOfUser
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cardsOfUserService.findOne(+id);
  }

  @ApiOperation({summary: "Update by id Card of Users."})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCardsOfUserDto: UpdateCardsOfUserDto) {
    return this.cardsOfUserService.update(+id, updateCardsOfUserDto);
  }

  @ApiOperation({summary: "Delete by id Card of Users."})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cardsOfUserService.remove(+id);
  }
}
