import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  users = [
    {
      userId: 1,
      uuid: 'uuid1',
    },
    {
      userId: 2,
      uuid: 'uuid2',
    },
    {
      userId: 3,
      uuid: 'uuid3',
    },
    {
      userId: 4,
      uuid: 'uuid4',
    },
  ];
  getUser(data: { userId: number; price: number }) {
    return this.users.filter((user) => {
      return user.userId === data.userId;
    });
  }
}
