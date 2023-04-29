import { Module } from '@nestjs/common';
import { UserService } from '../../SERVICES/user/user.service';
import { UserController } from '../../CONTROLLERS/user/user.controller';
import { User } from 'src/typeorm/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([User])],
  exports: [TypeOrmModule],
  controllers: [UserController],
  providers: [
    {
      provide: "USER_SERVICE",
      useClass: UserService,
    },
  ],
})
export class UserModule {}
