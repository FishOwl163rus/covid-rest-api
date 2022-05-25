import { MigrationInterface, QueryRunner } from "typeorm";

export class init1653491726333 implements MigrationInterface {
    name = 'init1653491726333'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "countries" ("id" SERIAL NOT NULL, "country" character varying NOT NULL, "slug" character varying NOT NULL, "iso2" character varying NOT NULL, CONSTRAINT "PK_b2d7006793e8697ab3ae2deff18" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "countries"`);
    }

}
