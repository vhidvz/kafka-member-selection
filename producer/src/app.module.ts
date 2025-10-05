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
          consumer: { groupId: 'producer-group' },
          client: { clientId: 'producer-client', brokers: ['10.16.0.181:9092'] },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
