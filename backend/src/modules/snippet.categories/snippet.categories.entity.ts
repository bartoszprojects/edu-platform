import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    DeleteDateColumn,
    UpdateDateColumn,
    OneToMany, ManyToOne
} from 'typeorm';
import {Snippet} from "../snippets/snippets/snippet.entity";
import {User} from "../users/user.entity";

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

    @OneToMany(() => Snippet, (snippet: Snippet) => snippet.category)
    snippets: Snippet[];

    @ManyToOne(() => User)
    user: User

}
