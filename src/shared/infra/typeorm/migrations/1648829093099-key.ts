import {MigrationInterface, QueryRunner} from "typeorm";

export class key1648829093099 implements MigrationInterface {
    name = 'key1648829093099'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "keys" ("id" character varying NOT NULL, "key" character varying NOT NULL, "user_id" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_e63d5d51e0192635ab79aa49644" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "keys" ADD CONSTRAINT "FK_7343de75df3b0ac425986de1bab" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "keys" DROP CONSTRAINT "FK_7343de75df3b0ac425986de1bab"`);
        await queryRunner.query(`DROP TABLE "keys"`);
    }

}
