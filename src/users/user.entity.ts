import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Gender } from "./enum/gender.enum";
import { Role } from "./enum/role.enum";

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", {nullable: false})
    firstName: string;

    @Column("varchar", {nullable: false})
    lastName: string;

    @Column("varchar", {unique:true, nullable: false})
    email: string;

    @Column({type: 'enum', enum: Role})
    role: Role;

    @Column("int", {nullable: false})
    age: number;

    @Column({type: 'enum', enum: Gender})
    gender: Gender;

    @Column({nullable: true})
    dateOfBirth: Date;

    @Column("varchar", {nullable: false})
    password: string;

    // @Column({default: false})
    // isDeleted: boolean;
}