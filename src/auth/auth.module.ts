import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/user.entity';
import { UserService } from 'src/user/SERVICES/user/user.service';
import { LocalStrategy } from 'src/utils/LocalStrategy';
import { AuthController } from './Controllers/auth.controller';
import { AuthService } from './Services/auth.service';

@Module({
  imports: [TypeOrmModule.forFeature([User]), PassportModule],
  providers: [
    {
    provide: "AUTH_SERVICE",
    useClass: AuthService,
    },
    {
      provide: 'USER_SERVICE',
      useClass: UserService,
    },
    LocalStrategy,
],
  controllers: [AuthController]
})
export class AuthModule {}
