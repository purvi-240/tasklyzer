import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Todo{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @Column()
    description!: string;

    @Column({ default: false})
    completed!: boolean;

    @Column()
    due_date!: Date;
}