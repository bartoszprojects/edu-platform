import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    DeleteDateColumn,
    UpdateDateColumn,
    ManyToOne
} from 'typeorm';
import {SnippetCategory} from "../../snippet.categories/snippet.categories.entity";

@Entity()
export class Snippet {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    snippet: string;

    @CreateDateColumn()
    createdAt?: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

    @UpdateDateColumn()
    updatedAt?: Date;

    @ManyToOne(() => SnippetCategory, (category: SnippetCategory) => category.snippets)
    category: SnippetCategory;

}
