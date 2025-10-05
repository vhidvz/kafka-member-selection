import { Inject, Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

import { APP_CLIENT, APP_TOPIC } from './app.constant';

@Injectable()
export class AppService implements OnApplicationBootstrap {
  constructor(@Inject(APP_CLIENT) private readonly client: ClientKafka) {}

  onApplicationBootstrap() {
    this.client.subscribeToResponseOf(APP_TOPIC);
    return this.client.connect();
  }

  async getHello(partition: number) {
    const data = await lastValueFrom<string>(this.client.send(APP_TOPIC, { partition, value: 'ping' }));
    return `Hello ${partition}!, ping respond with ${String(data)}`;
  }
}
