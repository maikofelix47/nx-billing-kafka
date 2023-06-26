import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { CreateOrderDto } from './dtos/create-order.dto';
@Injectable()
export class AppService {
  constructor(@Inject('BILLING_SERVICE') private billingClient: ClientKafka) {}
  createOrder(order: CreateOrderDto) {
    const orderPayloadJson = JSON.stringify({ ...order });
    this.billingClient.emit('order_created', orderPayloadJson);
    return order;
  }
}
