import { Module } from '@nestjs/common';
import { OrderService } from './services/order.service';
import { OrderController } from './controllers/order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orders } from './entities/order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Orders])],
  exports: [TypeOrmModule],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
