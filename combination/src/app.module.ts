import { ClientsModule, Transport } from '@nestjs/microservices';
import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { APP_CLIENT } from './app.constant';
import { AppController } from './app.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: APP_CLIENT,
        transport: Transport.KAFKA,
        options: {
          subscribe: { fromBeginning: true },
          consumer: { groupId: 'combination-group' },
          client: { clientId: 'combination-client', brokers: ['127.0.0.1:9092'] },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
