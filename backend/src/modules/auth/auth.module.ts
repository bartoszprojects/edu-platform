import {forwardRef, Module} from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../users/user.entity";
import {UserService} from "../users/user.service";
import {UserController} from "../users/user.controller";
import {JwtModule, JwtService} from "@nestjs/jwt";
import {UserModule} from "../users/user.module";



@Module({
  imports: [
    forwardRef(() => UserModule),
    JwtModule.register({
      secret: '$541!%$#$!g.gfdsa4', // Provide your own secret key
      signOptions: { expiresIn: '10h' }, // Adjust expiration as needed
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService], // Provide JwtService
  exports: [AuthService],
})
export class AuthModule {}
