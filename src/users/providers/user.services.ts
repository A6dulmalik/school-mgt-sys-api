/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { GetUserParamdto } from "src/users/dto/userParam.dto"
import { User } from "../user.entity"
import { Repository } from "typeorm"

@Injectable()
export class UserService {
    constructor (
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {}
    // user = [
    //     {
    //         id: 1,
    //         name: 'Jason Statham',
    //         user: 'Transporter',
    //         role: 'Logistics'
    //     },
    //     {
    //         id: 2,
    //         name: 'Chris Hemsworth',
    //         user: 'Thunder',
    //         role: 'Strike'
    //     },
    // ];

    public findAll(
        limit?: number,
        page?: number,
    ) {
        return this.userRepository.find()
    };

    public findOneById(getuserparamdto: GetUserParamdto): Promise<User | null> {
        console.log(getuserparamdto)
        return this.userRepository.findOneBy(getuserparamdto)
    };

    async remove(getuserparamdto: GetUserParamdto): Promise<void>  {
        await this.userRepository.delete(getuserparamdto);
    }
}