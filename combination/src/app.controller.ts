import { Ctx, KafkaContext, MessagePattern, Transport } from '@nestjs/microservices';
import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

import { APP_TOPIC } from './app.constant';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @MessagePattern(APP_TOPIC, Transport.KAFKA)
  getHelloConsumer(@Ctx() context: KafkaContext) {
    return this.appService.getHelloConsumer(context);
  }

  @Get(':id')
  getHelloProducer(@Param('id', ParseIntPipe) partition: number) {
    return this.appService.getHelloProducer(+partition);
  }
}
