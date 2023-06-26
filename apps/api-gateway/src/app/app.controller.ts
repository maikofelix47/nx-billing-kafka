import { Body, Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';
import { CreateOrderDto } from './dtos/create-order.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post()
  createOrder(@Body() data: CreateOrderDto) {
    console.log('create order...', data);
    return this.appService.createOrder(data);
  }
}
