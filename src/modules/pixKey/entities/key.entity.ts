import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { TransactionEntity } from "../../transaction/entities/transaction.entity";
import { UsersEntity } from "../../users/entities/User";

@Entity("keys")
class KeysEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  key: string;

  @Column()
  user_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => UsersEntity, (user) => user.keys)
  @JoinColumn({
    name: "user_id",
  })
  user: UsersEntity;

  @OneToMany(() => TransactionEntity, (transaction) => transaction.key)
  transaction: TransactionEntity;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { KeysEntity };
