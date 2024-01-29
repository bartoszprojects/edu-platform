import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Snippet} from "./snippet.entity";
import {Repository} from "typeorm";
import {CreateSnippetDto} from "./dto/create.snippet.dto";

@Injectable()
export class SnippetsService {
    constructor(
        @InjectRepository(Snippet)
        private snippetRepository: Repository<Snippet>,
    ) {}

    async getAllSnippets(): Promise<Snippet[]> {
        return this.snippetRepository.find();
    }

    async saveSnippet(createSnippetDto: CreateSnippetDto): Promise<Snippet> {
        const snippet = this.snippetRepository.create(createSnippetDto);
        return this.snippetRepository.save(snippet);
    }
}

