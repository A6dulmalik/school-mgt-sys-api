import { IsInt, IsString } from "class-validator";

export class CreateClassroomDto {
    @IsString()
    name: string;

    @IsInt()
    capacity: number
}
