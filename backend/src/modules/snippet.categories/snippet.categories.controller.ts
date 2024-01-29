import {Body, Controller, Get, Post, Req} from '@nestjs/common';

import * as process from "process";
import {SnippetCategory} from "./snippet.categories.entity";
import {CreateSnippetCategoryDto} from "./dto/create.snippet.category.dto";
import {SnippetCategoriesService} from "./snippet.categories.service";

@Controller('snippets-categories')
export class SnippetCategoriesController {
    constructor(
        private readonly snippetsCategoriesService: SnippetCategoriesService
    ) {}

    @Get()
    getSnippetsCategories(): Promise<SnippetCategory[]>{
        return this.snippetsCategoriesService.getAllSnippets()
    }

    @Post()
    createSnippetCategory(@Body() createSnippetCategoryDto: CreateSnippetCategoryDto): Promise<SnippetCategory> {
        return this.snippetsCategoriesService.saveSnippet(createSnippetCategoryDto)
    }
}
