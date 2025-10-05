import { ClientKafka } from '@nestjs/microservices';
import { Inject, Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

import { APP_CLIENT, APP_TOPIC } from './app.constant';

@Injectable()
export class AppService {
  constructor(@Inject(APP_CLIENT) private readonly client: ClientKafka) { }

  async getHello(partition: number) {
    const data = await lastValueFrom<string>(this.client.send(APP_TOPIC, { partition, value: 'ping' }));
    return `Hello ${partition}!, ping respond with ${String(data)}`;
  }
}
