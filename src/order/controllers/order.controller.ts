import { Body, ClassSerializerInterceptor, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post, Put, UseInterceptors } from '@nestjs/common';
import { OrdersDTO } from '../dto/create-order.dto';
import { OrderService } from '../services/order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}
  @UseInterceptors(ClassSerializerInterceptor)
  @Get('name/:name')
  getOrder(@Param('name') name: string){
    const user = this.orderService.fineByName(name);
    if(user) return user;
    else throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
  }

  @Post()
  createOrder(@Body() creatOrderDto: OrdersDTO){
    return this.orderService.createOrder(creatOrderDto);
  }


}

