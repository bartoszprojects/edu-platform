import {Body, Controller, Get, Param, Post, Req} from '@nestjs/common';
import {SnippetsService} from "./snippets.service";
import {CreateSnippetDto} from "./dto/create.snippet.dto";
import {Snippet} from "./snippet.entity";
import * as process from "process";

@Controller('snippets')
export class SnippetsController {
    constructor(
        private readonly snippetsService: SnippetsService
    ) {}

    @Get()
    getSnippets(): Promise<Snippet[]>{
        return this.snippetsService.getAllSnippets()
    }

    @Get('category/:categoryId')
    async getSnippetsByCategory(@Param('categoryId') categoryId: number): Promise<Snippet[]> {
        return this.snippetsService.getAllSnippetsWithCategory(categoryId);
    }

    @Post()
    createSnippet(@Body() createSnippetDto: CreateSnippetDto): Promise<Snippet>  | string{
        return this.snippetsService.saveSnippet(createSnippetDto)

    }
}
