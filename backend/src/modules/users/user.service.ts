import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./user.entity";
import {Repository} from "typeorm";
import {CreateUserDto} from "./dto/create.user.dto";
import {AuthService} from "../auth/auth.service";
import {LoginUserDTO} from "./dto/get.user.dto";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,

        private authService: AuthService
    ) {}

    async getAllUsers(): Promise<User[]> {
        return this.userRepository.find();
    }

    async findOneUser(loginUserDTO: LoginUserDTO): Promise<User> {

        const { username } = loginUserDTO
        return this.userRepository.findOne({where: {username}})
    }

    async saveUser(createUserDto: CreateUserDto): Promise<User> {

        createUserDto.password = await this.authService.hashPassword(createUserDto.password)
        const user: User = this.userRepository.create(createUserDto);
        return this.userRepository.save(user);
    }

}

