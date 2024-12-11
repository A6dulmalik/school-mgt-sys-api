/* eslint-disable prettier/prettier */
import { Body, Controller, DefaultValuePipe, Delete, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { GetUserParamdto } from 'src/users/dto/userParam.dto';
import { UserService } from './providers/user.services';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/createUser.dto';

@Controller('users')
@ApiTags('users')
export class UsersController {
    constructor(private readonly userService: UserService) { }

    @ApiResponse({
        status: 200,
        description: 'Users fetched successfully.'
    })
    @ApiOperation({
        summary: 'Fetching all users.'
    })
    
    @Get('/:id?')
    @ApiQuery({
        name: 'limit',
        type: 'number',
        required: false
    })
    @ApiQuery({
        name: 'page',
        type: 'number',
        required: false
    })
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
    public addUser(
        @Body() createuserdto: CreateUserDto
    ) {
        console.log(createuserdto);
        return 'User added/created';
    }

    @Delete()
    public removeUser() {
        return 'User deleted successfully.'
    }

}
