import { Inject, Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { lastValueFrom, timeout } from 'rxjs';

import { APP_CLIENT, APP_TOPIC } from './app.constant';

@Injectable()
export class AppService implements OnApplicationBootstrap {
  constructor(@Inject(APP_CLIENT) private readonly client: ClientKafka) { }

  onApplicationBootstrap() {
    this.client.subscribeToResponseOf(APP_TOPIC);
    return this.client.connect();
  }

  async getHello(partition: number) {
    const data = await lastValueFrom(this.client.send<string>(APP_TOPIC, { partition, value: 'ping' }).pipe(timeout(90000)));
    const message = `Hello ${partition}!, ping respond with ${String(data)}`;
    console.log(message);
    return message;
  }
}
