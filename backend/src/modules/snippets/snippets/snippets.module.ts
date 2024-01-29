import { Module } from '@nestjs/common';
import {SnippetsService} from "./snippets.service";
import {SnippetsController} from "./snippets.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Snippet} from "./snippet.entity";

@Module({
    providers: [SnippetsService],
    controllers: [SnippetsController],
    imports: [TypeOrmModule.forFeature([Snippet])],
})
export class SnippetsModule {}
