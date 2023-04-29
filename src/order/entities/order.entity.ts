import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
 export class Orders{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    food: string;

    @Column()
    price: number;
}


