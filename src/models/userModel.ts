import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Link } from "./linkModel";
import { Role } from "../utils/enums";

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

  @Column({ type: "enum", enum: Role, default: Role.USER })
  role: Role;

  @OneToMany(() => Link, (link) => link.user, {
    cascade: true,
    eager: true,
  })
  links: Link[];
}
