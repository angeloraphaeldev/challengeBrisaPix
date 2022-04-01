import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { UsersEntity } from "../../users/entities/User";
import { v4 as uuidV4 } from "uuid";
import { KeysEntity } from "../../pixKey/entities/key.entity";

@Entity("transactions")
class TransactionEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  key_id: string;

  @Column()
  user_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => UsersEntity, (user) => user.transaction)
  @JoinColumn({
    name: "user_id",
  })
  user: UsersEntity;

  @ManyToOne(() => KeysEntity, (key) => key.transaction)
  @JoinColumn({
    name: "key_id",
  })
  key: KeysEntity;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { TransactionEntity };
