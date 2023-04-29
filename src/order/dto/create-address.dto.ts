import { IsNotEmpty, IsString } from "class-validator";

export class CreateAddressDTO{

    @IsNotEmpty()
    @IsString()
    houseNumber: string;

    @IsNotEmpty()
    @IsString()
    street: string;

    @IsNotEmpty()
    @IsString()
    city: string;

    @IsNotEmpty()
    @IsString()
    state: string;

    @IsNotEmpty()
    @IsString()
    country: string;
}