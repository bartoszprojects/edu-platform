import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, DeleteDateColumn, UpdateDateColumn} from 'typeorm';

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

}
