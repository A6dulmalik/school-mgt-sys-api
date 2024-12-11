import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    surName: string;

    @Column()
    otherNames?: string;

    @Column()
    age: number;

    @Column()
    gender: string
}