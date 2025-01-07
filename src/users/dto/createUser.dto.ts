import { 
    IsDate, 
    IsDateString, 
    IsEmail, 
    IsEnum, 
    IsInt, 
    IsNotEmpty, 
    IsString, 
    Matches, 
    MaxLength, 
    MinLength 
} from "class-validator";
import { Role } from "../enum/role.enum";
import { Gender } from "../enum/gender.enum";

export class CreateUserDto {
    @MaxLength(8)
    @IsString()
    firstName: string

    @MaxLength(8)
    @IsString()
    lastName: string

    @IsEmail()
    email: string

    @IsEnum(Role)
    role: Role;

    @IsInt()
    age: number;

    @IsEnum(Gender)
    gender: Gender;

    @IsDateString()
    dateOfBirth: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(8)
    @Matches(/^(?=.*[!@#$%^&*])(?=.*[a-zA-Z\d])[a-zA-Z\d!@#$%^&*]{6,}$/, {
        message: "Invalid Password"
    })
    password: string;
}