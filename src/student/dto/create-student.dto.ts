import { IsDate, IsDateString, IsEnum, IsInt, IsISO8601, IsOptional, IsString, Max } from "class-validator";
import { Gender } from "../enum/gender.enum";

export class CreateStudentDto {
    @IsString()
    @Max(8)
    firstName: string

    @IsString()
    @Max(8)
    lastName: string
    
    @IsDateString()
    dateOfBirth: string

    @IsInt()
    age: number

    @IsEnum(Gender)
    gender: Gender

    @IsString()
    classroom: string
    
    @IsDate()
    @IsISO8601()
    @IsOptional()
    dateRegistered: Date
}
