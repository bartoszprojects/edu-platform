import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    DeleteDateColumn,
    UpdateDateColumn,
    ManyToOne
} from 'typeorm';
import { Exclude, Expose } from "class-transformer";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 20, nullable: false})
    username: string;

    @Column({nullable: true})
    name?: string;

    @Column({nullable: true})
    surname?: string;

    @Column({nullable: true})
    email?: string;

    @Column({nullable: true})
    country?: string;

    @Exclude()
    @Column({ type: "character varying", length: 100, nullable: false })
    password: string;

    @CreateDateColumn()
    createdAt?: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

    @UpdateDateColumn()
    updatedAt?: Date;

}
