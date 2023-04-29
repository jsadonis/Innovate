import { BadRequestException, Injectable, Param } from '@nestjs/common';
import { UsersDto } from '../../dto/create-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/user.entity';

@Injectable()
export class UserService { 
    constructor(@InjectRepository(User)
    private readonly userRepository: Repository<User>,
    ){}
    
    async getAll(){
        return await this.userRepository.find(); 
      }
    
      async createUser(data: UsersDto): Promise<User>{
        if (data.password !== data.retypedpassword){
          throw new BadRequestException(['Passwords are not identical']);
      }   
    
      const existingUser = await this.userRepository.findOne({
          where: [
              {email: data.email}
          ]
      });
    
      if (existingUser){
          throw new BadRequestException([' Email is already taken']);
      }
    
        const room = this.userRepository.create(data);
        return this.userRepository.save(room);
        
      
      }

      getUser(email: string){
        return this.userRepository.findOneBy({ email})
    }
}
