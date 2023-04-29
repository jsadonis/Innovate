import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    // @Column()
    // address : string;

    @Column({unique: true})
    email: string;

    // @Column()
    // phone_number: string;

    @Column()
    password: string;

    @Column()
    retypedpassword: string;
}