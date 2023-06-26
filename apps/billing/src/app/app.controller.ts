import { Controller, OnModuleInit, Inject } from '@nestjs/common';
import { EventPattern, ClientKafka } from '@nestjs/microservices';

import { AppService } from './app.service';

@Controller()
export class AppController implements OnModuleInit {
  constructor(
    private readonly appService: AppService,
    @Inject('AUTH_SERVICE') private authClient: ClientKafka
  ) {}
  @EventPattern('order_created')
  handleOrderCreated(data: any) {
    console.log('Billing..handleOrderCreated ', data);
    this.appService.handleOrderCreated(data);
  }

  onModuleInit() {
    this.authClient.subscribeToResponseOf('get_user');
  }
}
