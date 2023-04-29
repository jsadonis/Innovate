import { IsAlphanumeric, IsEmail, IsNotEmpty, IsNumber, IsString, Length, Matches } from "class-validator";

 
 export class UsersDto{

    @IsString()
    @IsNotEmpty()
    name: string;

    // @IsString()
    // @IsNotEmpty()
    // address : string;

    @IsEmail()
    @IsNotEmpty()
    readonly email: string;

    // @IsString()
    // @IsNotEmpty()
    // phone_number: string;

    @IsNotEmpty()
    @Length(8)
    // @Matches(/((?=.*\d) | (?=.*\W+))(?![./n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'Password is Weak'})
    password: string;

    @IsNotEmpty()
    @Length(8)
    retypedpassword: string;

}