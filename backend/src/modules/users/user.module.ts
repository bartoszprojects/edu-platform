import {forwardRef, Module} from '@nestjs/common';
import {UserService} from "./user.service";
import {UserController} from "./user.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./user.entity";
import {AuthService} from "../auth/auth.service";
import {AuthModule} from "../auth/auth.module";



@Module({
    providers: [UserService],
    controllers: [UserController],
    imports: [TypeOrmModule.forFeature([User]), forwardRef(() => AuthModule)],
    exports: [UserService],
})
export class UserModule {}
