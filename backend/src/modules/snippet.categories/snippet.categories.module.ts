import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {SnippetCategory} from "./snippet.categories.entity";
import {SnippetCategoriesService} from "./snippet.categories.service";
import {SnippetCategoriesController} from "./snippet.categories.controller";

@Module({
    providers: [SnippetCategoriesService],
    controllers: [SnippetCategoriesController],
    imports: [TypeOrmModule.forFeature([SnippetCategory])],
})
export class SnippetCategoriesModule {}
