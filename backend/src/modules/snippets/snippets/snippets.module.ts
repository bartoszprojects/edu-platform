import { Module } from '@nestjs/common';
import {SnippetsService} from "./snippets.service";
import {SnippetsController} from "./snippets.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Snippet} from "./snippet.entity";
import {SnippetCategory} from "../../snippet.categories/snippet.categories.entity";
import {SnippetCategoriesModule} from "../../snippet.categories/snippet.categories.module";

@Module({
    providers: [SnippetsService],
    controllers: [SnippetsController],
    imports: [TypeOrmModule.forFeature([Snippet, SnippetCategory]), SnippetCategoriesModule],
})
export class SnippetsModule {}
