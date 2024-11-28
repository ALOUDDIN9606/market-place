import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Order } from './models/order.model';

@ApiTags("Orders")
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @ApiOperation({summary: "Creator Orders"})
  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  
  @ApiOperation({summary: "Get all Orders."})
  @ApiResponse({
    status: 200,
    description: "List of orders",
    type: [Order]
  })
  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  
  @ApiOperation({summary: "Get by id Orders."})
  @ApiResponse({
    status: 200,
    description: "One Orders",
    type: Order
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(+id);
  }

  @ApiOperation({summary: "Update by id Orders."})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(+id, updateOrderDto);
  }

  @ApiOperation({summary: "Delete by id Orders."})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersService.remove(+id);
  }
}
