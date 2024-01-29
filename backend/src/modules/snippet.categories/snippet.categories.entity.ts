import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    DeleteDateColumn,
    UpdateDateColumn,
    OneToMany
} from 'typeorm';
import {Snippet} from "../snippets/snippets/snippet.entity";

@Entity()
export class SnippetCategory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    snippet_category: string;

    @Column()
    description: string;

    @Column()
    category_level: number;

    @CreateDateColumn()
    createdAt?: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

    @UpdateDateColumn()
    updatedAt?: Date;

    @OneToMany(() => Snippet, snippet => snippet.category)
    snippets: Snippet[];


}
