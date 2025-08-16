import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Link } from "./linkModel";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 63, unique: true })
  username: string;

  @Column({ type: "varchar", length: 63 })
  password: string;

  @Column({ type: "varchar", length: 255, unique: true })
  email: string;

  @OneToMany(() => Link, (link) => link.user, {
    cascade: true,
    eager: true,
  })
  links: Link[];
}
