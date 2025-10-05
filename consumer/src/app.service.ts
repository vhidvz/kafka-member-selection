import { KafkaContext } from '@nestjs/microservices';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(context: KafkaContext) {
    const partition = context.getPartition()
    const value = `pong from ${partition}`
    console.log(value)
    return { value };
  }
}
