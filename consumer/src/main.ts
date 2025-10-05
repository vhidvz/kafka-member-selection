import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      subscribe: { fromBeginning: true },
      client: { clientId: 'consumer-client', brokers: ['10.16.0.181:9092'] },
      consumer: { groupId: 'consumer-group' },
    },
  });
  await app.startAllMicroservices();
}
void bootstrap();
