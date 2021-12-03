import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketModule } from './ticket/ticket.module';
import { OrderModule } from './order/order.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TicketModule,
    OrderModule,
    MongooseModule.forRoot('mongodb://mongodb:27017/myDatabase', {
      user: 'test_user',
      pass: 'test1234'
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
