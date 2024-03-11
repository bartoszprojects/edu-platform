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
        private snippetCategoryRepository: Repository<any>
    ) {  }

    async getAllSnippetsCategories(): Promise<SnippetCategory[]> {
        return this.snippetCategoryRepository.find();
    }

    async saveSnippetCategory(createSnippetCategory: CreateSnippetCategoryDto): Promise<SnippetCategory> {
        const snippet: SnippetCategory = this.snippetCategoryRepository.create(createSnippetCategory);
        return this.snippetCategoryRepository.save(snippet);
    }

    async saveSnippetCategories(snippets: CreateSnippetCategoryDto[]): Promise<CreateSnippetCategoryDto[]> {

        let snippet: any = this.snippetCategoryRepository.create(snippets);
        return this.snippetCategoryRepository.save(snippet);
    }

    async getSnippetCategoriesWithUser(userId: number): Promise<Partial<SnippetCategory[]>> {
        return this.snippetCategoryRepository
            .createQueryBuilder('category')
            .leftJoinAndSelect('category.user', 'user')
            .select(['category.id', 'category.snippet_category', 'category.description'])
            .where('user.id = :userId', { userId })
            .getMany();
    }

    async getSnippetsCategoriesByUserAndParentCategoryId(userId: number, parentCategoryId: number): Promise<Partial<SnippetCategory[]>> {
        return this.snippetCategoryRepository
            .createQueryBuilder('category')
            .leftJoinAndSelect('category.user', 'user')
            .select(['category.id', 'category.snippet_category', 'category.description'])
            .where('user.id = :userId', { userId })
            .where('category.parentCategoryId = :parentCategoryId', { parentCategoryId })
            .getMany();
    }
}
