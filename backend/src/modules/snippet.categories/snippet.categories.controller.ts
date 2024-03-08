import {Body, Controller, Get, Param, Post, Req} from '@nestjs/common';

import * as process from "process";
import {SnippetCategory} from "./snippet.categories.entity";
import {CreateSnippetCategoryDto} from "./dto/create.snippet.category.dto";
import {SnippetCategoriesService} from "./snippet.categories.service";
import {Snippet} from "../snippets/snippets/snippet.entity";

@Controller('snippets-categories')
export class SnippetCategoriesController {
    constructor(
        private readonly snippetsCategoriesService: SnippetCategoriesService
    ) {}

    @Get()
    getSnippetsCategories(): Promise<SnippetCategory[]>{
        return this.snippetsCategoriesService.getAllSnippetsCategories()
    }

    @Post()
    createSnippetCategory(@Body() createSnippetCategoryDto: CreateSnippetCategoryDto): Promise<SnippetCategory> {
        return this.snippetsCategoriesService.saveSnippetCategory(createSnippetCategoryDto)
    }

    @Get('user/:userId')
    async getSnippetsCategoriesByUser(@Param('userId') userId: number): Promise<SnippetCategory[]> {
        return this.snippetsCategoriesService.getSnippetCategoriesWithUser(userId);
    }

}
