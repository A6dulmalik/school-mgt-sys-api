/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common"
import { GetUserParamdto } from "src/dto/userParam.dto"

@Injectable()
export class UserService {
    user = [
        {
            id: 1,
            name: 'Jason Statham',
            user: 'Transporter',
            role: 'Logistics'
        },
        {
            id: 2,
            name: 'Chris Hemsworth',
            user: 'Thunder',
            role: 'Strike'
        },
    ];

    public findAll(

    ) {
        return this.user
    };

    public findOneById(getuserparamdto?: GetUserParamdto,) {
        console.log(getuserparamdto)
        return this.user[1]
    };
}