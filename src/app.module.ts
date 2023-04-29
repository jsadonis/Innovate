import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/MODULES/user/user.module';
import { OrderModule } from './order/order.module';
import { AdminModule } from './admin/admin.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user/SERVICES/user/user.service';
import { UserController } from './user/CONTROLLERS/user/user.controller';
import { User } from './typeorm/user.entity';
import { Orders } from './order/entities/order.entity';
import { AuthController } from './auth/Controllers/auth.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'innovate',
      entities: [ User ],
      synchronize: true,
    }),
      OrderModule,
      UserModule,
      AdminModule,
      AuthModule,
      
   ],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
