import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Snippet} from "../snippets/snippets/snippet.entity";
import {Repository} from "typeorm";
import {CreateSnippetDto} from "../snippets/snippets/dto/create.snippet.dto";
import {SnippetCategory} from "./snippet.categories.entity";
import {CreateSnippetCategoryDto} from "./dto/create.snippet.category.dto";

@Injectable()
export class SnippetCategoriesService {
    constructor(
        @InjectRepository(SnippetCategory)
        private snippetRepository: Repository<SnippetCategory>,
    ) {}

    async getAllSnippets(): Promise<SnippetCategory[]> {
        return this.snippetRepository.find();
    }

    async saveSnippet(createSnippetCategoryDto: CreateSnippetCategoryDto): Promise<SnippetCategory> {
        const snippet = this.snippetRepository.create(createSnippetCategoryDto);
        return this.snippetRepository.save(snippet);
    }
}
