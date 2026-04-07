import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({type: 'text'})
    description: string;

    @Column({type: 'decimal'})
    price: number;

    @Column({type: 'int', default: 0})
    stock: number;

    @Column()
    category: string;

    @CreateDateColumn()
    createdAt: Date;
}