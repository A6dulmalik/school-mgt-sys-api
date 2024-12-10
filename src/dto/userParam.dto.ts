/* eslint-disable prettier/prettier */
import { Type } from "class-transformer";
import { IsInt, IsOptional } from "class-validator";

export class GetUserParamdto {
    @IsOptional()
    @IsInt()
    @Type(() => Number)
    id?: number
}
