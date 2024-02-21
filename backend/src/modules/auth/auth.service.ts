import {forwardRef, Inject, Injectable, UnauthorizedException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {User} from "../users/user.entity";
import {LoginUserDTO} from "../users/dto/get.user.dto";
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from "bcrypt";
import {UserService} from "../users/user.service";

interface loginReturn {
    access_token: string,
    user: Omit<User, 'password'>
}

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        @Inject(forwardRef(() => UserService))
        private userService: UserService,
    ) {}

    async hashPassword(password: string): Promise<string> {
        const salt = await bcrypt.genSalt();
        return await bcrypt.hash(password, salt);
    }

    async signIn(loginUserDTO: LoginUserDTO): Promise<loginReturn> {

        const user: User = await this.userService.findOneUser(loginUserDTO);

        console.log('user?.password: ', user?.password,)
        console.log('loginUserDTO.password: ', loginUserDTO.password)

        const isMatch: boolean = await bcrypt.compare(loginUserDTO?.password, user?.password);
        if (!isMatch)  throw new UnauthorizedException();

        const { password, ...result } = user;
        const payload = { sub: user.id, username: user.username };

        return {
            access_token: await this.jwtService.signAsync(payload),
            user: result
        };
    }
}
