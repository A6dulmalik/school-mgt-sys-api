import { Student } from "src/student/entities/student.entity";
import { Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export class Classroom {
    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar", {nullable: false})
    name: string

    @Column("int", {nullable: false})
    capacity: number


    @Column()
    @OneToMany(() => Student, (student) => student.classroom)
    student: Student
}
