/* eslint-disable prettier/prettier */
import { ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsInt, IsOptional, Min } from "class-validator";

export class GetUserParamdto {
    @ApiPropertyOptional()
    @IsOptional()
    @IsInt()
    @Min(1, {message: 'ID must be a positive integer greater than zero'})
    @Type(() => Number)
    id?: number
}
