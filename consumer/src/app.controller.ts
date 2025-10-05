import { Ctx, KafkaContext, MessagePattern, Transport } from '@nestjs/microservices';
import { Controller } from '@nestjs/common';

import { APP_TOPIC } from './app.constant';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @MessagePattern(APP_TOPIC, Transport.KAFKA)
  getHello(@Ctx() context: KafkaContext) {
    return this.appService.getHello(context);
  }
}
