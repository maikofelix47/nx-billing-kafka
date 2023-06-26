import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('get_user')
  getUserHandler(data: any) {
    console.log('auth service getuserHandler...', data);
    return this.appService.getUser(data);
  }
}
