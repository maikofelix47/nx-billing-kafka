import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('AUTH_SERVICE') private authClient: ClientKafka) {}
  handleOrderCreated(data: { userId: string; cost: number }) {
    console.log('billing service handleordercreated', data);
    const dataJson = JSON.stringify(data);
    this.authClient.send('get_user', dataJson).subscribe((user) => {
      console.log('get_user data', user);
    });
  }
}
