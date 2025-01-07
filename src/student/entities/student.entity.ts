import { Column, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Gender } from "../enum/gender.enum";
import { Classroom } from "src/classroom/entities/classroom.entity";

export class Student {
    @PrimaryGeneratedColumn()
    id: number

    @Column('varchar', {nullable: false})
    firstName: string

    @Column('varchar', {nullable: false})
    lastName: string

    @Column("date", {nullable: false})
    dateOfBirth: Date
    
    @Column('integer', {nullable: false})
    age: number

    @Column({type: 'enum', enum: Gender,  nullable: false})
    gender: Gender
    
    @OneToOne(() => Classroom, (classroom) => 
        classroom.student,
    {
        cascade: true,
        eager: true,
        onUpdate: "CASCADE"
    })
    classroom: Classroom 

    @Column({type: 'timestamp'})
    dateRegistered: Date
}
