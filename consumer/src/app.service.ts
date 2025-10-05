import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(partition: number) {
    return `Hello ${partition}!`;
  }
}
