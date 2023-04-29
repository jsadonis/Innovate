import { BadRequestException, Body, Controller, Get, HttpException, HttpStatus, ImATeapotException, Inject, NotFoundException, Param, ParseIntPipe, Post, UseFilters, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersDto } from '../../dto/create-user.dto';
import { UserService } from '../../SERVICES/user/user.service';
import * as bycrpt from 'bcrypt';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer';
import { UserNotFoundException } from 'src/user/exceptions/UserNotFoundException';
import { SerializedUser } from 'src/user/type';
import { HttpExceptionFilter } from 'src/user/filters/HttpExceptionFilter';

@Controller('user')
export class UserController {
  constructor(@Inject('USER_SERVICE') private readonly userService: UserService) {}
  
  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  getUsers(){
    return this.userService.getAll();
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createUsers(@Body() reqUser: UsersDto){
    const hashPassword = await bycrpt.hash(reqUser.password, 12);
    const users = await this.userService.createUser(reqUser)
    return{
      statusCode: HttpStatus.OK,
      message: "User created successfully",
    }

    
  }

}
