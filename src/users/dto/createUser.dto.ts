import { IsEmail, IsInt, IsNotEmpty, IsString, matches, Matches, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    firstName: string

    @IsString()
    lastName: string

    @IsInt()
    age: number

    @IsString()
    address: string

    @IsString()
    guardianName: string

    @IsString()
    guardianOccupation: string

    @IsEmail()
    guardianEmail: string

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(8)
    @Matches(/^(?=.*[!@#$%^&*])(?=.*[a-zA-Z\d])[a-zA-Z\d!@#$%^&*]{6,}$/, {
        message: "Invalid Password"
    })
    password: string;
}