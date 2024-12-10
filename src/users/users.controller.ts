/* eslint-disable prettier/prettier */
import { Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { GetUserParamdto } from 'src/dto/userParam.dto';
import { UserService } from './services/user.services';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UserService) { }

    @Get('/:id?')
    public getUser(
        @Param() getuserparamdto: GetUserParamdto,
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
        @Query('page', new DefaultValuePipe(10), ParseIntPipe) page: number
    ) {
        console.log(getuserparamdto, limit, page)
        console.log(this.userService.findAll())
        // console.log(this.userService.findOneById(getuserparamdto))
        return 'getting a single user';
    }

    @Post()
    public addUser() {
        return 'User added/created'
    }

}
