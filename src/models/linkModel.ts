import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./userModel";

@Entity()
export class Link {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 511 })
  originalUrl: string;

  @Column({ type: "varchar", length: 127, unique: true })
  shortUrl: string;

  @ManyToOne(() => User, (user) => user.links, {
    onDelete: "CASCADE",
  })
  user: User;
}
