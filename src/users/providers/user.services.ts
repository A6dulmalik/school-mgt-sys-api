/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { GetUserParamdto } from "src/users/dto/userParam.dto"
import { User } from "../user.entity"
import { Repository } from "typeorm"
import { CreateUserDto } from "../dto/createUser.dto"
import { UpdateUserDto } from "../dto/updateUser.dto"

@Injectable()
export class UserService {
    constructor (
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {}

    public findAll(
        limit?: number,
        page?: number,
    ) {
        return this.userRepository.find()
    };



    public createUser(createUserDto: CreateUserDto[]) {
        let newUser = this.userRepository.create(createUserDto);
        return this.userRepository.save(newUser);
    }

    public findOneById(getuserparamdto: GetUserParamdto): Promise<User | null> {
        console.log(getuserparamdto)
        return this.userRepository.findOneBy(getuserparamdto)
    };

    //Updating user data
    public async updateUser(
        getuserparamdto: GetUserParamdto, 
        updateUserDto: UpdateUserDto,
    ) {
        const user = await this.userRepository.findOne({where: {id: getuserparamdto.id}});

        if(!user) {
            throw new NotFoundException (`User ID ${getuserparamdto.id} Not Found`)
        }

        const updatedUser = this.userRepository.merge(user, updateUserDto);
        return this.userRepository.save(updatedUser);
    }


    public async removeUser(getuserparamdto: GetUserParamdto): Promise<void>  {
        await this.userRepository.delete(getuserparamdto);
        // await this.userRepository.softDelete(getuserparamdto);
    }
}



// public updateUser(
//     getuserparamdto: GetUserParamdto, 
//     updateUserDto: UpdateUserDto,
//     newFirstName?:string, 
//     // newLastName?: string, 
//     newDob?:string,
// ) {
//     // const user = this.userRepository.update(getuserparamdto, {firstName:newFirstName, lastName:newLastName, dateOfBirth:newDob})
//     const {firstName, dateOfBirth} = updateUserDto;
//     const updatedUser = this.userRepository.update(getuserparamdto, {
//         firstName:newFirstName || updateUserDto.firstName, 
//         dateOfBirth:newDob || updateUserDto.dateOfBirth,
//     });
//     return updatedUser;
// }