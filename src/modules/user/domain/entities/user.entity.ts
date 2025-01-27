import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn({
    name: "id",
    type: "int",
    comment: "User's id",
  })
  id: number;

  @Column({
    name: "name",
    type: "varchar",
    length: "100",
    nullable: false,
    comment: "User's name",
  })
  name: string;

  @Column({
    name: "email",
    type: "varchar",
    length: "150",
    nullable: false,
    unique: true,
    comment: "User's email",
  })
  email: string;

  @Column({
    name: "age",
    type: "int",
    nullable: true,
    comment: "User's age",
  })
  age: number;

  @CreateDateColumn({
    name: "created_at",
    type: "timestamp",
    nullable: false,
    comment: "User creation date",
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: "updated_at",
    type: "timestamp",
    nullable: false,
    comment: "User update date",
  })
  updatedAt: Date;

  @DeleteDateColumn({
    name: "deleted_at",
    type: "timestamp",
    nullable: true,
    comment: "User deletion date",
  })
  deletedAt?: Date;
}
