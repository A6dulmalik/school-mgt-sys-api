/* eslint-disable prettier/prettier */
import { Body, Controller, DefaultValuePipe, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { GetUserParamdto } from 'src/users/dto/userParam.dto';
import { UserService } from './providers/user.services';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/createUser.dto';
import { User } from './user.entity';
import { UpdateUserDto } from './dto/updateUser.dto';

@Controller('users')
@ApiTags('users')
export class UsersController {
    constructor(private readonly userService: UserService) {}

    @ApiResponse({
        status: 200,
        description: 'Users fetched successfully.'
    })
    @ApiOperation({
        summary: 'Fetching all users.'
    })

    @Get()
    public getAllUsers() {
        return this.userService.findAll()
    }
    
    @Get(':id')
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
    public getsingleUser(
        @Param() getuserparamdto: GetUserParamdto,
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
        @Query('page', new DefaultValuePipe(10), ParseIntPipe) page: number
    ) {
        // console.log(getuserparamdto, limit, page)
        // console.log()
        // console.log(this.userService.findOneById(getuserparamdto))

        return this.userService.findOneById(getuserparamdto);
    }

    @Post()
    public addUser(
        @Body() createuserdto: CreateUserDto[]
    ) {
        // console.log(createuserdto);
        return this.userService.createUser(createuserdto);
    }

    @Patch('/:id')
    public updateUser(
        @Param() getuserparamdto:GetUserParamdto,
        @Body() updateUserDto: UpdateUserDto 
    ) {
        return this.userService.updateUser(getuserparamdto, updateUserDto);
    }

    @Delete()
    public removeUser(
        @Param() getUserParamDto : GetUserParamdto
    ) {
        return this.userService.removeUser(getUserParamDto)
    }

}


// @Post('/:id')
//     public updateUser(
//         @Param() getuserparamdto:GetUserParamdto,
//         @Body() updateUserDto: UpdateUserDto
//         // @Body() firstName: newFirstName, lastName: string, dateOfBirth: string, 
//     ) {
//         const {firstName: newFirstName, dateOfBirth: newDob} = updateUserDto
//         // const {firstName, lastName, dateOfBirth} = createuserdto:
//         // return this.userService.updateUser(getuserparamdto, firstName: , lastName, dateOfBirth)
//         return this.userService.updateUser(getuserparamdto, { firstName: newFirstName, dateOfBirth: newDob});
//     }
