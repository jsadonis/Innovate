import { Type } from "class-transformer";
import { IsNotEmpty, IsString, ValidateNested } from "class-validator";
import { CreateAddressDTO } from "./create-address.dto";

export class OrdersDTO{

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsString()
    price: number;

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CreateAddressDTO)
    address: CreateAddressDTO;

}