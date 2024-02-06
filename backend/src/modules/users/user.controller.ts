import {Body, Controller, Get, Param, Post, Req} from '@nestjs/common';
import {UserService} from "./user.service";
import {CreateUserDto} from "./dto/create.user.dto";
import {User} from "./user.entity";
import * as process from "process";

@Controller('snippets')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {}

    @Get()
    getSnippets(): Promise<User[]>{
        return this.userService.getAllUsers()
    }

}
