import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { KeysEntity } from "../../pixKey/entities/key.entity";
import { TransactionEntity } from "../../transaction/entities/transaction.entity";
@Entity("users")
export class UsersEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => KeysEntity, (key) => key.user)
  keys: KeysEntity[];

  @OneToMany(() => TransactionEntity, (transaction) => transaction.user)
  transaction: TransactionEntity;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
