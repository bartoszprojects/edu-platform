import {Body, Controller, Post} from '@nestjs/common';
import {User} from "../users/user.entity";
import {AuthService} from "./auth.service";
import {LoginUserDTO} from "../users/dto/get.user.dto";

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) {}

    @Post()
    async createSnippet(@Body() loginUserDTO: LoginUserDTO): Promise<any>{
        return this.authService.signIn(loginUserDTO)
    }
}
