import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CreateUserDto {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ unique: true })
    email: string;
  
    @Column()
    password: string;
}
