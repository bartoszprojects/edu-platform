import {Body, Controller, Get, Param, Post, Req} from '@nestjs/common';
import {UserService} from "./user.service";
import {CreateUserDto} from "./dto/create.user.dto";
import {User} from "./user.entity";
import * as process from "process";
import {CreateSnippetDto} from "../snippets/snippets/dto/create.snippet.dto";
import {Snippet} from "../snippets/snippets/snippet.entity";

@Controller('users')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {}

    @Get()
    getSnippets(): Promise<User[]>{
        return this.userService.getAllUsers()
    }

    @Post()
    createSnippet(@Body() createUserDto: CreateUserDto): Promise<User>{
        try {
            return this.userService.saveUser(createUserDto)
        }
        catch (error) {
            return error
        }
    }

}
