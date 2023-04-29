import { Body, Injectable } from '@nestjs/common';
import {  InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrdersDTO } from '../dto/create-order.dto';
import { Orders } from '../entities/order.entity';

@Injectable()
export class OrderService {
    constructor(@InjectRepository(Orders) 
    private orderRepository: Repository<Orders>
    ){}

    findAll(){
        return this.orderRepository.find();
    }

    fineByName(AddressName: string){
        return 'Akpaden';
    }

    createOrder(@Body() createOrderDto: OrdersDTO){
    return  ` Name: ${createOrderDto.name}  
    House Address:  ${createOrderDto.address}  
    Price:  ${createOrderDto.price}`; 

    }

}
