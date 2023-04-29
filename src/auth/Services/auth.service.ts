import { Inject, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/SERVICES/user/user.service';

@Injectable()
export class AuthService {
    constructor(@Inject('USER_SERVICE') private readonly userService: UserService){}
   
    async validateUser(email: string, password: string){
        console.log('Inside validateUser')
        const userDB = await this.userService.getUser(email);
        if(userDB && userDB.password === password){
            console.log('User Validation Success');
            return userDB;
        }
        console.log('User Validation Failed!');
        return null;
    }
}
